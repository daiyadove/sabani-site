"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

export function HeroSection() {
  const { locale } = useI18n()
  const t = translations[locale].hero

  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="サバニでの航海"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* コンテンツ */}
      <div className="relative w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-11 md:col-span-8 lg:col-span-6 md:col-start-4 lg:col-start-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">
                {t.title}
              </h1>
              <div className="space-y-2 text-base md:text-lg lg:text-xl leading-relaxed">
                <p>{t.location}</p>
                <p>{t.shipyard}</p>
                <p>{t.description1}</p>
                <p>{t.description2}</p>
                <p>{t.description3}</p>
                <div className="mt-6" />
                <p>{t.sailing1}</p>
                <p>{t.sailing2}</p>
                <div className="mt-6" />
                <p>{t.activities1}</p>
                <p>{t.activities2}</p>
                <p>{t.activities3}</p>
                <div className="mt-6" />
                <p>{t.memory1}</p>
                <p>{t.memory2}</p>
                <p>{t.memory3}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#activities">
                    {t.viewActivities}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                  <Link href="#activities">
                    {t.reserve}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}