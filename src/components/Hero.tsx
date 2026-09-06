"use client"
import { motion, useReducedMotion } from "motion/react"
import chairilImg from "../assets/chairil.jpg"

function Hero() {
  const reduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: undefined as any,
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const fadeUp = {
    hidden: reduceMotion ? (undefined as any) : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  }

  const tileReveal = {
    hidden: reduceMotion ? (undefined as any) : { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section
      id="hero"
      className="flex min-h-[550px] flex-col justify-center border-b border-border-subtle py-12"
    >
      <motion.div
        className="grid grid-cols-12 items-center gap-gutter"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="order-2 col-span-12 mx-auto mt-10 w-full max-w-[320px] lg:order-2 lg:col-span-4 lg:mt-0 lg:max-w-none"
          variants={tileReveal}
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-container">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Photo */}
            <motion.div
              className="relative h-full w-full"
              animate={reduceMotion ? undefined : { scale: [1, 1.03] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            >
              <img
                src={chairilImg}
                alt="Portrait of Chairil Rafi Purnama"
                className="h-full w-full object-cover object-center grayscale transition-all duration-500 hover:grayscale-0"
                loading="eager"
              />
            </motion.div>

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background-base to-transparent" />
            <div className="absolute bottom-3 right-4 font-metadata-sm text-metadata-sm text-on-surface-variant/60">
              CR · ID
            </div>
          </div>
        </motion.div>

        <div className="order-1 col-span-12 lg:order-1 lg:col-span-8">
          <motion.p
            className="mb-6 font-metadata-caps text-metadata-caps text-sm tracking-[0.3em] text-primary md:text-lg"
            variants={fadeUp}
          >
            SENIOR FULL STACK DEVELOPER
          </motion.p>
          <motion.h1
            className="mb-6 font-display-xl text-[clamp(40px,11vw,120px)] leading-[0.92] tracking-tighter text-on-background"
            variants={fadeUp}
          >
            BUILDING SOFTWARE THAT HOLDS UP IN PRODUCTION.
          </motion.h1>
          <motion.div className="mt-8 max-w-2xl md:mt-12" variants={fadeUp}>
            <p className="font-body-md text-body-md text-tertiary-container">
              Delivering comprehensive end-to-end solutions leveraging modern
              frontend (Flutter, React, Next.js) and robust backend stacks
              (Golang, Laravel, Python) with PostgreSQL. 6+ years shipping
              products across HR, POS, CRM, GIS, Fintech, and Logistics.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
