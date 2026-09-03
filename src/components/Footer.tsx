import { useState } from "react"
import type { FormEvent } from "react"
import { Link } from "react-router-dom"

const EMAIL = "chairilraffi@gmail.com"
const WHATSAPP_DISPLAY = "+62 898 5722 049"
const WHATSAPP = "628985722049"

function Footer() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hi Chairil, my name is ${name || "there"}.\n\n${message}\n\n(Contact via portfolio)`,
    )
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer")
  }

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
              and interesting technical challenges. Say hi — I usually reply
              within a day.
            </p>
            <div className="flex flex-col gap-4">
              <a
                className="btn-hover inline-flex w-fit items-center gap-2 border border-secondary px-8 py-4 font-metadata-caps text-metadata-caps text-on-background transition-colors duration-200"
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Chat on WhatsApp
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
              <a
                className="inline-flex w-fit items-center gap-2 font-metadata-caps text-metadata-caps text-on-surface-variant transition-colors duration-200 hover:text-primary"
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="col-span-12 flex flex-col justify-center md:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-4 border border-border-subtle bg-surface-container-low p-6 md:p-8"
            >
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border-subtle pb-4">
                <label
                  htmlFor="contact-name"
                  className="font-metadata-caps text-metadata-caps text-tertiary-container"
                >
                  SEND A MESSAGE
                </label>
                <span className="font-metadata-sm text-metadata-sm text-on-surface-variant">
                  Opens in WhatsApp
                </span>
              </div>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border border-border-subtle bg-background px-4 py-3 font-body-md text-on-background placeholder:text-on-surface-variant/60 focus:border-secondary focus:outline-none"
              />
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or role…"
                required
                rows={4}
                className="w-full resize-none border border-border-subtle bg-background px-4 py-3 font-body-md text-on-background placeholder:text-on-surface-variant/60 focus:border-secondary focus:outline-none"
              />
              <button
                type="submit"
                className="btn-hover inline-flex items-center justify-center gap-2 border border-secondary px-8 py-3 font-metadata-caps text-metadata-caps text-on-background transition-colors duration-200"
              >
                Send via WhatsApp
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-start justify-between gap-gutter px-margin-desktop md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="font-metadata-caps text-metadata-caps text-on-background">
            2026 CHAIRIL RAFI PURNAMA | Senior Full Stack Developer | Remote /
            Global
          </div>
          <div className="font-metadata-sm text-metadata-sm text-on-surface-variant">
            {WHATSAPP_DISPLAY}
          </div>
        </div>
        <div className="flex flex-wrap gap-gutter">
          <Link
            className="font-metadata-sm text-metadata-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
            to="/projects"
          >
            Projects
          </Link>
          <a
            className="font-metadata-sm text-metadata-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
            href="https://chairil.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            Website
          </a>
          <a
            className="font-metadata-sm text-metadata-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
            href="https://github.com/chairilrafi11"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            className="font-metadata-sm text-metadata-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
            href="https://linkedin.com/in/chairil-rafi-705510180"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            className="font-metadata-sm text-metadata-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
            href={`mailto:${EMAIL}`}
          >
            Email
          </a>
          <a
            className="font-metadata-sm text-metadata-sm text-on-surface-variant transition-colors duration-300 hover:text-primary"
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
