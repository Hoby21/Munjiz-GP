import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Digital Government Authority",
  description: "Digital Government Authority Documentation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          {/* Conditionally render the Sidebar */}
          {!isLoginPage() && <Sidebar />}
          <main className={`flex-1 ${!isLoginPage() ? "pl-64" : ""}`}>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

// Helper function to check if the current page is the login page
function isLoginPage() {
  return typeof window !== "undefined" && window.location.pathname === "/login"
}

