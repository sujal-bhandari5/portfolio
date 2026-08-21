import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return <button className="icon-button" onClick={() => setDark(v => !v)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} title="Toggle theme">{dark ? '☀' : '☾'}</button>
}
