function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 w-full border-t border-border-subtle bg-background py-vertical-section"
    >
      <div className="mx-auto mb-12 w-full max-w-[1920px] border-b border-border-subtle px-margin-desktop pb-12">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-6">
            <h2 className="mb-6 font-display-lg text-display-lg">
              Let's build something.
            </h2>
            <p className="mb-8 max-w-md font-body-lg text-on-surface-variant">
              Currently open to new international opportunities, remote roles,
              and interesting technical challenges.
            </p>
            <a
              className="btn-hover inline-flex border border-secondary px-8 py-4 font-metadata-caps text-metadata-caps text-on-background transition-colors duration-200"
              href="#"
            >
              Download Resume PDF
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-start justify-between gap-gutter px-margin-desktop md:flex-row">
        <div className="font-metadata-caps text-metadata-caps text-on-background">
          2026 CHAIRIL RAFI PURNAMA | Senior Full Stack Developer | Remote /
          Global
        </div>
        <div className="flex gap-gutter">
          <a
            className="font-metadata-sm text-metadata-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-metadata-sm text-metadata-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-metadata-sm text-metadata-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
            href="#"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer