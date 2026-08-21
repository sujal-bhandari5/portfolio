import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'
import { ThemeToggle } from './ThemeToggle'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    onScroll()
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id === 'home' ? 'Home' : entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)) })
    }, { rootMargin: '-30% 0px -60% 0px' })
    links.forEach(link => document.getElementById(link.toLowerCase()) && observer.observe(document.getElementById(link.toLowerCase())!))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  const go = (id: string) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }

  return <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}><div className="container nav-inner">
    <button className="brand" onClick={() => go('Home')} aria-label="Go to home"><span>{portfolio.initials}</span></button>
    <nav className={`desktop-nav ${open ? 'mobile-open' : ''}`} aria-label="Main navigation">{links.map(link => <button key={link} className={active === link ? 'active' : ''} onClick={() => go(link)}>{link}</button>)}</nav>
    <div className="nav-actions"><ThemeToggle /><button className="menu-button" onClick={() => setOpen(v => !v)} aria-label="Toggle menu" aria-expanded={open}>{open ? '×' : '☰'}</button></div>
  </div></header>
}
