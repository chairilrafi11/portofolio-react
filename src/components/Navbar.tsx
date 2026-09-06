"use client"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"

function Navbar() {
  const reduceMotion = useReducedMotion()
  const { pathname } = useLocation()
  const isHome = pathname === "/"
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => setMenuOpen(false)

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b border-border-subtle bg-background"
      initial={reduceMotion ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex w-full items-center justify-between gap-4 px-margin-desktop py-4">
        <Link
          className="font-headline-md text-[clamp(16px,4.5vw,40px)] whitespace-nowrap font-bold tracking-tighter text-on-background"
          to="/"
          onClick={handleNav}
        >
          CHAIRIL RAFI PURNAMA
        </Link>

        <div className="hidden items-center gap-gutter md:flex">
          <Link
            className="font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors duration-200 hover:text-primary"
            to="/projects"
          >
            Projects
          </Link>
          {isHome && (
            <>
              <a
                className="font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors duration-200 hover:text-primary"
                href="#profile"
              >
                Profile
              </a>
              <a
                className="font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors duration-200 hover:text-primary"
                href="#experience"
              >
                Experience
              </a>
            </>
          )}
        </div>

        <a
          className="btn-hover hidden border border-secondary px-6 py-2 font-metadata-caps text-metadata-caps text-on-background transition-colors duration-200 md:inline-flex"
          href={isHome ? "#contact" : "/#contact"}
        >
          Contact
        </a>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center border border-border-subtle text-on-surface-variant transition-colors hover:text-primary md:hidden"
        >
          <span className="material-symbols-outlined text-xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <motion.div
          className="border-t border-border-subtle bg-background md:hidden"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col px-margin-desktop py-4">
            <Link
              to="/projects"
              onClick={handleNav}
              className="border-b border-border-subtle py-4 font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors hover:text-primary"
            >
              Projects
            </Link>
            {isHome && (
              <>
                <a
                  href="#profile"
                  onClick={handleNav}
                  className="border-b border-border-subtle py-4 font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors hover:text-primary"
                >
                  Profile
                </a>
                <a
                  href="#experience"
                  onClick={handleNav}
                  className="border-b border-border-subtle py-4 font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors hover:text-primary"
                >
                  Experience
                </a>
              </>
            )}
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={handleNav}
              className="py-4 font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors hover:text-primary"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
