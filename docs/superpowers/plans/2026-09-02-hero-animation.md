# Hero Animation & Layout Swap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Swap hero layout (image left, text right) and add subtle Framer Motion animations across the portfolio.

**Architecture:** Install Framer Motion, create reusable animation components, swap Hero layout, and add scroll-reveal animations to key sections.

**Tech Stack:** React 19, Framer Motion (`motion/react`), Tailwind CSS v4

---

## File Structure

| File | Purpose |
|------|---------|
| `package.json` | Add `motion` dependency |
| `src/components/Hero.tsx` | Swap layout, add entrance animations |
| `src/components/AnimatedSection.tsx` | **NEW** - Reusable scroll-reveal wrapper |
| `src/components/Navbar.tsx` | Add entrance animation |
| `src/components/Biography.tsx` | Add scroll-reveal |
| `src/components/Snapshot.tsx` | Add scroll-reveal |
| `src/components/SelectedWork.tsx` | Add scroll-reveal to project cards |
| `src/components/EngineeringProfile.tsx` | Add scroll-reveal |

---

### Task 1: Install Framer Motion

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install motion package**

Run: `npm install motion`
Expected: Package added to dependencies

- [ ] **Step 2: Verify installation**

Run: `npm ls motion`
Expected: Shows `motion@12.x.x`

---

### Task 2: Create AnimatedSection Wrapper

**Files:**
- Create: `src/components/AnimatedSection.tsx`

- [ ] **Step 1: Create reusable scroll-reveal component**

```tsx
"use client"
import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npm run typecheck`
Expected: No errors

---

### Task 3: Swap Hero Layout & Add Animations

**Files:**
- Modify: `src/components/Hero.tsx:1-38`

- [ ] **Step 1: Update Hero with swapped layout and animations**

```tsx
"use client"
import { motion, useReducedMotion } from "motion/react"
import portrait from "../assets/portrait.png"

function Hero() {
  const reduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: false,
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const fadeUp = {
    hidden: reduceMotion ? false : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const imageReveal = {
    hidden: reduceMotion ? false : { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
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
        {/* Image - Left Side */}
        <motion.div
          className="relative col-span-12 mt-12 aspect-[3/4] lg:col-span-4 lg:mt-0"
          variants={imageReveal}
        >
          <div className="relative h-full w-full overflow-hidden rounded-sm">
            <img
              alt="Professional portrait of Chairil Rafi Purnama"
              className="h-full w-full object-cover object-top opacity-90 grayscale mix-blend-luminosity transition-all duration-700 ease-out hover:opacity-100 hover:grayscale-0"
              src={portrait}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
          </div>
        </motion.div>

        {/* Text - Right Side */}
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
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npm run typecheck`
Expected: No errors

---

### Task 4: Add Animation to Navbar

**Files:**
- Modify: `src/components/Navbar.tsx:1-42`

- [ ] **Step 1: Add entrance animation to Navbar**

```tsx
"use client"
import { motion, useReducedMotion } from "motion/react"

function Navbar() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b border-border-subtle bg-background"
      initial={reduceMotion ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
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
    </motion.nav>
  )
}

export default Navbar
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npm run typecheck`
Expected: No errors

---

### Task 5: Add Scroll-Reveal to Biography

**Files:**
- Modify: `src/components/Biography.tsx:1-39`

- [ ] **Step 1: Wrap Biography content with AnimatedSection**

```tsx
import { AnimatedSection } from "./AnimatedSection"

function Biography() {
  return (
    <section
      id="biography"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="grid grid-cols-12 gap-gutter">
        <AnimatedSection className="col-span-12 lg:col-span-4">
          <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
            01 // BIOGRAPHY
          </h2>
        </AnimatedSection>
        <div className="col-span-12 lg:col-span-8">
          <AnimatedSection>
            <h2 className="mb-12 font-display-xl text-display-lg leading-tight tracking-tighter">
              I deliver comprehensive end-to-end solutions, bridging modern
              frontend and robust backend stacks.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <p className="font-body-lg text-on-surface-variant">
                As an experienced Full Stack Developer, I leverage expertise in
                modern frontend (Flutter, React, Next.js) and robust backend
                stacks including Golang, Laravel, and Python, with strong
                PostgreSQL database proficiency.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="font-body-lg text-on-surface-variant">
                I've participated in projects across diverse industrial domains —
                HR, Point-of-Sale, CRM, GIS, Fintech, and Logistics — overseeing
                the full application lifecycle from initial development and system
                analysis to deployment and release management on Play Store and
                App Store.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npm run typecheck`
Expected: No errors

---

### Task 6: Add Scroll-Reveal to Snapshot

**Files:**
- Modify: `src/components/Snapshot.tsx:1-47`

- [ ] **Step 1: Wrap Snapshot content with AnimatedSection**

