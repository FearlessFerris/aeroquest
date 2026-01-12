'use client';
// Globe Component Implementation 


// Dependencies 
import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';


// Components & Necessary Files 
import { globeSx } from '@/styles/components/globe.styles';
import FlightInspector from '@/components/flights/FlightInspector';
import MissionHUD from './MissionHUD';
import { DEMO_FLIGHTS_JSON, getRegionLabel } from './globe.utils';
import { initGlobeMap } from './mapbox.init';



// Globe Component
export default function Globe({
    initialView = {
        center: [-90, 34],
        zoom: 4
    },
    onSelectFlight,
}) {
    const flightsGeoJSON = DEMO_FLIGHTS_JSON;
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    const initialViewRef = useRef(initialView);
    const onSelectFlightRef = useRef(onSelectFlight);
    const [ready, setReady] = useState(false);
    const [showHelp, setShowHelp] = useState(true);
    const [regionLabel, setRegionLabel] = useState('Open Ocean');
    const [lastSyncAt, setLastSyncAt] = useState(Date.now());
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [inspectorOpen, setInspectorOpen] = useState(false);
    useEffect(() => {
        onSelectFlightRef.current = onSelectFlight;
    }, [onSelectFlight]);


    useEffect(() => {
        const t = setTimeout(() => setShowHelp(false), 8500);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (!mapContainerRef.current) return;
        if (mapRef.current) return;
        if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) return;

        const controller = initGlobeMap({
            containerEl: mapContainerRef.current,
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            initialView: initialViewRef.current,
            flightsGeoJSON,
            onRegionChange: (lat, lng) => setRegionLabel(getRegionLabel(lat, lng)),
            onFlightClick: (feature) => {
                const props = feature.properties || {};
                const coords = feature.geometry?.coordinates;
                const picked = {
                    id: props.id,
                    callsign: props.callsign,
                    airline: props.airline,
                    altitude: Number(props.altitude),
                    speed: Number(props.speed),
                    coordinates: coords,
                };
                setSelectedFlight(picked);
                setInspectorOpen(true);
                onSelectFlightRef.current?.(picked);
            },
            onReady: (map) => {
                mapRef.current = map;
                setReady(true);
                setLastSyncAt(Date.now());
            },
        });

        return () => {
            controller.destroy();
            mapRef.current = null;
        };
    }, [flightsGeoJSON]);

    return (
        <Box sx={globeSx.root}>
            <Box ref={mapContainerRef} sx={globeSx.map} />
            <Box sx={globeSx.vignette} />
            <Box sx={globeSx.rim} />

            <Box sx={globeSx.helpWrap}>
                {showHelp && (
                    <Box sx={globeSx.helpChip}>
                        <Box sx={globeSx.helpDot} />
                        <Typography sx={globeSx.helpText}>
                            Drag to rotate · Ctrl + Scroll to zoom
                        </Typography>
                    </Box>
                )}

                <Box
                    role="button"
                    tabIndex={0}
                    sx={globeSx.helpBtn}
                    onClick={() => setShowHelp((v) => !v)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setShowHelp((v) => !v);
                    }}
                    aria-label="Toggle map help"
                    title="Map help"
                >
                    <Typography sx={{ fontSize: '1rem', opacity: 0.9, userSelect: 'none' }}>?</Typography>
                </Box>
            </Box>
            <Box sx={globeSx.hudWrap}>
                <MissionHUD
                    flightsCount={flightsGeoJSON.features.length}
                    regionLabel={regionLabel}
                    lastSyncAt={lastSyncAt}
                />
            </Box>
            <FlightInspector
                open={inspectorOpen}
                flight={selectedFlight}
                onClose={() => setInspectorOpen(false)}
                onTrack={() => console.log('track', selectedFlight)}
                onOpenDetail={() => console.log('open detail', selectedFlight)}
            />

            {!ready && <Box sx={globeSx.loading} />}
        </Box>
    );
}

