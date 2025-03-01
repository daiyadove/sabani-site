import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { VideoSection } from "@/components/sections/VideoSection"
import { ActivitySection } from "@/components/sections/ActivitySection"
import { GuideSection } from "@/components/sections/GuideSection"
import { GallerySection } from "@/components/sections/GallerySection"
import { CaptainSection } from "@/components/sections/CaptainSection"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* ヘッダーの高さ分のパディング */}
        <div id="home">
          <HeroSection />
        </div>
        <div id="activities">
          <ActivitySection />
        </div>
        <div id="guide">
          <GuideSection />
        </div>
        <div id="captain">
          <CaptainSection />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
      </main>
      <Footer />
    </>
  )
}
