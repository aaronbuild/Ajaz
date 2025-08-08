"use client"

import { useState } from "react"
import { ProductCard } from "@/components/ui/product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Modern Desk Lamp",
    category: "Home Office",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Ergonomic Chair",
    category: "Furniture",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Wearables",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Portable Charger",
    category: "Electronics",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: false,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Coffee Maker",
    category: "Kitchen",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    isNew: true,
    rating: 4.8,
  },
]

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-8 max-w-md mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
