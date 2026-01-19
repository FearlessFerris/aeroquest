'use client';

import { useEffect, useMemo, useRef } from 'react';

function hexToRgb(hex) {
  const h = (hex || '').replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full || '000000', 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export default function GlowBorderParticles({
  color = '#f5e9cf',

  // Feel knobs
  density = 1.0,
  intensity = 1.0,
  outward = 1.0,
  gravity = 0.25,
  blur = 6,

  // Ember look
  sizeRange = [0.8, 1.4],
  speedRange = [0.35, 1.35],
  lifeRange = [38, 92],

  // Layout knobs
  inset = 0,          // extra padding from the edge (in canvas space)
  clip = false,       // clip to rounded rect
  spawnInset = 0,     // offsets the spawn ring inward/outward (use this to align to border)

  // Performance knobs
  fps = 24,
  dprMax = 1.15,

  // NEW perf knobs
  maxParticles = 200,        // hard cap
  composite = 'screen',      // 'lighter' is heavier; 'screen' looks similar
  blurEvery = 3,             // blur 1 out of N particles
  pauseWhenHidden = true,    // stop animating when tab is hidden
  paused = false,            // manual pause switch (optional)

  // Rounded-rect clip radius in px (match your shell). If null, uses 36px.
  radiusPx = 36,

  className,
  style,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const roRef = useRef(null);

  const particlesRef = useRef([]);
  const ctxRef = useRef(null);

  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });
  const timeRef = useRef({ last: 0 });

  const rgb = useMemo(() => hexToRgb(color), [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    // Respect reduced motion
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    ctxRef.current = ctx;

    const rand = (a, b) => a + Math.random() * (b - a);

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = clamp(window.devicePixelRatio || 1, 1, dprMax);

      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));

      sizeRef.current = { w, h, dpr };

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const ro = new ResizeObserver(() => resize());
    ro.observe(parent);
    roRef.current = ro;

    let isHiddenPaused = false;

    const onVis = () => {
      if (!pauseWhenHidden) return;
      isHiddenPaused = document.visibilityState !== 'visible';
    };

    if (pauseWhenHidden && typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', onVis);
      onVis();
    }

    const drawClippedRoundedRect = (ctx2, w, h) => {
      const radius = clamp(radiusPx ?? 36, 0, Math.min(w, h) / 2);

      ctx2.beginPath();
      ctx2.moveTo(radius, 0);
      ctx2.arcTo(w, 0, w, h, radius);
      ctx2.arcTo(w, h, 0, h, radius);
      ctx2.arcTo(0, h, 0, 0, radius);
      ctx2.arcTo(0, 0, w, 0, radius);
      ctx2.closePath();
    };

    const spawnFromPerimeter = (count) => {
      const { w, h } = sizeRef.current;
      const pad = inset + spawnInset;

      for (let i = 0; i < count; i += 1) {
        const edge = Math.floor(Math.random() * 4);

        let x = 0;
        let y = 0;
        let nx = 0;
        let ny = 0;

        if (edge === 0) {
          // top
          x = rand(pad, w - pad);
          y = pad;
          nx = 0;
          ny = -1;
        } else if (edge === 1) {
          // right
          x = w - pad;
          y = rand(pad, h - pad);
          nx = 1;
          ny = 0;
        } else if (edge === 2) {
          // bottom
          x = rand(pad, w - pad);
          y = h - pad;
          nx = 0;
          ny = 1;
        } else {
          // left
          x = pad;
          y = rand(pad, h - pad);
          nx = -1;
          ny = 0;
        }

        const speed = rand(speedRange[0], speedRange[1]) * outward;

        // tangential drift
        const tx = -ny;
        const ty = nx;
        const tangent = rand(-1.0, 1.0);

        const vx = nx * speed + tx * tangent * 0.35;
        const vy = ny * speed + ty * tangent * 0.2 + rand(0.02, 0.18) * gravity;

        particlesRef.current.push({
          x,
          y,
          vx,
          vy,
          r: rand(sizeRange[0], sizeRange[1]),
          life: rand(lifeRange[0], lifeRange[1]),
          age: 0,
          tw: rand(0.6, 1.1),
        });
      }
    };

    const frameMs = 1000 / clamp(fps, 12, 60);

    const step = (now) => {
      rafRef.current = requestAnimationFrame(step);

      if (paused) return;
      if (isHiddenPaused) return;

      const { w, h } = sizeRef.current;
      if (!w || !h) return;

      // Throttle to target fps
      const t = timeRef.current;
      if (!t.last) t.last = now;
      const delta = now - t.last;
      if (delta < frameMs) return;
      t.last = now - (delta % frameMs);

      ctx.clearRect(0, 0, w, h);

      if (clip) {
        ctx.save();
        drawClippedRoundedRect(ctx, w, h);
        ctx.clip();
      }

      // Composite mode (screen is cheaper than lighter and similar-looking)
      ctx.globalCompositeOperation = composite;

      // Spawn rate based on perimeter
      const perimeter = (w + h) * 2;
      const baseRate = perimeter / 950; // slightly lower by default
      const spawnCount = Math.floor(clamp(baseRate * density, 0.25, 4.5) + Math.random());
      spawnFromPerimeter(spawnCount);

      // Hard cap particle count
      if (particlesRef.current.length > maxParticles) {
        particlesRef.current.splice(0, particlesRef.current.length - maxParticles);
      }

      const next = [];
      let i = 0;

      const glowBlur = clamp(blur, 0, 18);

      for (const p of particlesRef.current) {
        i += 1;

        p.age += 1;
        if (p.age >= p.life) continue;

        p.x += p.vx;
        p.y += p.vy;

        const t2 = p.age / p.life;
        const alpha = (1 - t2) * 0.95 * intensity;
        const tw = 0.75 + Math.sin(p.age * 0.35 + p.tw * 10) * 0.25;

        // Blur only every Nth particle (big perf win)
        const doBlur = glowBlur > 0 && (i % blurEvery === 0);

        if (doBlur) {
          ctx.filter = `blur(${glowBlur}px)`;
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * tw * 0.5})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 1.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // crisp ember core
        ctx.filter = 'none';
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * tw})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.55, p.r * 0.55), 0, Math.PI * 2);
        ctx.fill();

        next.push(p);
      }

      particlesRef.current = next;

      ctx.globalCompositeOperation = 'source-over';
      if (clip) ctx.restore();
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;

      if (roRef.current) roRef.current.disconnect();
      roRef.current = null;

      if (pauseWhenHidden && typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', onVis);
      }

      particlesRef.current = [];
      ctxRef.current = null;
      timeRef.current.last = 0;
    };
  }, [
    rgb.r,
    rgb.g,
    rgb.b,
    density,
    intensity,
    outward,
    gravity,
    blur,
    inset,
    clip,
    spawnInset,
    fps,
    dprMax,
    maxParticles,
    composite,
    blurEvery,
    pauseWhenHidden,
    paused,
    radiusPx,
    sizeRange,
    speedRange,
    lifeRange,
  ]);

  return (
  <canvas
    ref = {canvasRef}
    className = {className}
    style = {{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,

      // 👇 soft fade out around the whole canvas so it blends into the page
      WebkitMaskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
      maskImage: 'radial-gradient(closest-side, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',

      ...style,
    }}
  />
);

}