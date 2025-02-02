"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Home, Settings, HelpCircle,Info} from "lucide-react"

export default function Sidebar() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "design", label: "Settings", icon: Settings },
    { id: "support", label: "Support", icon: HelpCircle },
    { id: "about", label: "About", icon: Info },
  ]

  return (
    <div className="w-64 fixed left-0 top-0 h-screen bg-white border-l overflow-y-auto" dir="rtl">
      {/* Logo */}
      <div className="p-4 border-b">
        <Image src="/placeholder.svg" alt="Logo" width={120} height={40} className="mx-auto" />
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-2">
            <button
              onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
              className="w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-50 text-gray-700"
            >
              <div className="flex items-center">
                <item.icon className="w-5 h-5 ml-2" />
                <span>{item.label}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${expandedItem === item.id ? "transform rotate-180" : ""}`}
              />
            </button>
            {expandedItem === item.id && (
              <div className="pr-8 mt-2 space-y-2">
                <Link href="#" className="block p-2 text-sm text-gray-600 hover:text-gray-800">
                    side 1
                </Link>
                <Link href="#" className="block p-2 text-sm text-gray-600 hover:text-gray-800">
                    side 2
                </Link>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Language Switcher */}
      <div className="absolute bottom-0 right-0 left-0 p-4 border-t bg-white">
        <button className="w-full text-center text-sm text-gray-600 hover:text-gray-800">Arabic</button>
      </div>
    </div>
  )
}

