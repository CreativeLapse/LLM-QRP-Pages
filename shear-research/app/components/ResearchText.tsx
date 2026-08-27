"use client"

import { useEffect, useRef } from "react"
import { animate, stagger } from "animejs"

export function ResearchText() {
  const svgRef = useRef<SVGSVGElement>(null)
  const chevronRef = useRef<SVGGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const letters = svgRef.current.querySelectorAll(".letter")
    const chevron = chevronRef.current

    animate(letters, {
      opacity: [0, 1],
      translateY: [20, 0],
      easing: "easeOutQuad",
      duration: 350,
      delay: stagger(70, { start: 100 }),
    })

    if (chevron) {
      animate(chevron, {
        translateX: [-30, 0],
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 300,
        delay: 800,
      })
    }
  }, [])

  const handleMouseEnter = () => {
    if (chevronRef.current) {
      animate(chevronRef.current, {
        translateX: [0, 12],
        easing: "easeOutQuad",
        duration: 150,
      })
    }
  }

  const handleMouseLeave = () => {
    if (chevronRef.current) {
      animate(chevronRef.current, {
        translateX: [12, 0],
        easing: "easeOutQuad",
        duration: 150,
      })
    }
  }

  const letters = "RESEARCH".split("")
  const fontSize = 80
  const letterSpacing = 6
  const charWidth = fontSize * 0.55 + letterSpacing
  const totalWidth = letters.length * charWidth + 50

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex items-end justify-end h-full select-none cursor-pointer"
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${totalWidth} 90`}
        className="h-[90px]"
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
        style={{ overflow: "visible" }}
      >
        {letters.map((char, i) => (
          <text
            key={i}
            className="letter opacity-0"
            x={i * charWidth}
            y={72}
            fontSize={fontSize}
            fontFamily="var(--font-bebas-neue), 'Arial Narrow', Impact, sans-serif"
            fontWeight="400"
            stroke="white"
            strokeWidth="1.2"
            fill="none"
          >
            {char}
          </text>
        ))}
        <g ref={chevronRef} className="opacity-0">
          <text
            x={letters.length * charWidth}
            y={72}
            fontSize={fontSize}
            fontFamily="Arial, Helvetica, sans-serif"
            fontWeight="300"
            stroke="white"
            strokeWidth="1"
            fill="none"
          >
            &rsaquo;
          </text>
        </g>
      </svg>
    </div>
  )
}
