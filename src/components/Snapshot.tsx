function Snapshot() {
  return (
    <section
      id="snapshot"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 flex flex-col justify-center border-b border-border-subtle pb-8 md:col-span-5 md:border-b-0 md:border-r md:pr-8 md:pb-0">
          <span className="mb-4 block font-metadata-sm text-metadata-sm text-tertiary-container">
            EXPERIENCE
          </span>
          <span className="mb-4 block font-display-lg text-display-lg leading-none">
            6+ Years
          </span>
          <p className="max-w-sm font-body-md text-on-surface-variant">
            Delivering robust, end-to-end software solutions for enterprise and
            high-growth startups globally.
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-1 content-center gap-x-gutter gap-y-12 pl-0 sm:grid-cols-2 md:col-span-7 md:pl-8">
          <div className="border-b border-border-subtle pb-6 sm:border-b-0 sm:pb-0">
            <span className="mb-2 block font-metadata-sm text-metadata-sm text-tertiary-container">
              DOMAIN
            </span>
            <span className="font-headline-md text-headline-md">Full Stack</span>
          </div>
          <div className="border-b border-border-subtle pb-6 sm:border-b-0 sm:pb-0">
            <span className="mb-2 block font-metadata-sm text-metadata-sm text-tertiary-container">
              FOCUS
            </span>
            <span className="font-headline-md text-headline-md">
              Product Dev
            </span>
          </div>
          <div>
            <span className="mb-2 block font-metadata-sm text-metadata-sm text-tertiary-container">
              LOCATION
            </span>
            <span className="font-headline-md text-headline-md">Bali, ID</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Snapshot