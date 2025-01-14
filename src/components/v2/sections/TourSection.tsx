import React from "react"
import Link from "next/link"

export function TourSection() {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto py-20">
        <Link href="/v2/tour">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            サバニツアーの詳細を見る
          </button>
        </Link>
      </div>
    </div>
  )
}