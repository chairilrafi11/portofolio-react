"use client"
import { motion, useReducedMotion } from "motion/react"

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
        <div className="col-span-12">
          <motion.p
            className="mb-8 font-metadata-caps text-metadata-caps text-lg tracking-[0.3em] text-primary"
            variants={fadeUp}
          >
            SENIOR FULL STACK DEVELOPER
          </motion.p>
          <motion.h1
            className="mb-8 font-display-xl text-[120px] leading-[0.9] tracking-tighter text-on-background"
            variants={fadeUp}
          >
            BUILDING SOFTWARE THAT HOLDS UP IN PRODUCTION.
          </motion.h1>
          <motion.div className="mt-12 max-w-2xl" variants={fadeUp}>
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
