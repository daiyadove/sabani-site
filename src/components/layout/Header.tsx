"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/LanguageToggle"
import { useI18n } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

const MenuItems = () => {
  const { locale } = useI18n()
  const t = translations[locale].menu

  return (
    <>
      <NavigationMenuItem>
        <Link href="#home" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t.home}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#activities" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t.activities}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#gallery" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t.gallery}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#guide" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t.guide}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#video" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {t.video}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  )
}

export function Header() {
  const { locale } = useI18n()
  const t = translations[locale].menu

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Sabani
        </Link>
        
        {/* デスクトップメニュー */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <MenuItems />
            </NavigationMenuList>
          </NavigationMenu>
          <LanguageToggle />
        </div>

        {/* モバイルメニュー */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              <SheetClose asChild>
                <Link href="#home" className="text-lg hover:text-blue-600">
                  {t.home}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#activities" className="text-lg hover:text-blue-600">
                  {t.activities}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#gallery" className="text-lg hover:text-blue-600">
                  {t.gallery}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#guide" className="text-lg hover:text-blue-600">
                  {t.guide}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#video" className="text-lg hover:text-blue-600">
                  {t.video}
                </Link>
              </SheetClose>
              <div className="pt-4">
                <LanguageToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}