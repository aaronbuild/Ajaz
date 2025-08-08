"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown } from "lucide-react"

export default function GemmaNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Models", href: "/research" },
    { name: "Research", href: "/research" },
    { name: "Datasets", href: "/datasets" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav className="bg-[#0a0a0a] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-white font-medium text-lg">SOLVIA Research</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Try SOLVIA Demo
            </Button>
            <Button size="sm" className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white border-0">
              View Research
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
