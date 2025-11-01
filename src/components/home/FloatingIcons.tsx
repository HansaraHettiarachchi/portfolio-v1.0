import React, { useEffect, useMemo, useRef } from "react"

import { BiLogoTailwindCss, BiLogoSpringBoot, BiLogoPhp } from "react-icons/bi"
import { ImHtmlFive2 } from "react-icons/im"
import { SiSpringboot, SiJquery, SiPython } from "react-icons/si"
import { FaReact, FaJava, FaLaravel } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"

export interface FloatingIconsProps {
  iconColor?: string
  iconSize?: number
  speed?: number
  icons?: Array<React.ComponentType<any>>
  density?: number 
}

export default function FloatingIcons({
  iconColor = "#61dafb",
  iconSize = 28,
  speed = 160,
  icons,
  density = 2,
}: FloatingIconsProps) {
  const defaultIcons = [
    BiLogoTailwindCss,
    ImHtmlFive2,
    BiLogoSpringBoot,
    SiSpringboot,
    FaReact,
    RiJavascriptFill,
    FaJava,
    SiJquery,
    FaLaravel,
    BiLogoPhp,
    SiPython,
  ]

  const ICONS = useMemo(() => {
    const base = icons && icons.length > 0 ? icons : defaultIcons
    // repeat the base array `density` times to increase count
    const list: Array<React.ComponentType<any>> = []
    for (let i = 0; i < density; i++) list.push(...base)
    return list
  }, [icons, density])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const elRefs = useRef<Array<HTMLDivElement | null>>([])
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; rot: number }>>([])

  useMemo(() => {
    particlesRef.current = ICONS.map(() => ({ x: 0, y: 0, vx: 0, vy: 0, rot: 0 }))
  }, [ICONS.length])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const bounds = () => container.getBoundingClientRect()

    // initialize
    const { width, height } = bounds()
    particlesRef.current.forEach((p) => {
      p.x = Math.random() * width
      p.y = Math.random() * height
      const angle = Math.random() * Math.PI * 2
      const s = speed * (0.6 + Math.random() * 0.8)
      p.vx = Math.cos(angle) * s
      p.vy = Math.sin(angle) * s
      p.rot = Math.random() * 360
    })

    let rafId: number | null = null
    let last = performance.now()

    function tick(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const r = bounds()
      const w = r.width
      const h = r.height

      particlesRef.current.forEach((p, i) => {
        p.x += p.vx * dt
        p.y += p.vy * dt

        if (p.x <= 0) {
          p.x = 0
          p.vx *= -1
        } else if (p.x >= w) {
          p.x = w
          p.vx *= -1
        }
        if (p.y <= 0) {
          p.y = 0
          p.vy *= -1
        } else if (p.y >= h) {
          p.y = h
          p.vy *= -1
        }

        p.rot = (p.rot + (p.vx + p.vy) * 0.01) % 360

        const el = elRefs.current[i]
        if (el) {
          el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) rotate(${p.rot}deg)`
        }
      })

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    const ro = new ResizeObserver(() => void 0)
    ro.observe(container)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [ICONS.length, speed])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {ICONS.map((Icon, idx) => (
        <div
          key={`fi-${idx}`}
          ref={(el) => {
            elRefs.current[idx] = el
          }}
          className="floating-icon-wrapper"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon color={iconColor} size={iconSize} className="floating-icon" />
        </div>
      ))}
    </div>
  )
}
