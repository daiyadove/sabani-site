"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8">
              <Image
                src="/images/logo.svg"
                alt="Shu-kaji"
                width={32}
                height={32}
              />
            </div>
            <div className="text-lg font-bold">
              Shu-kaji
              <br />
              <span className="text-sm">TAKETOMI JIMA</span>
            </div>
          </Link>

          {/* SNSリンク */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </Link>
          </div>

          {/* コピーライト */}
          <div className="text-sm text-gray-600">
            <p>©Shu-kaji TAKETOMIJIMA</p>
          </div>
        </div>
      </div>
    </footer>
  )
}