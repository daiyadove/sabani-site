import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
// import { VideoSection } from "@/components/sections/VideoSection"; // VideoSection は現在未使用のためコメントアウト
import { ActivitySection } from "@/components/sections/ActivitySection";
import { TestimonialSection } from "@/components/sections/TestimonialSection"; // 追加
import { CaptainSection } from "@/components/sections/CaptainSection";
import { GuideSection } from "@/components/sections/GuideSection";
import { FaqSection } from "@/components/sections/FaqSection"; // 追加
import { GallerySection } from "@/components/sections/GallerySection";


export default function Home() {
  return (
    <>
      <Header />
      {/* pt-16 は Header の高さに依存するため注意 */}
      <main className="pt-16">
        {/* 1. ヒーローセクション */}
        <div id="home">
          <HeroSection />
        </div>
        {/* 2. アクティビティ */}
        <div id="activities">
          <ActivitySection />
        </div>
        {/* 3. ギャラリー */}
        <div id="gallery">
          <GallerySection />
        </div>
        {/* 4. お客様の声 */}
        <div id="testimonials">
          <TestimonialSection />
        </div>
        {/* 5. 船長紹介 */}
        <div id="captain">
          <CaptainSection />
        </div>
        {/* 6. ご参加にあたって */}
        <div id="guide">
          <GuideSection />
        </div>
        {/* 7. よくある質問 */}
        <div id="faq">
          <FaqSection />
        </div>
        {/* <VideoSection /> */} {/* 必要であれば追加 */}
      </main>
      <Footer />
    </>
  )
}
