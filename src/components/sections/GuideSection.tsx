"use client"

import { useI18n } from "@/lib/i18n/context"
import Image from "next/image"
import { translations } from "@/lib/i18n/translations"
import { User, Backpack, MapPin, Package, CreditCard, AlertTriangle, Shield, LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type IconName = 'user' | 'backpack' | 'map' | 'package' | 'credit-card' | 'alert-triangle' | 'shield'

const icons: Record<IconName, LucideIcon> = {
  'user': User,
  'backpack': Backpack,
  'map': MapPin,
  'package': Package,
  'credit-card': CreditCard,
  'alert-triangle': AlertTriangle,
  'shield': Shield,
}

export function GuideSection() {
  const { locale } = useI18n()
  const t = translations[locale].guide

  return (
    <section className="py-24" id="guide">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {t.items.map((item, index) => {
            const Icon = icons[item.icon as IconName]
            return (
              <Card key={index} className="border-2">
                {item.title === 'お支払い' ? (
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="/images/payments.jpg"
                          alt="お支払い方法"
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-50">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <CardTitle className="text-lg">
                            {item.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-600 whitespace-pre-line">
                          {item.description}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                ) : (
                  <>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-50">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
