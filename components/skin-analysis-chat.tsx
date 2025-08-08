"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, User, Send, ImageIcon } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function SkinAnalysisChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm SOLVIA, your skin health assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("melanoma")) {
        response =
          "Melanoma is a serious form of skin cancer that begins in cells known as melanocytes. Early signs include changes in an existing mole or the development of a new, unusual-looking growth on your skin. The ABCDE rule can help you identify potential melanomas: Asymmetry, Border irregularity, Color variation, Diameter larger than 6mm, and Evolution or change over time. If you're concerned about a specific spot, I recommend uploading an image for analysis or consulting with a dermatologist."
      } else if (input.toLowerCase().includes("sunscreen")) {
        response =
          "Sunscreen is crucial for skin health! It helps protect against UV radiation, which can cause skin cancer and premature aging. For daily use, choose a broad-spectrum sunscreen with at least SPF 30. Apply it generously to all exposed skin about 15 minutes before going outside, and reapply every two hours or after swimming or sweating. Don't forget commonly missed areas like ears, neck, and the tops of feet!"
      } else if (input.toLowerCase().includes("acne")) {
        response =
          "Acne is a common skin condition characterized by pimples, blackheads, and whiteheads. It occurs when hair follicles become clogged with oil and dead skin cells. For mild acne, over-the-counter products containing benzoyl peroxide or salicylic acid can help. Consistent skincare, including gentle cleansing and avoiding picking at blemishes, is important. If your acne is severe or persistent, consider consulting a dermatologist for prescription treatments."
      } else {
        response =
          "Thank you for your question. I'm here to provide information about skin conditions, prevention strategies, and general skin health. Could you provide more details about your specific concern? You can also upload an image for analysis using our skin check tool."
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <Card className="h-[600px] flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div
                    className={`flex items-center justify-center h-8 w-8 rounded-full flex-shrink-0 ${
                      message.role === "user" ? "bg-teal-100 ml-2" : "bg-cyan-100 mr-2"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="h-4 w-4 text-teal-600" />
                    ) : (
                      <Bot className="h-4 w-4 text-cyan-600" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.role === "user" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <div className={`text-xs mt-1 ${message.role === "user" ? "text-teal-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="border-t p-4">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <ImageIcon className="h-5 w-5 text-gray-500" />
            </Button>
            <Input
              placeholder="Ask about skin conditions, prevention, or treatments..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
            />
            <Button
              className="flex-shrink-0 bg-teal-600 hover:bg-teal-700"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            SOLVIA provides information, not medical advice. For diagnosis and treatment, consult a healthcare
            professional.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
