import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Government Portal",
  description: "Official Government Portal",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <div className="flex">
          <main className="flex-1 pr-64">{children}</main>
          <Sidebar />
        </div>
        <Footer />
      </body>
    </html>
  )
}

