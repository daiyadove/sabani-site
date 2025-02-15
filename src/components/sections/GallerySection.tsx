"use client"

import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import Script from "next/script"
import { useEffect, useRef } from "react"

export function GallerySection() {
  const { locale } = useI18n()
  const t = translations[locale].gallery
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Instagramの埋め込みウィジェットを再レンダリング
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-24" id="gallery">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div ref={containerRef} className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/honoie2024/"
            data-instgrm-version="14"
          >
          </blockquote>
        </div>
      </div>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  )
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}
