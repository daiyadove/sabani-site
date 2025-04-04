"use client" // Add "use client"

import Image from 'next/image';
import { useI18n } from "@/lib/i18n/context"; // Import useI18n
import { translations } from "@/lib/i18n/translations"; // Import translations

export const CaptainSection = () => {
  const { locale } = useI18n(); // Initialize useI18n
  const t = translations[locale].captain; // Get captain translations

  return (
    <section className="py-16 bg-white" id="captain"> {/* Add id="captain" */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2> {/* Use translation */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            {/* TODO: Replace with actual captain's photo */}
            <div className="relative w-full aspect-square">
              <Image
                src="/images/profile.jpg" // Update image path if needed
                alt={t.name} // Use translation for alt text
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="space-y-6">
              {/* 基本情報 */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{t.name}</h3>
                <p className="text-gray-600">{t.nickname}</p>
                {/* <p className="text-gray-600">{t.dob}</p> */} {/* DOBは必須でなければ削除検討 */}
                {/* <p className="text-gray-600">{t.hobby}</p> */} {/* 趣味も必須でなければ削除検討 */}
                <div className="mt-4">
                  <h4 className="text-xl font-semibold mb-2">{t.qualifications.title}</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {t.qualifications.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* メッセージ */}
              <div className="space-y-4">
                <p className="text-gray-700">{t.greeting}</p>

                {/* サバニ・文化への想い */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">{t.passion.title}</h4>
                  <p className="text-gray-700">{t.passion.text1}</p>
                  <p className="text-gray-700 mt-2">{t.passion.text2}</p>
                </div>

                {/* 安全への取り組み */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">{t.safety.title}</h4>
                  <p className="text-gray-700">{t.safety.text}</p>
                </div>

                {/* ゲストへのメッセージ */}
                <div>
                  <h4 className="text-xl font-semibold mb-2">{t.message.title}</h4>
                  <p className="text-gray-700">{t.message.text}</p>
                  {/* Extra closing p tag removed below */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
