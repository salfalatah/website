import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  Link,
} from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    title: 'Sarah Al Falatah',
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <SiteLayout>{children}</SiteLayout>
        <Scripts />
      </body>
    </html>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const el = document.documentElement
    const next = !el.classList.contains('dark')
    el.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {}
    setDark(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/20 transition-colors"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            aria-label="Home"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground text-primary font-bold text-lg shrink-0 hover:opacity-90 transition-opacity"
          >
            S
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className="text-sm font-medium hover:opacity-80 transition-opacity [&.active]:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/research"
              className="text-sm font-medium hover:opacity-80 transition-opacity [&.active]:underline underline-offset-4"
            >
              Research
            </Link>
            <Link
              to="/teaching"
              className="text-sm font-medium hover:opacity-80 transition-opacity [&.active]:underline underline-offset-4"
            >
              Teaching
            </Link>
            <a
              href="/AlFalatah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              CV
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sarah Al Falatah. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
