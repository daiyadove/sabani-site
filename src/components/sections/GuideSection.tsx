"use client"

import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { User, Backpack, MapPin, Cloud, Calendar, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const icons = {
  user: User,
  backpack: Backpack,
  map: MapPin,
  cloud: Cloud,
  calendar: Calendar,
  shield: Shield,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons]
            return (
              <Card key={index} className="border-2">
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
                  <p className="text-neutral-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}