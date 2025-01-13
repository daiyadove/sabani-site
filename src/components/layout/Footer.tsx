"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

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

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}