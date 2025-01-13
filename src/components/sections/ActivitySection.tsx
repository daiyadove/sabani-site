"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

type CourseKey = 'course1' | 'course2' | 'course3'

export function ActivitySection() {
  const { locale } = useI18n()
  const t = translations[locale].activities

  const activities = [
    {
      key: 'course1' as CourseKey,
      image: "/images/sabani-ride.jpg",
      price: 10000,
      childPrice: 5000,
    },
    {
      key: 'course2' as CourseKey,
      image: "/images/snorkel.jpg",
      price: 15000,
      childPrice: 7500,
    },
    {
      key: 'course3' as CourseKey,
      image: "/images/sunset-cruise.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => {
            const course = t[activity.key]
            return (
              <Card key={activity.key} className="overflow-hidden flex flex-col">
                <div className="h-48 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${activity.image})` }}
                  />
                </div>
                <CardHeader>
                  <CardTitle>
                    <div>{course.title}</div>
                    <div className="text-lg font-normal text-neutral-600 mt-1">{course.subtitle}</div>
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
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
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/reservation?plan=${encodeURIComponent(course.title)}`}>
                      {t.reserveButton}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}