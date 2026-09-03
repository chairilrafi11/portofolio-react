"use client"
import { Link, useLocation } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"

function Navbar() {
  const reduceMotion = useReducedMotion()
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b border-border-subtle bg-background"
      initial={reduceMotion ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex w-full items-center justify-between px-margin-desktop py-4">
        <Link
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-background"
          to="/"
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
      </div>
    </motion.nav>
  )
}

export default Navbar
