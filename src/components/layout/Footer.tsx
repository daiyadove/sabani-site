"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Button をインポート
import { Phone, Mail } from "lucide-react"; // アイコンをインポート
import { useI18n } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

export function Footer() {
  const { locale } = useI18n()
  const t = translations[locale].footer

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.company.title}</h3>
            <div className="space-y-2">
              <p>{t.company.name}</p>
              <p>{t.company.address}</p>
              <p>{t.company.tel}</p>
              <p>{t.company.email}</p>
            </div>
          </div>

          {/* リンク */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.links.title}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:text-blue-400">
                  {t.links.home}
                </Link>
              </li>
              <li>
                <Link href="#activities" className="hover:text-blue-400">
                  {t.links.activities}
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-blue-400">
                  {t.links.gallery}
                </Link>
              </li>
              <li>
                <Link href="#guide" className="hover:text-blue-400">
                  {t.links.guide}
                </Link>
              </li>
              <li>
                <Link href="#video" className="hover:text-blue-400">
                  {t.links.video}
                </Link>
              </li>
            </ul>
          </div>

          {/* 営業時間 */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.hours.title}</h3>
            <div className="space-y-2">
              <p>{t.hours.regular}</p>
              <p>{t.hours.note}</p>
            </div>
          </div>
        </div>

        {/* CTAセクション */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
          <h3 className="text-xl font-bold mb-4">{t.cta.title}</h3> {/* ご予約・お問い合わせ */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6">
            <a href={`tel:${t.company.tel.replace('TEL: ', '')}`} className="flex items-center gap-2 hover:text-blue-400">
              <Phone size={18} />
              <span>{t.company.tel}</span>
            </a>
            <a href={`mailto:${t.company.email.replace('Email: ', '')}`} className="flex items-center gap-2 hover:text-blue-400">
              <Mail size={18} />
              <span>{t.company.email}</span>
            </a>
          </div>
          {/* アクティビティセクションへスクロール */}
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#activities">
              {t.cta.reserveButton} {/* 今すぐ予約する */}
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
