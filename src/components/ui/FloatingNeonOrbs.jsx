import React, { useState, useEffect } from 'react';

/**
 * FloatingNeonOrbs Component (Technical & Welcoming Edition)
 * Blends precision cyber-engineering (orbital telemetry rings, constellation lines,
 * coordinate nodes) with warm, living community atmosphere (breathing neon orbs,
 * welcoming beacon waves, and fluid mouse parallax).
 */
export default function FloatingNeonOrbs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse offset (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 0. TECHNICAL BACKDROP: Subtle Architectural Dot Grid */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(0, 229, 255, 0.25) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 30%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 30%, black 20%, transparent 80%)'
        }}
      />

      {/* 0.1 CONSTELLATION CONNECTION BEAMS (Technical Topology) */}
      <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#2979FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#B324E5" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Animated Connecting Vector Beams */}
        <line
          x1="18%"
          y1="18%"
          x2="50%"
          y2="38%"
          stroke="url(#lineGrad1)"
          strokeWidth="1.2"
          className="animate-constellation-dash"
        />
        <line
          x1="82%"
          y1="22%"
          x2="50%"
          y2="38%"
          stroke="url(#lineGrad1)"
          strokeWidth="1.2"
          className="animate-constellation-dash"
        />
        <line
          x1="18%"
          y1="18%"
          x2="14%"
          y2="60%"
          stroke="#00E5FF"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="82%"
          y1="22%"
          x2="86%"
          y2="55%"
          stroke="#B324E5"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>

      {/* 1. NODE A: QUANTUM CYAN ORB (Top Left - Precision Node with Orbital Gyroscope) */}
      <div
        className="absolute -top-10 left-[6%] md:left-[10%] animate-float-orb-1"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        {/* Welcoming Beacon Radar Waves */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-cyan-400/30 animate-beacon-wave" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-cyan-400/15 animate-beacon-wave" style={{ animationDelay: '1.2s' }} />

        {/* Ambient Warm Atmosphere Glow */}
        <div className="absolute -inset-10 rounded-full bg-cyan-400/25 blur-3xl animate-pulse-warm-glow" />

        {/* Outer Orbital Gyroscope Ring (Technical Telemetry) */}
        <div className="absolute -inset-8 rounded-full border border-dashed border-cyan-400/40 animate-spin-orbit">
          {/* Orbiting Satellite Node */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#00E5FF] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white" />
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#2979FF]" />
        </div>

        {/* Inner Counter-Rotating Precision Ring */}
        <div className="absolute -inset-4 rounded-full border border-dotted border-blue-400/30 animate-spin-orbit-reverse" />

        {/* 3D Glass Neon Sphere */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full p-[1.5px] bg-gradient-to-br from-cyan-200 via-cyan-400/60 to-blue-600/30 shadow-[0_0_55px_rgba(0,229,255,0.65),inset_0_0_35px_rgba(255,255,255,0.75)] backdrop-blur-md">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-white/45 flex items-center justify-center overflow-hidden">
            {/* Luminous Specular Reflection */}
            <div className="absolute top-4 left-7 w-16 h-8 sm:w-22 sm:h-11 rounded-full bg-white/75 blur-[3px] -rotate-45" />
            <div className="absolute bottom-5 right-7 w-18 h-9 rounded-full bg-cyan-300/45 blur-[8px]" />

            {/* Technical Node Coordinate Chip */}
            <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-cyan-400/50 shadow-sm flex items-center gap-1.5 opacity-90 scale-90 sm:scale-100">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-[10px] text-cyan-200 tracking-wider font-semibold">
                NODE_01 // LATENCY &lt;1ms
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. NODE B: RADIANT MAGENTA ORB (Top Right - Warm Community Hub) */}
      <div
        className="absolute top-12 right-[5%] md:right-[11%] animate-float-orb-2"
        style={{
          transform: `translate3d(${mousePos.x * -26}px, ${mousePos.y * -22}px, 0)`,
          transition: 'transform 0.45s ease-out'
        }}
      >
        {/* Welcoming Beacon Wave */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-fuchsia-400/30 animate-beacon-wave" style={{ animationDelay: '0.6s' }} />

        {/* Ambient Warm Violet Glow */}
        <div className="absolute -inset-10 rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse-warm-glow" />

        {/* Outer Orbital Telemetry Ring */}
        <div className="absolute -inset-7 rounded-full border border-dashed border-fuchsia-400/40 animate-spin-orbit-reverse">
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-300 shadow-[0_0_12px_#B324E5] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white" />
          </div>
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#8343f4]" />
        </div>

        {/* 3D Glass Neon Sphere */}
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-54 md:h-54 rounded-full p-[1.5px] bg-gradient-to-bl from-pink-200 via-fuchsia-400/60 to-purple-800/30 shadow-[0_0_55px_rgba(179,36,229,0.7),inset_0_0_35px_rgba(255,255,255,0.7)] backdrop-blur-md">
          <div className="w-full h-full rounded-full bg-gradient-to-bl from-purple-500/25 via-pink-500/20 to-white/40 flex items-center justify-center overflow-hidden">
            <div className="absolute top-3.5 right-6 w-14 h-7 sm:w-18 sm:h-9 rounded-full bg-white/80 blur-[2.5px] rotate-45" />
            <div className="absolute bottom-5 left-6 w-14 h-7 rounded-full bg-magenta-accent/50 blur-[7px]" />

            {/* Welcoming Telemetry Chip */}
            <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-fuchsia-400/50 shadow-sm flex items-center gap-1.5 opacity-90 scale-90 sm:scale-100">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-ping" />
              <span className="font-mono text-[10px] text-fuchsia-200 tracking-wider font-semibold">
                COMMUNITY // 142 PODS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. NODE C: ELECTRIC BLUE PULSE ENGINE (Center Hero Depth) */}
      <div
        className="absolute top-64 left-1/2 -translate-x-1/2 animate-float-orb-3"
        style={{
          transform: `translate3d(calc(-50% + ${mousePos.x * 12}px), ${mousePos.y * 14}px, 0)`,
          transition: 'transform 0.6s ease-out'
        }}
      >
        <div className="absolute -inset-16 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative w-52 h-52 sm:w-68 sm:h-68 md:w-84 md:h-84 rounded-full p-[2px] bg-gradient-to-r from-blue-400/40 via-cyan-400/30 to-purple-500/30 shadow-[0_0_65px_rgba(41,121,255,0.45),inset_0_0_40px_rgba(255,255,255,0.5)] backdrop-blur-lg opacity-85">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-white/20 flex items-center justify-center">
            {/* Soft Central Pulse Target */}
            <div className="w-32 h-32 rounded-full border border-blue-400/20 animate-spin-orbit" />
          </div>
        </div>
      </div>

      {/* 4. SATELLITE NODE D: NEON CYAN MICRO-ORB (Mid-Left near Stats) */}
      <div
        className="absolute top-[30rem] left-[4%] md:left-[8%] animate-float-orb-4"
        style={{
          transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * 22}px, 0)`,
          transition: 'transform 0.45s ease-out'
        }}
      >
        <div className="absolute -inset-8 rounded-full bg-cyan-400/25 blur-2xl" />
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[1.5px] bg-gradient-to-br from-white via-cyan-300 to-blue-500 shadow-[0_0_35px_rgba(0,229,255,0.8),inset_0_0_20px_rgba(255,255,255,0.85)]">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-400/30 to-white/45 flex items-center justify-center">
            <div className="absolute top-2 left-3 w-7 h-3.5 rounded-full bg-white blur-[1px] -rotate-45" />
          </div>
        </div>
      </div>

      {/* 5. SATELLITE NODE E: VIOLET MICRO-ORB (Mid-Right near Stats) */}
      <div
        className="absolute top-[27rem] right-[5%] md:right-[9%] animate-float-orb-1"
        style={{
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * -18}px, 0)`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <div className="absolute -inset-6 rounded-full bg-fuchsia-400/30 blur-2xl" />
        <div className="relative w-20 h-20 sm:w-26 sm:h-26 rounded-full p-[1.5px] bg-gradient-to-tl from-purple-400 via-pink-400 to-white shadow-[0_0_30px_rgba(217,70,239,0.75),inset_0_0_18px_rgba(255,255,255,0.85)]">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/25 to-white/45">
            <div className="absolute top-1.5 right-2 w-5 h-2.5 rounded-full bg-white blur-[1px] rotate-45" />
          </div>
        </div>
      </div>

      {/* 6. WELCOMING AMBIENT SPARKS & EMBERS (Warm Community Presence) */}
      <div className="absolute top-24 left-[24%] flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-300/40 shadow-xs animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-mono text-[9px] text-on-surface-variant font-medium">✦ 48 builders hacking now</span>
      </div>

      <div className="absolute top-44 right-[28%] flex items-center gap-1.5 bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-fuchsia-300/40 shadow-xs animate-pulse delay-500">
        <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
        <span className="font-mono text-[9px] text-on-surface-variant font-medium">⚡ Open Pod Dispatches</span>
      </div>

      {/* Floating Micro Particles */}
      <div className="absolute top-[22rem] left-[18%] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#2979FF] animate-pulse delay-700" />
      <div className="absolute top-[34rem] right-[22%] w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#00E5FF] animate-pulse delay-300" />
    </div>
  );
}
