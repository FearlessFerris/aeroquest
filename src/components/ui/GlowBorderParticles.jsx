'use client';

import { useEffect, useMemo, useRef } from 'react';

function hexToRgb(hex) {
  const h = hex.replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export default function GlowBorderParticles({
  color = '#f5e9cf',

  // feel knobs
  density = 1.0,
  intensity = 1.0,
  outward = 1.0,
  gravity = 0.45,
  blur = 10,

  // ember look
  sizeRange = [0.8, 2.2],
  speedRange = [0.35, 1.35],
  lifeRange = [38, 92],

  // layout knobs
  inset = 0,
  expand = 0,     // how far canvas extends outside the parent
  clip = false,   // clip to rounded corners or let particles leave

  // performance knobs
  fps = 24,       // 👈 huge win: throttle particle loop
  dprMax = 1.55,  // 👈 cap device pixel ratio for perf (1.5–2 is a good range)

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

    // If user has reduced-motion on, don't animate particles.
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

      const w = Math.max(1, Math.floor(rect.width + expand * 2));
      const h = Math.max(1, Math.floor(rect.height + expand * 2));

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

    const spawnFromPerimeter = (count) => {
      const { w, h } = sizeRef.current;

      const innerW = w - expand * 2;
      const innerH = h - expand * 2;

      for (let i = 0; i < count; i += 1) {
        const edge = Math.floor(Math.random() * 4);

        let x = 0;
        let y = 0;
        let nx = 0;
        let ny = 0;

        if (edge === 0) {
          x = rand(0 + inset, innerW - inset);
          y = 0 + inset;
          nx = 0;
          ny = -1;
        } else if (edge === 1) {
          x = innerW - inset;
          y = rand(0 + inset, innerH - inset);
          nx = 1;
          ny = 0;
        } else if (edge === 2) {
          x = rand(0 + inset, innerW - inset);
          y = innerH - inset;
          nx = 0;
          ny = 1;
        } else {
          x = 0 + inset;
          y = rand(0 + inset, innerH - inset);
          nx = -1;
          ny = 0;
        }

        // offset into expanded canvas space
        x += expand;
        y += expand;

        const speed = rand(speedRange[0], speedRange[1]) * outward;

        // tangential variation for "ember drift"
        const tx = -ny;
        const ty = nx;
        const tangent = rand(-1.0, 1.0);

        const vx = nx * speed + tx * tangent * 0.35;
        const vy = ny * speed + ty * tangent * 0.20 + rand(0.05, 0.28) * gravity;

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

    const drawClippedRoundedRect = (ctx2, w, h) => {
      // ~2.2rem @ 16px base
      const radius = 36;

      ctx2.beginPath();
      ctx2.moveTo(radius, 0);
      ctx2.arcTo(w, 0, w, h, radius);
      ctx2.arcTo(w, h, 0, h, radius);
      ctx2.arcTo(0, h, 0, 0, radius);
      ctx2.arcTo(0, 0, w, 0, radius);
      ctx2.closePath();
    };

    const frameMs = 1000 / clamp(fps, 12, 60);

    const step = (now) => {
      rafRef.current = requestAnimationFrame(step);

      const { w, h } = sizeRef.current;
      if (!w || !h) return;

      // Throttle to target fps (big perf win)
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

      // additive glow
      ctx.globalCompositeOperation = 'lighter';

      // spawn rate based on perimeter (consistent feel across sizes)
      const perimeter = (w + h) * 2;
      const baseRate = perimeter / 900;

      // Slightly clamp max spawns so it never explodes on huge screens
      const spawnCount = Math.floor(clamp(baseRate * density, 0.35, 6.0) + Math.random());
      spawnFromPerimeter(spawnCount);

      const next = [];
      let i = 0;

      // Precompute a softened blur (blur is expensive; don't overdo it)
      const glowBlur = clamp(blur, 0, 20);

      for (const p of particlesRef.current) {
        i += 1;
        p.age += 1;
        if (p.age >= p.life) continue;

        p.x += p.vx;
        p.y += p.vy;

        const t2 = p.age / p.life;
        const alpha = (1 - t2) * 0.95 * intensity;

        const tw = 0.75 + Math.sin(p.age * 0.35 + p.tw * 10) * 0.25;

        // Performance trick:
        // blur only every other particle (still looks basically identical)
        const doBlur = (i & 1) === 0 && glowBlur > 0;

        // 1) glow pass
        if (doBlur) {
          ctx.filter = `blur(${glowBlur}px)`;
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * tw * 0.55})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 1.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // 2) crisp core dot (the “ember” you actually see)
        ctx.filter = 'none';
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * tw})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, p.r * 0.55), 0, Math.PI * 2);
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

      // Clear refs
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
    expand,
    clip,
    sizeRange,
    speedRange,
    lifeRange,
    fps,
    dprMax,
  ]);

  return (
    <canvas
      ref = {canvasRef}
      className = {className}
      style = {{
        position: 'absolute',
        top: -expand,
        left: -expand,
        pointerEvents: 'none',
        zIndex: 6,
        willChange: 'transform',
        transform: 'translateZ(0)',
        ...style,
      }}
    />
  );
}
