"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarCheck } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { useState, useEffect } from "react"

export function FloatingCtaButton() {
  const { locale } = useI18n()
  // フッターのCTAボタンの翻訳キーを流用
  const t = translations[locale].footer.cta
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // スクロール位置が一定量を超えたら表示 (例: 300px)
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    // クリーンアップ関数
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* アクティビティセクションへスクロール */}
      <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg">
        <Link href="#activities">
          <CalendarCheck className="mr-2 h-5 w-5" />
          {t.reserveButton} {/* 今すぐ予約する */}
        </Link>
      </Button>
    </div>
  )
}
