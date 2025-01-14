"use client"

import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

export function GallerySection() {
  const { locale } = useI18n()
  const t = translations[locale].gallery

  const images = [
    {
      src: "/images/gallery/1.avif",
      alt: t.alt1
    },
    {
      src: "/images/gallery/2.avif",
      alt: t.alt2
    },
    {
      src: "/images/gallery/3.avif",
      alt: t.alt3
    },
    {
      src: "/images/gallery/4.avif",
      alt: t.alt4
    },
    {
      src: "/images/gallery/5.avif",
      alt: t.alt5
    },
    {
      src: "/images/gallery/6.avif",
      alt: t.alt6
    }
  ]

  return (
    <section className="py-24 bg-neutral-50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-[4/3] relative overflow-hidden rounded-lg group">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium px-4 text-center">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}