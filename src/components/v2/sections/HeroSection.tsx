import React from "react"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* 固定背景 */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src="/images/hero.jpg"
          alt="サバニ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* テキストコンテンツ */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white space-y-4">
        <p className="text-2xl font-medium">風を捕まえて</p>
        <p className="text-2xl font-medium">どこまでも続く海を走り</p>
        <p className="text-2xl font-medium">着いた先に見えるのは</p>
        <p className="text-2xl font-medium">空と海だけ 🍶</p>
        <p className="text-2xl font-medium">たったひとつの</p>
        <p className="text-2xl font-medium">あなただけの景色</p>
      </div>
    </div>
  )
}