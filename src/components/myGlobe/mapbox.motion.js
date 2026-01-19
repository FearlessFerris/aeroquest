// const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

// const prefersReducedMotion = () =>
//   typeof window !== 'undefined' &&
//   window.matchMedia &&
//   window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// export function applyLuxuryControls(map) {
//   map.dragPan.enable({ linearity: 0.15, maxSpeed: 1400 });

//   map.scrollZoom.enable();
//   map.scrollZoom.setWheelZoomRate(1 / 520);
//   map.scrollZoom.setZoomRate(1 / 220);

//   map.touchZoomRotate.enable({ around: 'center' });

//   map.doubleClickZoom.disable();
//   map.keyboard.disable();
//   map.boxZoom.disable();
// }

// function durationForDistance(map, center, base = 900) {
//   const curr = map.getCenter();
//   const dx = curr.lng - center[0];
//   const dy = curr.lat - center[1];
//   const dist = Math.sqrt(dx * dx + dy * dy);
//   return clamp(base + dist * 220, 850, 2200);
// }

// export function stopAllCamera(map) {
//   try {
//     map.stop();
//   } catch (_) {}
// }

// export function cinematicFlyTo(map, { center, zoom, pitch, bearing, padding }) {
//   if (!map) return;

//   const reduce = prefersReducedMotion();

//   map.flyTo({
//     center,
//     zoom: zoom ?? map.getZoom(),
//     pitch: pitch ?? map.getPitch(),
//     bearing: bearing ?? map.getBearing(),
//     padding: padding ?? { top: 140, bottom: 140, left: 140, right: 140 },

//     curve: 1.35,
//     speed: 1.05,
//     easing: (t) => 1 - Math.pow(1 - t, 3.25),

//     essential: true,
//     duration: reduce ? 0 : durationForDistance(map, center),
//   });
// }

// export function focusSelection(map, selection) {
//   if (!map || !selection) return;

//   const t = selection.type || selection.featureType;

//   if (t === 'airport') {
//     return cinematicFlyTo(map, {
//       center: [selection.lng, selection.lat],
//       zoom: 8.2,
//       pitch: 45,
//       bearing: 20,
//       padding: { top: 170, bottom: 170, left: 220, right: 220 },
//     });
//   }

//   if (t === 'flight') {
//     return cinematicFlyTo(map, {
//       center: [selection.lng, selection.lat],
//       zoom: 5.8,
//       pitch: 55,
//       bearing: 0,
//       padding: { top: 190, bottom: 190, left: 260, right: 260 },
//     });
//   }

//   return cinematicFlyTo(map, {
//     center: map.getCenter().toArray(),
//     zoom: Math.max(map.getZoom(), 4.3),
//     pitch: 30,
//     bearing: map.getBearing() + 16,
//   });
// }

// mapbox.motion.js

export function stopAllCamera(map) {
  try {
    map.stop();
  } catch (_) {}
}

export function applyLuxuryControls(map) {
  // Smooth feel (esp. on trackpads)
  map.dragRotate.enable();
  map.touchZoomRotate.enableRotation();

  // Gentle defaults
  map.setPitch(18);
  map.setBearing(0);
}

/**
 * Fly to a clicked feature with a nice easing curve.
 */
export function focusSelection(map, { lng, lat, featureType }) {
  if (!map || typeof lng !== 'number' || typeof lat !== 'number') return;

  const targetZoom =
    featureType === 'flight' ? 6.2 :
    featureType === 'airport' ? 5.2 :
    4.8;

  // Slight offset so the selected point sits in a “hero” position
  // (Mapbox expects pixel offset)
  const offset = [0, 90];

  map.flyTo({
    center: [lng, lat],
    zoom: targetZoom,
    speed: 0.9,        // lower = smoother
    curve: 1.35,       // higher = more cinematic arc
    easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
    essential: true,
    offset,
    pitch: 24,
    bearing: 0,
  });
}

