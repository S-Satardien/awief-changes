import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  // Scroll to top on route change (no hash)
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  // Scroll to hash target after page renders
  useEffect(() => {
    if (hash) {
      // Small delay to allow the page to render first
      const timer = setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const offset = 120 // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [pathname, hash])

  return null
}
