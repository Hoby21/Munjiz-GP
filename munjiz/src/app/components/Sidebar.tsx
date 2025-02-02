"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronDown,
  Home,
  HelpCircle,
  Settings,
} from "lucide-react"
import { Logo } from "./icons/Logo"

export default function Sidebar() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const menuItems = [
    { id: "home", label: "Home", icon: Home, hasDropdown: false },
    { id: "support", label: "Support", icon: HelpCircle, hasDropdown: false },
    { id: "updates", label: "Settings", icon: Settings, hasDropdown: true },
  ]

  return (
    <div className="w-64 fixed left-0 top-0 h-screen bg-white border-r overflow-y-auto">
      {/* Logo */}
      <div className="p-4">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="px-2 py-4">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-1">
            <button
              onClick={() => item.hasDropdown && setExpandedItem(expandedItem === item.id ? null : item.id)}
              className={`w-full flex items-center justify-between p-2 rounded-md hover:bg-gray-100 text-gray-700 ${
                expandedItem === item.id ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex items-center">
                <item.icon className="w-4 h-4 mr-3" />
                <span className="text-sm">{item.label}</span>
              </div>
              {item.hasDropdown && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedItem === item.id ? "transform rotate-180" : ""}`}
                />
              )}
            </button>
            {item.hasDropdown && expandedItem === item.id && (
              <div className="ml-9 mt-1 space-y-1">
                <Link
                  href="#"
                  className="block px-2 py-1.5 text-sm text-gray-600 hover:text-gray-800 rounded-md hover:bg-gray-50"
                >
                  Submenu Item 1
                </Link>
                <Link
                  href="#"
                  className="block px-2 py-1.5 text-sm text-gray-600 hover:text-gray-800 rounded-md hover:bg-gray-50"
                >
                  Submenu Item 2
                </Link>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Language Switcher */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
        <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50">Arabic</button>
      </div>
    </div>
  )
}

