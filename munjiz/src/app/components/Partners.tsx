import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Partners() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-right mb-8">Partner Section</h2>
        <div className="relative">
          <div className="flex justify-center items-center space-x-8">
            {Array(9)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="w-32 h-32 border rounded-lg flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="Platform Logo" width={48} height={48} className="opacity-60" />
                </div>
              ))}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