```tsx
import { AnimatedSection } from "./AnimatedSection"

function Snapshot() {
  return (
    <section
      id="snapshot"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="grid grid-cols-12 gap-gutter">
        <AnimatedSection className="col-span-12 flex flex-col justify-center border-b border-border-subtle pb-8 md:col-span-5 md:border-b-0 md:border-r md:pr-8 md:pb-0">
          <span className="mb-4 block font-metadata-sm text-metadata-sm text-tertiary-container">
            EXPERIENCE
          </span>
          <span className="mb-4 block font-display-lg text-display-lg leading-none">
            6+ Years
          </span>
          <p className="max-w-sm font-body-md text-on-surface-variant">
            Delivering comprehensive end-to-end solutions across HR, POS, CRM,
            GIS, Fintech, and Logistics for enterprise and high-growth startups.
          </p>
        </AnimatedSection>
        <div className="col-span-12 grid grid-cols-1 content-center gap-x-gutter gap-y-12 pl-0 sm:grid-cols-2 md:col-span-7 md:pl-8">
          <AnimatedSection delay={0.1} className="border-b border-border-subtle pb-6 sm:border-b-0 sm:pb-0">
            <span className="mb-2 block font-metadata-sm text-metadata-sm text-tertiary-container">
              DOMAIN
            </span>
            <span className="font-headline-md text-headline-md">Full Stack</span>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="border-b border-border-subtle pb-6 sm:border-b-0 sm:pb-0">
            <span className="mb-2 block font-metadata-sm text-metadata-sm text-tertiary-container">
              FOCUS
            </span>
            <span className="font-headline-md text-headline-md">
              Product Dev
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <span className="mb-2 block font-metadata-sm text-metadata-sm text-tertiary-container">
              LOCATION
            </span>
            <span className="font-headline-md text-headline-md">Bandung, ID</span>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Snapshot
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npm run typecheck`
Expected: No errors

---

### Task 7: Add Scroll-Reveal to SelectedWork

**Files:**
- Modify: `src/components/SelectedWork.tsx:1-126`

- [ ] **Step 1: Add AnimatedSection to project cards**

```tsx
import { AnimatedSection } from "./AnimatedSection"

// ... (keep existing Project interface and projects array)

function SelectedWork() {
  return (
    <section
      id="work"
      className="border-b border-border-subtle py-vertical-section"
    >
      <div className="mb-module-gap grid grid-cols-12 gap-gutter border-b border-border-subtle pb-6">
        <div className="col-span-12">
          <AnimatedSection>
            <h2 className="font-metadata-caps text-metadata-caps text-tertiary-container">
              02 // SELECTED WORK
            </h2>
          </AnimatedSection>
        </div>
      </div>
      <div className="flex flex-col gap-[120px]">
        {projects.map((project, index) => (
          <AnimatedSection key={project.index} delay={index * 0.1}>
            <article className="group grid grid-cols-12 gap-gutter">
              <div
                className={`col-span-12 overflow-hidden border border-border-subtle bg-surface-container lg:col-span-7 ${
                  project.reverse ? "order-1 lg:order-2" : ""
                }`}
              >
                <img
                  alt={project.alt}
                  className="aspect-[16/9] h-full w-full object-cover opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  src={project.image}
                />
              </div>
              <div
                className={`col-span-12 flex flex-col justify-start lg:col-span-5 ${
                  project.reverse ? "order-2 lg:order-1" : ""
                }`}
              >
                <span className="mb-2 font-metadata-caps text-metadata-caps text-tertiary-container">
                  PROJECT {project.index} / {project.label}
                </span>
                <h3 className="mb-6 font-headline-lg text-headline-lg">
                  {project.title}
                </h3>
                <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                  {project.description}
                </p>
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div>
                    <span className="mb-1 block font-metadata-sm text-metadata-sm text-tertiary-container">
                      ROLE
                    </span>
                    <span className="font-metadata-caps text-metadata-caps">
                      {project.role}
                    </span>
                  </div>
                  <div>
                    <span className="mb-1 block font-metadata-sm text-metadata-sm text-tertiary-container">
                      DOMAIN
                    </span>
                    <span className="font-metadata-caps text-metadata-caps">
                      {project.domain}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border-subtle px-2 py-1 font-metadata-sm text-metadata-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

export default SelectedWork
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `npm run typecheck`
Expected: No errors

---

### Task 8: Final Verification

**Files:**
- All modified files

- [ ] **Step 1: Run full typecheck**

Run: `npm run typecheck`
Expected: No errors

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Test in browser**

Run: `npm run dev`
Expected: 
- Hero shows image on LEFT, text on RIGHT
- Animations play on page load (staggered fade-up)
- Sections reveal on scroll
- Reduced motion preference respected
- All hover effects still work

---

## Summary of Changes

| Component | Animation Type |
|-----------|---------------|
| Navbar | Slide-down entrance |
| Hero | Staggered fade-up (text) + slide-right (image) |
| Biography | Scroll-reveal fade-up |
| Snapshot | Scroll-reveal fade-up with stagger |
| SelectedWork | Scroll-reveal per project card |

## Animation Principles Used

1. **Easing:** `[0.16, 1, 0.3, 1]` - Smooth deceleration (no harsh stops)
2. **Stagger:** 0.15s between elements - Creates visual rhythm
3. **Amount:** `0.2` viewport threshold - Triggers early enough to feel natural
4. **Once:** `true` - Animations don't replay on scroll-back
5. **Reduced Motion:** Respects `prefers-reduced-motion` system setting
