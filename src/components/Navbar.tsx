function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border-subtle bg-background">
      <div className="mx-auto flex w-full items-center justify-between px-margin-desktop py-4">
        <a
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-background"
          href="#"
        >
          CHAIRIL RAFI PURNAMA
        </a>
        <div className="hidden items-center gap-gutter md:flex">
          <a
            className="font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors duration-200 hover:text-primary"
            href="#work"
          >
            Work
          </a>
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
        </div>
        <a
          className="btn-hover hidden border border-secondary px-6 py-2 font-metadata-caps text-metadata-caps text-on-background transition-colors duration-200 md:inline-flex"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
