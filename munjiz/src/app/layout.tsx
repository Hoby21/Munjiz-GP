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
          <Sidebar />
          <main className="flex-1 pl-64">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}

