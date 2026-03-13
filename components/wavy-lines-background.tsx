"use client"

export function WavyLinesBackground() {
  // Generate 10 diagonal wavy lines with staggered animation
  const lines = Array.from({ length: 10 }, (_, i) => i)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15 md:opacity-20 lg:opacity-25">
      <style>{`
        @keyframes wavySlide {
          0%, 100% { transform: translateX(-200px); }
          50% { transform: translateX(200px); }
        }
        @media (min-width: 768px) {
          .wavy-line {
            animation: wavySlide 25s ease-in-out infinite;
            will-change: transform;
          }
        }
      `}</style>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        style={{ filter: "drop-shadow(0 0 4px rgba(139, 92, 246, 0.2))" }}
      >
        <defs>
          {/* Purple to Blue gradient: #8b5cf6 → #3b82f6 → #60a5fa */}
          <linearGradient id="purpleBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Generate diagonal wavy lines with 45° sinusoidal curves */}
        {lines.map((lineIndex) => {
          const startX = -100 + lineIndex * 120
          const startY = 0
          const offset = lineIndex * 45
          // Hide some lines on mobile using CSS classes
          const isHiddenOnMobile = lineIndex >= 6
          // Stagger delay: 0.3s per line
          const animDelay = lineIndex * -0.3

          return (
            <g 
              key={lineIndex} 
              className={`wavy-line ${isHiddenOnMobile ? "hidden md:block" : ""}`}
              style={{ animationDelay: `${animDelay}s` }}
            >
              {/* Wavy diagonal line with sinusoidal curve at 45° */}
              <path
                d={`M ${startX},${startY} Q ${startX + 150},${50 + offset} ${startX + 300},${100 + offset} T ${startX + 600},${200 + offset} T ${startX + 900},${300 + offset} T ${startX + 1200},${400 + offset}`}
                stroke="url(#purpleBlueGradient)"
                strokeWidth="1.8"
                className="md:stroke-[1.8] stroke-[1.2]"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

