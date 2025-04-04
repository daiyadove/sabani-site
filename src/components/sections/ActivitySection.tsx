"use client"

import Image from "next/image";
import Link from "next/link"; // Link をインポート
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // CardFooter をインポート
import { Button } from "@/components/ui/button"; // Button をインポート
import { useI18n } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

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
                      {/* ターゲット層へのアピールを追加 */}
                      <p className="text-sm text-blue-700 font-semibold mt-2">{course.appeal}</p>
                      <CardDescription className="mt-2">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col"> {/* flex-col を追加 */}
                      <ul className="space-y-2 mb-4"> {/* mb-4 を追加 */}
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
                    {/* 予約ボタンを追加 */}
                    <CardFooter className="mt-auto pt-4 border-t md:border-t-0 md:pt-0">
                      {/* TODO: 予約システムへのリンク */}
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link href="#reserve">
                          {t.reserveButton} {/* このプランを予約する */}
                        </Link>
                      </Button>
                    </CardFooter>
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
