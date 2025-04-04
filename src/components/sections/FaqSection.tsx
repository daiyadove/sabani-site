"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

// FAQデータ型 (translations.ts 内で定義されることを想定)
interface FaqItem {
  questionKey: string
  answerKey: string
}

export function FaqSection() {
  const { locale } = useI18n()
  const t = translations[locale].faq // faq オブジェクトを想定

  // ダミーFAQデータ (後で translations.ts に内容を追加)
  // translations.ts 側で questions と answers オブジェクトを持つ想定
  const faqItems: FaqItem[] = [
    { questionKey: "q1", answerKey: "a1" }, // 初心者でも大丈夫？
    { questionKey: "q2", answerKey: "a2" }, // 子供は何歳から参加できる？
    { questionKey: "q3", answerKey: "a3" }, // 雨が降ったらどうなる？
    { questionKey: "q4", answerKey: "a4" }, // 持ち物は何が必要？
    { questionKey: "q5", answerKey: "a5" }, // 集合場所はどこ？
  ]

  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.title} {/* よくあるご質問 */}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {t.subtitle} {/* ご不明な点はこちらでご確認ください */}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg text-left">
                  {t.questions[item.questionKey as keyof typeof t.questions]}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700 whitespace-pre-line">
                  {t.answers[item.answerKey as keyof typeof t.answers]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
