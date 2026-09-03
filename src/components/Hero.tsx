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
          className="col-span-12 mt-12 lg:col-span-4 lg:mt-0"
          variants={tileReveal}
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-border-subtle bg-surface-container">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(229,226,225,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(229,226,225,0.05) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* Status row */}
            <div className="absolute inset-x-5 top-4 z-10 flex items-center justify-between">
              <span className="font-metadata-sm text-metadata-sm tracking-[0.14em] text-on-surface-variant">
                AVAILABLE · 2026
              </span>
              <span className="relative flex h-2 w-2">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-primary"
                  animate={
                    reduceMotion
                      ? undefined
                      : { scale: [1, 2.4], opacity: [0.7, 0] }
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
            </div>

            {/* Breathing glow behind figure */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-[38%] h-[52%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(182,196,255,0.16),transparent_72%)]"
              animate={reduceMotion ? undefined : { scale: [1, 1.08], opacity: [0.7, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />

            {/* Floating figure */}
            <motion.div
              className="relative flex h-full w-full items-center justify-center"
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                viewBox="0 0 240 300"
                fill="none"
                className="h-[76%] w-auto"
                style={{ overflow: "visible" }}
              >
                {/* Shoulders + collar */}
                <g stroke="#E5E2E1" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.85">
                  <path d="M 104 206 V 242 L 46 300" />
                  <path d="M 136 206 V 242 L 194 300" />
                  <path d="M 104 240 L 120 268 L 136 240" strokeOpacity="0.55" />
                </g>

                {/* Head */}
                <path
                  d="M 120 204
                     C 96 202 82 178 84 154
                     C 86 128 68 114 72 88
                     C 76 62 96 46 120 46
                     C 144 46 164 62 168 88
                     C 172 114 154 128 156 154
                     C 158 178 144 202 120 204 Z"
                  stroke="#E5E2E1"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Ears */}
                <g stroke="#E5E2E1" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8">
                  <path d="M 78 116 C 72 121 72 129 79 133" />
                  <path d="M 162 116 C 168 121 168 129 161 133" />
                </g>

                {/* Hair cap */}
                <path
                  d="M 76 92 C 70 58 90 40 120 40 C 152 40 172 58 168 92 Q 118 98 76 92 Z"
                  fill="#E5E2E1"
                  fillOpacity="0.13"
                />
                {/* Hair texture */}
                <g stroke="#E5E2E1" strokeLinecap="round">
                  <path d="M 90 62 C 106 52 134 52 152 64" strokeWidth="1.4" strokeOpacity="0.5" />
                  <path d="M 96 50 C 112 46 130 46 146 52" strokeWidth="1.2" strokeOpacity="0.35" />
                  {/* Fringe wisps */}
                  <path d="M 104 98 L 106 108" strokeWidth="1.6" strokeOpacity="0.75" />
                  <path d="M 132 99 L 130 108" strokeWidth="1.6" strokeOpacity="0.75" />
                  <path d="M 118 100 L 119 112" strokeWidth="1.6" strokeOpacity="0.55" />
                </g>

                {/* Face */}
                {/* Brows */}
                <g stroke="#E5E2E1" strokeLinecap="round">
                  <path d="M 80 100 Q 92 94 104 100" strokeWidth="1.8" strokeOpacity="0.9" />
                  <path d="M 136 100 Q 148 94 160 100" strokeWidth="1.8" strokeOpacity="0.9" />
                </g>
                {/* Nose */}
                <g stroke="#E5E2E1" strokeLinecap="round" strokeOpacity="0.7">
                  <path d="M 120 112 V 128" strokeWidth="1.5" />
                  <path d="M 120 128 q 5 0 8 4" strokeWidth="1.3" />
                </g>
                {/* Smirk */}
                <path
                  d="M 104 158 Q 114 164 122 160 Q 130 154 138 148"
                  stroke="#E5E2E1"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeOpacity="0.9"
                />

                {/* Eyes (blink) */}
                <motion.g
                  style={{ transformBox: "fill-box", transformOrigin: "50% 45%" }}
                  animate={reduceMotion ? undefined : { scaleY: [1, 1, 1, 0.12, 1, 1, 1] }}
                  transition={{
                    duration: 5.4,
                    times: [0, 0.4, 0.46, 0.5, 0.54, 0.6, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Upper lids */}
                  <g stroke="#E5E2E1" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.95">
                    <path d="M 80 113 Q 92 104 104 113" />
                    <path d="M 136 113 Q 148 104 160 113" />
                  </g>
                  {/* Lower lid hints */}
                  <g stroke="#E5E2E1" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5">
                    <path d="M 82 115 Q 92 121 102 115" />
                    <path d="M 138 115 Q 148 121 158 115" />
                  </g>
                  {/* Iris */}
                  <circle cx="92" cy="114" r="3.4" fill="#E5E2E1" />
                  <circle cx="148" cy="114" r="3.4" fill="#E5E2E1" />
                  {/* Glints */}
                  <circle cx="93.4" cy="112.6" r="1" fill="#0A0A0A" />
                  <circle cx="149.4" cy="112.6" r="1" fill="#0A0A0A" />
                </motion.g>
              </svg>
            </motion.div>

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-container to-transparent" />
            <div className="absolute bottom-3 right-4 font-metadata-sm text-metadata-sm text-on-surface-variant/60">
              CR · ID
            </div>
          </div>
        </motion.div>

        <div className="col-span-12 lg:col-span-8">
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
