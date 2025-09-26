"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
      setMessage("")
      setIsOpen(false)
    }
  }

  const quickMessages = [
    "I want to study abroad",
    "Tell me about UK universities",
    "I need help with applications",
    "Book a consultation",
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Franklin Education</h3>
                  <p className="text-xs text-green-100">Typically replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            {/* Welcome Message */}
            <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3">
              <p className="text-sm text-gray-800">
                👋 Hi there! Welcome to Franklin Education Consultancy. How can we help you with your study abroad
                journey?
              </p>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium">Quick messages:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(msg)}
                  className="block w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full h-10 w-10 p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full h-16 w-16 p-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  )
}
