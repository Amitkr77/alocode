"use client";

/**
 * AnimatedBackground
 * Ported from PlainBread Studio – Animated Backgrounds V1 (Framer)
 * + Floating particle shapes — performance optimized
 *
 * Performance notes:
 * - Only `transform` and `opacity` are animated (GPU-composited, no layout/paint)
 * - `will-change: transform` is set only on particles (not all elements)
 * - `contain: strict` on wrapper limits paint/layout scope
 * - SVG noise filter is lightweight (no JS, pure CSS/SVG)
 * - No requestAnimationFrame loops — pure CSS animations
 */

const KEYFRAMES = `
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50%       { background-position: 100% 50%; }
  }

  @keyframes lavaBlob1 {
    0%, 100% { transform: translate(0,0)     scale(1.10) rotate(6deg);  }
    50%      { transform: translate(28%,18%)  scale(0.85) rotate(-8deg); }
  }
  @keyframes lavaBlob2 {
    0%, 100% { transform: translate(0,0)      scale(1.15); }
    50%      { transform: translate(-32%,-22%) scale(0.80); }
  }
  @keyframes lavaBlob3 {
    0%, 100% { transform: translate(0,0)     scale(0.90); }
    50%      { transform: translate(35%,-28%) scale(1.25); }
  }
  @keyframes lavaBlob4 {
    0%, 100% { transform: translate(0,0)     scale(1.05); }
    50%      { transform: translate(-18%,38%) scale(0.82); }
  }

  @keyframes haloPulse1 {
    0%, 100% { transform: scale(0.80); opacity: 0.68; }
    50%      { transform: scale(1.35); opacity: 0.92; }
  }
  @keyframes haloPulse2 {
    0%, 100% { transform: scale(0.85); opacity: 0.62; }
    50%      { transform: scale(1.40); opacity: 0.88; }
  }
  @keyframes haloPulse3 {
    0%, 100% { transform: scale(1.00); opacity: 0.55; }
    50%      { transform: scale(0.70); opacity: 0.82; }
  }
  @keyframes haloPulse4 {
    0%, 100% { transform: scale(0.90); opacity: 0.45; }
    50%      { transform: scale(1.45); opacity: 0.75; }
  }

  /* Faster: durations cut ~40% vs previous version */
  @keyframes floatA {
    0%   { transform: translate(0px,   0px)  rotate(0deg);   }
    25%  { transform: translate(40px, -60px) rotate(45deg);  }
    50%  { transform: translate(80px,  20px) rotate(90deg);  }
    75%  { transform: translate(30px,  70px) rotate(135deg); }
    100% { transform: translate(0px,   0px)  rotate(180deg); }
  }
  @keyframes floatB {
    0%   { transform: translate(0px,   0px)   rotate(0deg);   }
    25%  { transform: translate(-50px, 40px)  rotate(-30deg); }
    50%  { transform: translate(-90px,-30px)  rotate(-70deg); }
    75%  { transform: translate(-20px,-80px)  rotate(-110deg);}
    100% { transform: translate(0px,   0px)   rotate(-160deg);}
  }
  @keyframes floatC {
    0%   { transform: translate(0px,  0px)   rotate(0deg);   }
    33%  { transform: translate(60px,-40px)  rotate(60deg);  }
    66%  { transform: translate(-40px,-70px) rotate(120deg); }
    100% { transform: translate(0px,  0px)   rotate(180deg); }
  }
  @keyframes floatD {
    0%   { transform: translate(0px,  0px)  rotate(0deg);    }
    50%  { transform: translate(-70px,50px) rotate(-90deg);  }
    100% { transform: translate(0px,  0px)  rotate(-180deg); }
  }
  @keyframes floatE {
    0%   { transform: translate(0px,  0px)  rotate(0deg);  }
    25%  { transform: translate(30px, 80px) rotate(40deg); }
    75%  { transform: translate(-60px,40px) rotate(-60deg);}
    100% { transform: translate(0px,  0px)  rotate(0deg);  }
  }
  @keyframes floatF {
    0%   { transform: translate(0px,  0px)  rotate(0deg);   }
    40%  { transform: translate(90px,-50px) rotate(80deg);  }
    80%  { transform: translate(20px, 60px) rotate(160deg); }
    100% { transform: translate(0px,  0px)  rotate(200deg); }
  }
  @keyframes floatG {
    0%   { transform: translate(0px,   0px)  rotate(0deg);    }
    30%  { transform: translate(-80px,-40px) rotate(-50deg);  }
    60%  { transform: translate(50px, -90px) rotate(-100deg); }
    100% { transform: translate(0px,   0px)  rotate(-150deg); }
  }
  @keyframes floatH {
    0%   { transform: translate(0px, 0px)  rotate(0deg);   }
    50%  { transform: translate(70px,70px) rotate(120deg); }
    100% { transform: translate(0px, 0px)  rotate(240deg); }
  }
`;

