"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search, Settings, User } from "lucide-react"

export default function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-8">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold mr-2">
                  S
                </div>
                <span className="font-bold text-xl">SOLVIA</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-900 font-medium">
                Dashboard
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Patients
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Analytics
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Datasets
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Research
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search patients, datasets..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Button variant="ghost" size="icon" className="text-gray-500">
              <Bell className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="text-gray-500">
              <Settings className="h-5 w-5" />
            </Button>

            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
