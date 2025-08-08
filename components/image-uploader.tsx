"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Upload, X } from "lucide-react"

export default function ImageUploader() {
  const [images, setImages] = useState<string[]>([])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages([...images, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    const updatedImages = [...images]
    updatedImages.splice(index, 1)
    setImages(updatedImages)
  }

  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">
        Upload dermoscopic skin images for AI analysis. Supported formats: JPG, PNG (max 10MB)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image || "/placeholder.svg"}
              alt={`Uploaded skin image ${index + 1}`}
              className="w-full h-48 object-cover rounded-md"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}

        {images.length < 6 && (
          <Card className="flex flex-col items-center justify-center h-48 border-dashed border-2 border-gray-300 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
            <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500">Upload Image</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} multiple />
            </label>
          </Card>
        )}
      </div>

      <div className="text-sm text-gray-500">
        <p>Image Guidelines:</p>
        <ul className="list-disc pl-5 mt-1">
          <li>Ensure good lighting and focus</li>
          <li>Include multiple angles when possible</li>
          <li>Avoid shadows or glare</li>
          <li>Use consistent distance for all images</li>
        </ul>
      </div>
    </div>
  )
}
