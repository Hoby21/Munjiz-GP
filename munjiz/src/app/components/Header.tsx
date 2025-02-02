// import { Search, Cloud, ChevronDown } from "lucide-react"
// import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* <div className="container mx-auto px-4">

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1">
              <span>Login</span>
            </button>
            <button className="flex items-center space-x-1">
              <span>عربي</span>
            </button>
            <button className="flex items-center space-x-1">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
          <nav className="flex items-center space-x-8">
            {[1, 2, 3, 4, 5, 6, 7].reverse().map((item) => (
              <button key={item} className="flex items-center text-gray-700">
                <span>Item {item}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            ))}
          </nav>
          <div className="flex items-center">
            <Image src="/placeholder.svg" alt="Platform Logo" width={48} height={48} />
          </div>
        </div>
      </div> */}
    </header>
  )
}

