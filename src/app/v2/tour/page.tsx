import React from "react"
import Image from "next/image"
import { Header } from "@/components/v2/layout/Header"
import { Footer } from "@/components/v2/layout/Footer"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const tourImages = [
  {
    src: "/images/hero.jpg",
    alt: "サバニツアー1",
  },
  {
    src: "/images/hero.jpg",
    alt: "サバニツアー2",
  },
]

export default function TourPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* タイトル */}
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">サバニツアー</h1>

          {/* 画像スライダー */}
          <div className="max-w-4xl mx-auto mb-16">
            <Carousel>
              <CarouselContent>
                {tourImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* ツアー情報 */}
          <div className="max-w-3xl mx-auto space-y-12">
            {/* 参加条件 */}
            <div>
              <h2 className="text-xl font-bold mb-4">参加条件</h2>
              <p className="text-gray-700">
                持病がある方、妊娠中の方、体力に不安のある方、3歳以下のお子様がいる場合はご相談ください
              </p>
            </div>

            {/* 持ち物 */}
            <div>
              <h2 className="text-xl font-bold mb-4">持ち物</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>ドリンク（水分補給用）</li>
                <li>ツアー後の着替え</li>
                <li>濡れても構わない上着</li>
                <li className="text-sm">（夏はラッシュガードなど日焼け用に、冬は防寒用にご用意ください。）</li>
              </ul>
            </div>

            {/* 撮影オプション */}
            <div>
              <h2 className="text-xl font-bold mb-4">撮影オプション</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>ドローン撮影オプションは＋11,000円（写真10枚、映像60秒程度）</li>
                <li>風速10m以上の場合、また潮位が高く砂州が現れない場合はキャンセルとなりますので、ご了承ください。</li>
                <li>一眼カメラ撮影オプションは＋11,000円（写真30枚）</li>
                <li>データ納品方法：1週間以内にダウンロードURLをメールにてお知らせいたします。</li>
              </ul>
            </div>

            {/* ドローン撮影オプション */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-8">
                絶景を思い出に残そう！
                <br />
                ドローン撮影オプション
              </h2>

              {/* 参加条件 */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">参加条件</h3>
                  <p className="text-gray-700">
                    持病がある方、妊娠中の方、体力に不安のある方、3歳以下のお子様がいる場合はご相談ください
                  </p>
                </div>

                {/* 持ち物 */}
                <div>
                  <h3 className="text-xl font-bold mb-4">持ち物</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>ドリンク（水分補給用）</li>
                    <li>ツアー後の着替え</li>
                    <li>濡れても構わない上着</li>
                    <li className="text-sm">（夏はラッシュガードなど日焼け用に、冬は防寒用にご用意ください。）</li>
                  </ul>
                </div>

                {/* 撮影オプション */}
                <div>
                  <h3 className="text-xl font-bold mb-4">撮影オプション</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>ドローン撮影オプションは＋11,000円（写真10枚、映像60秒程度）</li>
                    <li>風速10m以上の場合、また潮位が高く砂州が現れない場合はキャンセルとなりますので、ご了承ください。</li>
                    <li>一眼カメラ撮影オプションは＋11,000円（写真30枚）</li>
                    <li>データ納品方法：1週間以内にダウンロードURLをメールにてお知らせいたします。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}