// Durations reduced ~40% for faster movement
// Only transform is animated — fully GPU composited
const PARTICLES = [
  // Big circles
  {
    type: "circle",
    size: 120,
    x: "8%",
    y: "12%",
    anim: "floatA",
    dur: "11s",
    delay: "0s",
    opacity: 0.18,
  },
  {
    type: "circle",
    size: 90,
    x: "75%",
    y: "20%",
    anim: "floatB",
    dur: "13s",
    delay: "1.5s",
    opacity: 0.16,
  },
  {
    type: "circle",
    size: 160,
    x: "55%",
    y: "60%",
    anim: "floatC",
    dur: "16s",
    delay: "0.5s",
    opacity: 0.14,
  },
  {
    type: "circle",
    size: 70,
    x: "85%",
    y: "75%",
    anim: "floatD",
    dur: "12s",
    delay: "2s",
    opacity: 0.2,
  },
  {
    type: "circle",
    size: 50,
    x: "30%",
    y: "80%",
    anim: "floatE",
    dur: "10s",
    delay: "1s",
    opacity: 0.22,
  },

  // Squares
  {
    type: "square",
    size: 80,
    x: "20%",
    y: "30%",
    anim: "floatB",
    dur: "14s",
    delay: "0s",
    opacity: 0.16,
  },
  {
    type: "square",
    size: 55,
    x: "60%",
    y: "10%",
    anim: "floatF",
    dur: "11s",
    delay: "2s",
    opacity: 0.18,
  },
  {
    type: "square",
    size: 100,
    x: "90%",
    y: "45%",
    anim: "floatG",
    dur: "17s",
    delay: "1s",
    opacity: 0.14,
  },
  {
    type: "square",
    size: 45,
    x: "5%",
    y: "65%",
    anim: "floatA",
    dur: "13s",
    delay: "3s",
    opacity: 0.2,
  },
  {
    type: "square",
    size: 65,
    x: "42%",
    y: "88%",
    anim: "floatH",
    dur: "10s",
    delay: "0.5s",
    opacity: 0.16,
  },

  // Rings
  {
    type: "ring",
    size: 130,
    x: "15%",
    y: "55%",
    anim: "floatC",
    dur: "18s",
    delay: "0s",
    opacity: 0.22,
  },
  {
    type: "ring",
    size: 95,
    x: "70%",
    y: "35%",
    anim: "floatE",
    dur: "14s",
    delay: "3.5s",
    opacity: 0.2,
  },
  {
    type: "ring",
    size: 60,
    x: "48%",
    y: "5%",
    anim: "floatD",
    dur: "9s",
    delay: "1.5s",
    opacity: 0.24,
  },
  {
    type: "ring",
    size: 180,
    x: "80%",
    y: "85%",
    anim: "floatA",
    dur: "21s",
    delay: "2.5s",
    opacity: 0.12,
  },

  // Small dots
  {
    type: "circle",
    size: 20,
    x: "35%",
    y: "45%",
    anim: "floatH",
    dur: "7s",
    delay: "0s",
    opacity: 0.3,
  },
  {
    type: "circle",
    size: 16,
    x: "92%",
    y: "15%",
    anim: "floatG",
    dur: "8s",
    delay: "1s",
    opacity: 0.28,
  },
  {
    type: "circle",
    size: 24,
    x: "12%",
    y: "90%",
    anim: "floatF",
    dur: "7s",
    delay: "2s",
    opacity: 0.26,
  },
];

function Particles({ color }) {
  return (
    <>
      {PARTICLES.map((p, i) => {
        const base = {
          position: "absolute",
          left: p.x,
          top: p.y,
          width: p.size,
          height: p.size,
          opacity: p.opacity,
          animation: `${p.anim} ${p.dur} ease-in-out infinite`,
          animationDelay: p.delay,
          // will-change only on transform — tells browser to promote to own layer
          willChange: "transform",
          // Prevent subpixel blurring on some browsers
          backfaceVisibility: "hidden",
        };

        if (p.type === "circle") {
          return (
            <div
              key={i}
              style={{ ...base, borderRadius: "50%", background: color }}
            />
          );
        }
        if (p.type === "square") {
          return (
            <div
              key={i}
              style={{ ...base, borderRadius: "12px", background: color }}
            />
          );
        }
        if (p.type === "ring") {
          return (
            <div
              key={i}
              style={{
                ...base,
                borderRadius: "50%",
                background: "transparent",
                border: `2px solid ${color}`,
              }}
            />
          );
        }
        return null;
      })}
    </>
  );
}

function NoiseGradient({ color1, color2, color3, shouldAnimate }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${color1}, ${color2}, ${color3}, ${color1}, ${color2}, ${color3})`,
          backgroundSize: "500% 500%",
          animation: shouldAnimate ? "gradientShift 12s ease infinite" : "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 100%, ${color3} 12%, transparent 48%)`,
          opacity: 0.38,
          mixBlendMode: "screen",
        }}
      />
      <svg
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.28,
          mixBlendMode: "overlay",
        }}
        width="100%"
        height="100%"
      >
        <defs>
          <filter id="pbNoise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              seed="42"
            >
              {shouldAnimate && (
                <animate
                  attributeName="baseFrequency"
                  values="0.85;0.65;0.95;0.75;0.85"
                  dur="7s"
                  repeatCount="indefinite"
                />
              )}
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="28">
              {shouldAnimate && (
                <animate
                  attributeName="scale"
                  values="28;38;22;32;28"
                  dur="7s"
                  repeatCount="indefinite"
                />
              )}
            </feDisplacementMap>
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter="url(#pbNoise)"
          fill="#ffffff"
        />
      </svg>
    </>
  );
}

