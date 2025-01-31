'use client'

import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './mobileMenu'
import { usePathname } from 'next/navigation'
import AuthButton from '@/components/buttons/authButton'

export type MenuItemType = {
  displayText: string
  href: string
  isMobileOnly: boolean
}

const MENU_ITEMS: MenuItemType[] = [
  // { displayText: 'Home', href: '/', isMobileOnly: true },
  { displayText: 'Features', href: '/features', isMobileOnly: false },
  { displayText: 'How it works', href: '/how-it-works', isMobileOnly: false },
  { displayText: 'About', href: '/about', isMobileOnly: false },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="bg-purple-background sticky top-0 h-20 w-full">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between p-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-5 lg:px-8">
        <div>
          <Link className="flex w-16 items-center" href="/">
            <Image
              src="/images/logos/fruta-logo.png"
              alt="Una pequeña fruta, cortesía de Frutero Club"
              width={512}
              height={512}
              className="h-10 w-10 transition duration-300 ease-in-out hover:scale-90"
            />
            <span className="sr-only">Frutero Club</span>
          </Link>
        </div>
        <div className="z-10 col-span-3 flex items-center justify-center">
          <nav className="hidden gap-6 lg:flex">
            {MENU_ITEMS.filter((menuItem) => !menuItem.isMobileOnly).map(
              (menuItem, index) => (
                <Link
                  key={`${menuItem.displayText}-menuItem-${index}`}
                  className={`inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-secondary-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none ${
                    pathname === menuItem.href &&
                    'pointer-events-none underline decoration-primary decoration-[1.5px] underline-offset-[6px] hover:!text-foreground'
                  }`}
                  href={menuItem.href}
                >
                  {menuItem.displayText}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className="hidden lg:flex lg:justify-end">
          <AuthButton />
        </div>
        <MobileMenu menuItems={MENU_ITEMS} pathname={pathname} />
      </div>
    </header>
  )
}
