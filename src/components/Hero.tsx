import portrait from "../assets/portrait.jpg"

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[819px] flex-col justify-center border-b border-border-subtle py-vertical-section"
    >
      <div className="grid grid-cols-12 items-center gap-gutter">
        <div className="col-span-12 lg:col-span-8">
          <p className="mb-8 font-metadata-caps text-metadata-caps text-lg tracking-[0.3em] text-primary">
            SENIOR FULL STACK DEVELOPER
          </p>
          <h1 className="mb-8 font-display-xl text-[120px] leading-[0.9] tracking-tighter text-on-background">
            BUILDING SOFTWARE THAT HOLDS UP IN PRODUCTION.
          </h1>
          <div className="mt-12 max-w-2xl">
            <p className="font-body-md text-body-md text-tertiary-container">
              Specializing in NestJS, Go, React, and Flutter with a deep
              understanding of cloud infrastructure and modern architectural
              patterns. 6+ years of shipping products.
            </p>
          </div>
        </div>
        <div className="relative col-span-12 mt-12 aspect-[3/4] overflow-hidden border border-border-subtle bg-surface-container lg:col-span-4 lg:mt-0">
          <img
            alt="Professional portrait of Chairil Rafi Purnama"
            className="h-full w-full object-cover opacity-90 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            src={portrait}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero