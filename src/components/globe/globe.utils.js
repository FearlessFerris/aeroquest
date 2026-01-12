// Globe Utils Implementation 


// Dependencies 


// Components & Necessary Files 


// Globe Utils
export const DEMO_FLIGHTS_JSON = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { id: 'DAL123', callsign: 'DAL123', airline: 'Delta', altitude: 36000, speed: 455 },
        geometry: { type: 'Point', coordinates: [-74.006, 40.7128] }, 
      },
      {
        type: 'Feature',
        properties: { id: 'AAL457', callsign: 'AAL457', airline: 'American', altitude: 38000, speed: 470 },
        geometry: { type: 'Point', coordinates: [-118.4085, 33.9416] }, 
      },
      {
        type: 'Feature',
        properties: { id: 'UAL902', callsign: 'UAL902', airline: 'United', altitude: 41000, speed: 495 },
        geometry: { type: 'Point', coordinates: [-87.9073, 41.9742] }, 
      },
      {
        type: 'Feature',
        properties: { id: 'SWA331', callsign: 'SWA331', airline: 'Southwest', altitude: 35000, speed: 445 },
        geometry: { type: 'Point', coordinates: [-97.0403, 32.8998] }, 
      },
      {
        type: 'Feature',
        properties: { id: 'DAL884', callsign: 'DAL884', airline: 'Delta', altitude: 39000, speed: 485 },
        geometry: { type: 'Point', coordinates: [-84.4277, 33.6407] }, 
      },
      {
        type: 'Feature',
        properties: { id: 'JBU214', callsign: 'JBU214', airline: 'JetBlue', altitude: 34000, speed: 430 },
        geometry: { type: 'Point', coordinates: [-80.2906, 25.7959] }, 
      },
      {
        type: 'Feature',
        properties: { id: 'ASA721', callsign: 'ASA721', airline: 'Alaska', altitude: 37000, speed: 460 },
        geometry: { type: 'Point', coordinates: [-122.3088, 47.4502] }, 
      },
      {
        type: 'Feature',
        properties: { id: 'UAL118', callsign: 'UAL118', airline: 'United', altitude: 40000, speed: 500 },
        geometry: { type: 'Point', coordinates: [-122.3790, 37.6213] }, 
      },
      {
        type: 'Feature',
        properties: { id: 'AAL672', callsign: 'AAL672', airline: 'American', altitude: 36000, speed: 455 },
        geometry: { type: 'Point', coordinates: [-112.0116, 33.4342] }, 
      },
      {
        type: 'Feature',
        properties: { id: 'DAL219', callsign: 'DAL219', airline: 'Delta', altitude: 38500, speed: 480 },
        geometry: { type: 'Point', coordinates: [-104.6737, 39.8561] },
      },
      {
        type: 'Feature',
        properties: { id: 'UAL550', callsign: 'UAL550', airline: 'United', altitude: 34500, speed: 440 },
        geometry: { type: 'Point', coordinates: [-71.0052, 42.3656] },
      },
    ],
  };

  export function getRegionLabel(lat, lng) {
  if (lat > 15 && lat < 72 && lng > -170 && lng < -50) return 'North America';
  if (lat > -60 && lat < 15 && lng > -95 && lng < -30) return 'South America';
  if (lat > 35 && lat < 72 && lng > -25 && lng < 45) return 'Europe';
  if (lat > -35 && lat < 35 && lng > -20 && lng < 55) return 'Africa';
  if (lat > 5 && lat < 75 && lng > 45 && lng < 180) return 'Asia';
  if (lat > -50 && lat < 5 && lng > 95 && lng < 180) return 'Oceania';
  if (lat < -60) return 'Antarctica';
  return 'Open Ocean';
}


export function setupCtrlScrollZoom(map) {
  map.scrollZoom.disable();

  const canvas = map.getCanvasContainer();

  const onWheel = (e) => {
    if (e.ctrlKey) {
      map.scrollZoom.enable();
      return;
    }
    map.scrollZoom.disable();
  };

  canvas.addEventListener('wheel', onWheel, { passive: true });

  return () => {
    canvas.removeEventListener('wheel', onWheel);
  };
}


export function setupSlowCtrlRotate(map) {
  map.dragRotate.disable();
  map.touchZoomRotate.disableRotation();

  const canvas = map.getCanvasContainer();

  let rotating = false;
  let startX = 0;
  let startY = 0;
  let startBearing = 0;
  let startPitch = 0;
  const bearingFactor = 0.12;
  const pitchFactor = 0.08;

  const onMouseDown = (e) => {
    if (!e.ctrlKey) return;
    if (e.button !== 0) return;

    rotating = true;
    startX = e.clientX;
    startY = e.clientY;
    startBearing = map.getBearing();
    startPitch = map.getPitch();

    e.preventDefault();
    e.stopPropagation();
  };

  const onMouseMove = (e) => {
    if (!rotating) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    map.setBearing(startBearing + dx * bearingFactor);
    map.setPitch(clamp(startPitch - dy * pitchFactor, 0, 60));

    e.preventDefault();
    e.stopPropagation();
  };

  const onMouseUp = () => {
    rotating = false;
  };

  canvas.addEventListener('mousedown', onMouseDown, true);
  window.addEventListener('mousemove', onMouseMove, true);
  window.addEventListener('mouseup', onMouseUp, true);
  window.addEventListener('blur', onMouseUp, true);

  return () => {
    canvas.removeEventListener('mousedown', onMouseDown, true);
    window.removeEventListener('mousemove', onMouseMove, true);
    window.removeEventListener('mouseup', onMouseUp, true);
    window.removeEventListener('blur', onMouseUp, true);
  };
}

export function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}
