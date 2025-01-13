"use client"

import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

export function VideoSection() {
  const { locale } = useI18n()
  const t = translations[locale].video

  return (
    <section className="py-24 bg-neutral-50" id="video">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/BzKn3SKuz5M"
              title="久宇良サバニツアー"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  )
}