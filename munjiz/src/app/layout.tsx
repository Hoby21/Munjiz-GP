import "./globals.css"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import Footer from "./components/Footer"
import LayoutWrapper from "./components/LayoutWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Digital Government Authority",
  description: "Digital Government Authority Documentation",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Footer />
      </body>
    </html>
  )
}
