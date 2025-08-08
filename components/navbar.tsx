"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      name: "Scanner",
      path: "/scanner",
      hasDropdown: false,
    },
    {
      name: "Overview",
      path: "/research",
      hasDropdown: false,
    },
    {
      name: "Learn",
      path: "/datasets",
      hasDropdown: false,
    },
    {
      name: "Visuals",
      path: "/analytics",
      hasDropdown: false,
    },
    {
      name: "Insights",
      path: "/conditions",
      hasDropdown: false,
    },
    {
      name: "About",
      path: "/about",
      hasDropdown: false,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">

            <Button asChild variant="ghost" className="text-xl font-bold text-teal-600 dark:text-teal-400 px-0">
              <Link href="/">SOLVIA</Link>
            </Button>
            <nav className="hidden md:flex ml-10 space-x-8">
              {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                      pathname === item.path ? "text-teal-600 dark:text-teal-400" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <span>🇺🇸</span>
              <span>English</span>
            </div>



            <Link href="/demo" passHref>
              <Button className="hidden md:flex bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-6 py-2 rounded-full">
                Solvia Now
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.path ? "bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300" : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full">
              Solvia Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
