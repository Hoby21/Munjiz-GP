"use client"
import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Define pages where Sidebar should be hidden
  const hideSidebarRoutes = ["/login", "/Khadoom"]

  return (
    <div className="flex w-full">
      {!hideSidebarRoutes.includes(pathname) && <Sidebar />}
      <main
        className={`flex-1 ${!hideSidebarRoutes.includes(pathname) ? "pl-90" : "pl-0"}`}
        style={{ width: "100%" }}
      >
        {children}
      </main>
    </div>
  )
}
