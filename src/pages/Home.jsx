import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import LandingHome from '../components/landing/LandingHome'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash?.replace('#', '')
    if (!hash) return
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])

  return <LandingHome />
}
