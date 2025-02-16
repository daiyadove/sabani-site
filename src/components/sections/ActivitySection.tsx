"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

type CourseKey = 'course1' | 'course2' | 'course3'

export function ActivitySection() {
  const { locale } = useI18n()
  const t = translations[locale].activities

  const activities = [
    {
      key: 'course1' as CourseKey,
      image: "/images/tour/sabani-ride.png",
      price: 10000,
      childPrice: 5000,
    },
    {
      key: 'course2' as CourseKey,
      image: "/images/tour/snorkel.png",
      price: 15000,
      childPrice: 7500,
    },
    {
      key: 'course3' as CourseKey,
      image: "/images/tour/sunset-cruise.jpg",
      price: 12000,
      childPrice: 6000,
    }
  ]

  return (
    <section className="py-24" id="activities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {activities.map((activity) => {
            const course = t[activity.key]
            return (
              <Card key={activity.key} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={activity.image}
                        alt={course.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col">
                    <CardHeader>
                      <CardTitle>
                        <div>{course.title}</div>
                        <div className="text-lg font-normal text-neutral-600 mt-1">{course.subtitle}</div>
                      </CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {course.features.map((feature: string) => (
                          <li key={feature} className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-green-500"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-4">
                        <div className="text-2xl font-bold text-blue-600">
                          {t.adult} ¥{activity.price.toLocaleString()}
                        </div>
                        <div className="text-lg text-blue-600">
                          {t.child} ¥{activity.childPrice.toLocaleString()}
                        </div>
                        <div className="mt-2 text-sm text-neutral-600">
                          {t.priceNote}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
