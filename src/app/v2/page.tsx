export const dynamic = 'force-static'

import { Header } from "@/components/v2/layout/Header"
import { Footer } from "@/components/v2/layout/Footer"
import { HeroSection } from "@/components/v2/sections/HeroSection"
import { InstagramSection } from "@/components/v2/sections/InstagramSection"
import { TourSection } from "@/components/v2/sections/TourSection"

export default function HomeV2() {
  return (
    <>
      <Header />
      <main 
        className="min-h-screen pt-16 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/v2-bg.jpg')" }}
      >
        <div className="relative">
          <div id="home" className="backdrop-blur-sm bg-white/30">
            <HeroSection />
          </div>
          <div id="instagram" className="backdrop-blur-sm bg-white/30">
            <InstagramSection />
          </div>
          <div id="tour" className="backdrop-blur-sm bg-white/30">
            <TourSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}