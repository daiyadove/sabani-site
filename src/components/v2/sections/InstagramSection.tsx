import React from "react"
import Image from "next/image"
import Link from "next/link"

export function InstagramSection() {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto py-20">
        <div className="text-center mb-12">
          <p className="text-xl">
            サバニツアーの様子をInstagram{" "}
            <span className="font-bold">＃今日の竹富島</span> で発信中！
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square">
            <Image
              src="/images/hero.jpg"
              alt="サバニツアーの様子"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              沖縄伝統木造帆船
              <br />
              サバニツアー
            </h2>
            <p className="text-gray-700">
              沖縄に伝わる伝統木造帆船のサバニに乗って絶景の海へ。
              竹富島サバニツアーはその日の天気や海の流れを見ながら、
              その日にしか見られない絶景ポイントを竹富島の海を知りつくしているスタッフがご案内。
            </p>
            <Link href="/v2/tour">
              <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}