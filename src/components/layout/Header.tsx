import Link from "next/link"
import { Menu } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const MenuItems = () => (
  <>
    <NavigationMenuItem>
      <Link href="#home" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          ホーム
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="#activities" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          アクティビティ
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="#gallery" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          ギャラリー
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="#guide" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          ガイド
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="#video" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          動画
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </>
)

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Sabani
        </Link>
        
        {/* デスクトップメニュー */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <MenuItems />
          </NavigationMenuList>
        </NavigationMenu>

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
                <Link href="#activities" className="text-lg hover:text-blue-600">
                  アクティビティ
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#gallery" className="text-lg hover:text-blue-600">
                  ギャラリー
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#guide" className="text-lg hover:text-blue-600">
                  ガイド
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#video" className="text-lg hover:text-blue-600">
                  動画
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}