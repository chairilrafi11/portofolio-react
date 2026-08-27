function Biography() {
  return (
    <section
      id="biography"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            01 // BIOGRAPHY
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <h2 className="mb-12 font-display-xl text-display-lg leading-tight tracking-tighter">
            I architect and build scalable systems, bridging the gap between
            complex database requirements and polished user interfaces.
          </h2>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            <p className="font-body-lg text-on-surface-variant">
              Focused on performance, reliability, and delivering tangible
              business value. My approach combines technical rigor with a deep
              understanding of product goals.
            </p>
            <p className="font-body-lg text-on-surface-variant">
              With over half a decade of experience, I've navigated the
              evolution of web technologies, consistently choosing tools that
              ensure long-term stability and developer velocity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography