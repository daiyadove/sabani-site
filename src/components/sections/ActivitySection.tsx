import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const activities = [
  {
    title: "サバニライド",
    subtitle: "Sabani ride",
    description: "サバニライドで平久保半島の大自然を満喫コース。",
    price: 10000,
    childPrice: 5000,
    image: "/images/sabani-ride.jpg",
    features: [
      "船でしかいけないプライベートビーチに上陸",
      "ふかふかの砂のビーチ",
      "所要時間90分（海上50分）",
    ],
    note: "中学生以上は大人料金、小学生未満は2000円です。消費税・保険料込み。"
  },
  {
    title: "サバニライド＋スノーケル",
    subtitle: "Sabani ride + Snorkel",
    description: "サバニライドで平久保半島の珊瑚礁ポイントまで行き、スノーケルを楽しむコース。",
    price: 15000,
    childPrice: 7500,
    image: "/images/snorkel.jpg",
    features: [
      "生きた珊瑚礁でスノーケル",
      "色とりどりの珊瑚礁と熱帯魚",
      "所要時間120分（海上80分）",
    ],
    note: "中学生以上は大人料金、小学生未満は2000円です。消費税・保険料込み。"
  },
  {
    title: "サンセットクルーズ",
    subtitle: "Sunset Cruise",
    description: "平久保半島の大自然を朱色に染めるサンセットを眺めるコース！",
    price: 12000,
    childPrice: 6000,
    image: "/images/sunset-cruise.jpg",
    features: [
      "帆で静かに走るサバニからの夕日",
      "ロマンティックな景色",
      "所要時間100分",
    ],
    note: "中学生以上は大人料金、小学生未満は2000円です。消費税・保険料込み。"
  }
]

export function ActivitySection() {
  return (
    <section className="py-24" id="activities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            久宇良サバニツアー
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            サバニで巡る、石垣島の海の冒険
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Card key={activity.title} className="overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activity.image})` }}
                />
              </div>
              <CardHeader>
                <CardTitle>
                  <div>{activity.title}</div>
                  <div className="text-lg font-normal text-neutral-600 mt-1">{activity.subtitle}</div>
                </CardTitle>
                <CardDescription>{activity.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-2">
                  {activity.features.map((feature) => (
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
                    大人 ¥{activity.price.toLocaleString()}
                  </div>
                  <div className="text-lg text-blue-600">
                    小学生 ¥{activity.childPrice.toLocaleString()}
                  </div>
                  <div className="mt-2 text-sm text-neutral-600">
                    {activity.note}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/reservation?plan=${encodeURIComponent(activity.title)}`}>
                    予約はこちら
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}