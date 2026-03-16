import { useEffect, useRef, useCallback } from 'react'

/**
 * Fade-in on scroll. Adds 'in-view' class when element enters viewport.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.12, rootMargin: options.rootMargin ?? '0px 0px -80px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

/**
 * Batch: observe all [data-animate] children inside a container.
 */
export function useRevealChildren() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const targets = container.querySelectorAll('[data-animate]')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return containerRef
}

/**
 * SIEMATIC PARALLAX — exact replica.
 *
 * - Container has overflow:hidden
 * - Image inside is ~30% taller than container
 * - Image starts at translateY(0) (bottom portion hidden)
 * - As container scrolls into view: image translates to translateY(-maxPx)
 * - 100 threshold steps for butter-smooth movement
 * - maxPx: 130 mobile / 200 tablet / 240 desktop
 *
 * Targets: elements with class "plx" inside the ref'd container.
 */
export function useParallaxImages() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll('.plx')
    if (!targets.length) return

    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          let maxT
          const w = window.innerWidth
          if (w < 768) maxT = 130
          else if (w < 1024) maxT = 200
          else maxT = 240

          if (entry.boundingClientRect.top >= 0) {
            const action = maxT * entry.intersectionRatio
            if (action >= maxT * 0.9) {
              entry.target.style.transform = `translateY(-${maxT}px)`
            } else {
              entry.target.style.transform = `translateY(-${action}px)`
            }
          } else {
            entry.target.style.transform = `translateY(-${maxT}px)`
          }
        })
      },
      { threshold: thresholds }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Adds 'observed' class to the element when it enters viewport.
 * Used for triggering child entrance animations (slide-in, stagger).
 */
export function useObserveSection(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('observed')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold])

  return ref
}

/**
 * Hero scroll zoom — image scales up and drifts as you scroll.
 */
export function useHeroScroll() {
  const ref = useRef(null)
  const ticking = useRef(false)

  const onScroll = useCallback(() => {
    if (ticking.current) return
    ticking.current = true

    requestAnimationFrame(() => {
      const el = ref.current
      if (!el) { ticking.current = false; return }

      const scrollY = window.scrollY
      const vh = window.innerHeight

      if (scrollY < vh * 1.2) {
        const p = scrollY / vh
        const scale = 1 + p * 0.25
        const ty = scrollY * 0.4
        el.style.transform = `translateY(${ty}px) scale(${scale})`
      }
      ticking.current = false
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return ref
}
