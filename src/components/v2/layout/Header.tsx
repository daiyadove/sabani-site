"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/LanguageToggle"

const MenuItems = () => {
  return (
    <>
      <NavigationMenuItem>
        <Link href="#home" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            ホーム
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#sea" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            海風
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#tour" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            サバニツアー
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#walk" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            島歩き
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#contact" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            予約お問合せ
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="#shop" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            ショップ
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
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
                  ホーム
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#sea" className="text-lg hover:text-blue-600">
                  海風
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#tour" className="text-lg hover:text-blue-600">
                  サバニツアー
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#walk" className="text-lg hover:text-blue-600">
                  島歩き
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#contact" className="text-lg hover:text-blue-600">
                  予約お問合せ
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#shop" className="text-lg hover:text-blue-600">
                  ショップ
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