'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cursorRef.current?.style.setProperty('--x', `${e.clientX}px`)
      cursorRef.current?.style.setProperty('--y', `${e.clientY}px`)
    }

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const fraction = max > 0 ? window.scrollY / max : 0
      scrollRef.current?.style.setProperty('--scroll-y', `${fraction * 100}%`)
      scrollRef.current?.style.setProperty('--scroll-opacity', `${0.12 + fraction * 0.18}`)
    }

    handleScroll()
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <>
      <div
        ref={scrollRef}
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_var(--scroll-y,0%),rgba(100,116,139,0.35),transparent_70%)] opacity-[var(--scroll-opacity,0.12)] transition-[background,opacity] duration-300 ease-out dark:bg-[radial-gradient(50%_40%_at_50%_var(--scroll-y,0%),rgba(148,163,184,0.35),transparent_70%)]"
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(100,116,139,0.16),transparent_60%)] transition-[background] duration-150 dark:bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(148,163,184,0.20),transparent_60%)]"
      />
    </>
  )
}