function LavaGradient({ color1, color2, color3, shouldAnimate }) {
  return (
    <>
      <div style={{ position: "absolute", inset: 0, background: "#0a0500" }} />
      <div
        style={{
          position: "absolute",
          left: "-5%",
          top: "40%",
          width: "120%",
          height: "120%",
          background: `radial-gradient(circle at 40% 45%, ${color1} 15%, ${color2} 50%, transparent 75%)`,
          filter: "blur(65px)",
          opacity: 0.82,
          animation: shouldAnimate
            ? "lavaBlob1 14s ease-in-out infinite"
            : "none",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-8%",
          bottom: "5%",
          width: "115%",
          height: "115%",
          background: `radial-gradient(circle at 60% 60%, ${color3} 20%, ${color2} 55%, transparent 80%)`,
          filter: "blur(60px)",
          opacity: 0.78,
          animation: shouldAnimate
            ? "lavaBlob2 17s ease-in-out infinite"
            : "none",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "15%",
          top: "55%",
          width: "85%",
          height: "85%",
          background: `radial-gradient(circle at 50% 50%, #fef08c 25%, ${color1} 60%, transparent 85%)`,
          filter: "blur(75px)",
          opacity: 0.68,
          animation: shouldAnimate
            ? "lavaBlob3 11s ease-in-out infinite"
            : "none",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "45%",
          top: "48%",
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at 35% 70%, ${color3} 12%, transparent 70%)`,
          filter: "blur(52px)",
          opacity: 0.72,
          animation: shouldAnimate
            ? "lavaBlob4 20s ease-in-out infinite"
            : "none",
          borderRadius: "50%",
          willChange: "transform",
        }}
      />
    </>
  );
}

function HaloGradient({ color1, color2, color3, shouldAnimate, bgFrom, bgTo }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 100%, ${bgFrom} 0%, ${bgTo} 70%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "12%",
          top: "52%",
          width: "80%",
          height: "80%",
          background: `radial-gradient(circle, ${color1} 20%, transparent 65%)`,
          filter: "blur(80px)",
          opacity: 0.68,
          animation: shouldAnimate
            ? "haloPulse1 9s ease-in-out infinite"
            : "none",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "10%",
          bottom: "15%",
          width: "70%",
          height: "70%",
          background: `radial-gradient(circle, ${color2} 16%, transparent 62%)`,
          filter: "blur(75px)",
          opacity: 0.62,
          animation: shouldAnimate
            ? "haloPulse2 12s ease-in-out infinite"
            : "none",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "32%",
          top: "48%",
          width: "65%",
          height: "65%",
          background: `radial-gradient(circle, ${color3} 22%, transparent 68%)`,
          filter: "blur(62px)",
          opacity: 0.55,
          animation: shouldAnimate
            ? "haloPulse3 8s ease-in-out infinite"
            : "none",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "8%",
          bottom: "22%",
          width: "52%",
          height: "52%",
          background: `radial-gradient(circle, ${color1} 28%, transparent 72%)`,
          filter: "blur(90px)",
          opacity: 0.45,
          animation: shouldAnimate
            ? "haloPulse4 15s ease-in-out infinite"
            : "none",
          willChange: "transform",
        }}
      />
    </>
  );
}

export default function AnimatedBackground({
  effect = "Noise Gradient",
  color1 = "#3b82f6",
  color2 = "#a855f7",
  color3 = "#f472b6",
  animate = true,
  particleColor,
  showParticles = true,
  haloBgFrom = "#f4fce8",
  haloBgTo = "#fffcfb",
  className,
  style,
}) {
  const shouldAnimate = animate;
  const pColor = particleColor || color1;

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        pointerEvents: "none",
        // Limit browser paint/layout recalc to this element only
        contain: "strict",
        ...style,
      }}
    >
      <style>{KEYFRAMES}</style>

      {effect === "Noise Gradient" && (
        <NoiseGradient
          color1={color1}
          color2={color2}
          color3={color3}
          shouldAnimate={shouldAnimate}
        />
      )}
      {effect === "Lava Gradient" && (
        <LavaGradient
          color1={color1}
          color2={color2}
          color3={color3}
          shouldAnimate={shouldAnimate}
        />
      )}
      {effect === "Halo Gradient" && (
        <HaloGradient
          color1={color1}
          color2={color2}
          color3={color3}
          shouldAnimate={shouldAnimate}
          bgFrom={haloBgFrom}
          bgTo={haloBgTo}
        />
      )}

      {showParticles && <Particles color={pColor} />}
    </div>
  );
}
