import React, { useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"

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
  speed = 40,
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
    const list: Array<React.ComponentType<any>> = []
    for (let i = 0; i < density; i++) list.push(...base)
    return list
  }, [icons, density])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const elRefs = useRef<Array<HTMLDivElement | null>>([])
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; rot: number }>>([])
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    particlesRef.current = ICONS.map(() => ({ x: 0, y: 0, vx: 0, vy: 0, rot: 0 }))
  }, [ICONS.length])

  useEffect(() => {
    const hostParent = containerRef.current?.parentElement
    if (!hostParent) return

    const el = document.createElement("div")
    el.className = "floating-icons-portal"
    el.style.position = "absolute"
    el.style.top = "0"
    el.style.left = "0"
    el.style.width = "100%"

    el.style.height = `${hostParent.clientHeight}px`
    el.style.pointerEvents = "none"
    el.style.overflow = "hidden"

    const prevPosition = hostParent.style.position
    if (getComputedStyle(hostParent).position === "static") {
      hostParent.style.position = "relative"
    }

    hostParent.appendChild(el)
    setPortalEl(el)

    const update = () => {
      el.style.height = `${hostParent.clientHeight}px`
    }

    window.addEventListener("resize", update)
    const mo = new MutationObserver(update)
    mo.observe(hostParent, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("resize", update)
      mo.disconnect()
      if (el.parentNode) el.parentNode.removeChild(el)

        hostParent.style.position = prevPosition
      setPortalEl(null)
    }
  }, [containerRef.current])

  useEffect(() => {
    if (!portalEl) return

    const boundsEl = portalEl.parentElement ?? portalEl
    const bounds = () => boundsEl.getBoundingClientRect()

    const { width, height } = bounds()
    particlesRef.current.forEach((p) => {
      p.x = Math.random() * width
      p.y = Math.random() * height
      const angle = Math.random() * Math.PI * 2
      const s = speed * (0.5 + Math.random() * 0.8)
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

        const margin = Math.max(iconSize, 40)
        if (p.x < -margin) p.x = w + margin
        else if (p.x > w + margin) p.x = -margin
        if (p.y < -margin) p.y = h + margin
        else if (p.y > h + margin) p.y = -margin

        p.rot = (p.rot + (p.vx + p.vy) * 0.01) % 360

        const el = elRefs.current[i]
        if (el) {
          el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) rotate(${p.rot}deg)`
          el.style.opacity = String(0.85)
        }
      })

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    const ro = new ResizeObserver(() => {

      portalEl.style.height = `${boundsEl.clientHeight}px`
    })
    ro.observe(boundsEl)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [ICONS.length, speed, portalEl])

  const overlay = (
    <div className="pointer-events-none overflow-hidden" style={{ position: "relative", width: "100%", height: "100%" }}>
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

  return (
    <>
      <div
        ref={(el) => {
          containerRef.current = el
        }}
        style={{ display: "none" }}
      />
      {portalEl ? createPortal(overlay, portalEl) : null}
    </>
  )
}
