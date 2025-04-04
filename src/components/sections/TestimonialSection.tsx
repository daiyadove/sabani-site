"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

// ダミーのレビューデータ型
interface Testimonial {
  id: number
  name: string
  role: string // 例: '40代 夫婦', '家族連れ', '30代 男性'
  avatarFallback: string // アバターのフォールバック文字
  avatarImage?: string // アバター画像のパス (任意)
  rating: number // 5段階評価
  commentKey: 'comment1' | 'comment2' | 'comment3' // translations.ts 内のキー
}

export function TestimonialSection() {
  const { locale } = useI18n()
  const t = translations[locale].testimonials // testimonials オブジェクトを想定

  // ダミーデータ (後で translations.ts にコメント内容を追加)
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "佐藤様",
      role: t.roles.couple40s, // "40代 夫婦"
      avatarFallback: "S",
      rating: 5,
      commentKey: "comment1",
    },
    {
      id: 2,
      name: "田中ファミリー",
      role: t.roles.family, // "家族連れ"
      avatarFallback: "T",
      rating: 5,
      commentKey: "comment2",
    },
    {
      id: 3,
      name: "鈴木様",
      role: t.roles.cultureLover, // "文化愛好家"
      avatarFallback: "S",
      rating: 4,
      commentKey: "comment3",
    },
  ]

  return (
    <section className="py-24 bg-neutral-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title} {/* お客様の声 */}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t.subtitle} {/* 実際に体験されたお客様からのメッセージです */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  {testimonial.avatarImage && <AvatarImage src={testimonial.avatarImage} alt={testimonial.name} />}
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
                {/* 星評価 */}
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-neutral-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.376 2.45a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.375-2.45a1 1 0 00-1.176 0l-3.375 2.45c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-4">
                <p className="text-neutral-700 italic">{`"${t[testimonial.commentKey]}"`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
