"use client"

import { useState, useEffect } from "react"
import { Send, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

type Message = {
  id: number
  text: string
  isUser: boolean
  showPrompt?: boolean
}

export default function Khadoom() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([
    { id: Date.now(), text: "مرحبا , كيف استطيع ان اساعدك؟", isUser: false },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const addMessage = (message: Omit<Message, "id">) => {
    setMessages((prev) => [...prev, { ...message, id: Date.now() }])
  }

  const simulateTyping = (callback: () => void, duration = 1500) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      callback()
    }, duration)
  }

  const handleSend = () => {
    if (input.trim()) {
      addMessage({ text: input, isUser: true })
      setInput("")

      if (input.includes("اعاني من مشكلة في الوصول الى الشبكة الخاصة بالوزارة")) {
        simulateTyping(() => {
          addMessage({
            text: "مرحبا بك, جرب الحلول الاتية خطوة بخطوة وبلغني ما اذا نفعت ام لا\n\n1- تأكد من اتصال جهازك بشبكة الإنترنت\n2- حاول إعادة تشغيل جهازك\n3- تواصل مع قسم الدعم الفني إذا استمرت المشكلة",
            isUser: false,
          })

          setTimeout(() => {
            simulateTyping(() => {
              addMessage({
                text: "هل حللت مشكلتك؟",
                isUser: false,
                showPrompt: true,
              })
            })
          }, 1000)
        })
      }
    }
  }

  const handlePromptResponse = (response: "yes" | "no") => {
    if (response === "yes") {
      simulateTyping(() => {
        addMessage({ text: "كنت سعيداً بخدمتك", isUser: false })
      })
    } else {
      simulateTyping(() => {
        addMessage({
          text: "لاتقلق سارفع طلب بمشكلتك الى قسم تقنية المعلومات, رقم طلبك هو #82772 ستصلك نسخة من الطلب عبر البريد الالكتروني",
          isUser: false,
        })
      })
    }
  }

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container")
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  }, [])

  return (
    <div className="flex flex-col h-screen bg-gray-100" dir="rtl">
      <div className="bg-white p-4 border-b shadow-sm flex justify-between items-center">
        <button
          onClick={() => router.push("/")}
          className="text-green-500 hover:text-blue-600 transition-colors duration-300"
        >
          <ArrowRight size={24} />
        </button>
        <h1 className="text-2xl font-bold text-center text-gray-800">خدوم</h1>
        <div className="w-6"></div> {/* This empty div balances the layout */}
      </div>
      <div id="chat-container" className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-[70%] p-3 rounded-lg relative ${
                message.isUser ? "bg-green-500 text-white rounded-br-none" : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {message.text}
              <div
                className={`absolute bottom-0 w-4 h-4 ${message.isUser ? "right-0 bg-green-500" : "left-0 bg-white"}`}
                style={{
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  transform: message.isUser ? "scaleX(-1)" : "none",
                }}
              ></div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-end">
            <div className="bg-gray-200 rounded-full px-4 py-2">
              <div className="typing-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        {messages.length > 0 && messages[messages.length - 1].showPrompt && (
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => handlePromptResponse("yes")}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
            >
              نعم
            </button>
            <button
              onClick={() => handlePromptResponse("no")}
              className="border-2 border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 transform hover:scale-105"
            >
              لا
            </button>
          </div>
        )}
      </div>
      <div className="bg-white p-4 border-t">
        <div className="flex items-center">
          <button
            onClick={handleSend}
            className="ml-2 bg-green-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          >
            <Send size={20} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  )
}

