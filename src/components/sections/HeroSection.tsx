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
                src="/images/tour/sabani-ride.png" // 画像パスを変更
                alt={t.title} // altテキストも翻訳キーに合わせる
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {t.title} {/* 沖縄の伝統船サバニ */}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-8">
                {t.subtitle} {/* 琉球の風と歴史を体感する、本物の航海へ */}
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed">
                <p>{t.appeal1}</p> {/* ありきたりな観光では満足できないあなたへ。 */}
                <p>{t.appeal2}</p> {/* 家族と、大切な人と、忘れられない海の記憶を。 */}
                <ul className="list-disc list-inside space-y-2 pl-2 mt-4">
                  <li>{t.benefit1}</li> {/* 琉球王朝時代から続く航海術に触れる */}
                  <li>{t.benefit2}</li> {/* 手付かずの美しい海と自然を独り占め */}
                  <li>{t.benefit3}</li> {/* 専門ガイドが文化と自然を深く解説 */}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#activities">
                    {t.ctaViewPlans} {/* 体験プラン詳細を見る */}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                  {/* アクティビティセクションへスクロール */}
                  <Link href="#activities">
                    {t.ctaReserve} {/* 空き状況を確認・予約する */}
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
