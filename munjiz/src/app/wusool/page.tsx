import { Search, Filter, Plus } from "lucide-react"
import VisitorTable from "../components/VisitorTable"
import Link from "next/link"

export default function WusoolPage() {
  return (
    
    <div className="min-h-screen bg-gray-50 pr-80 w-full" dir="rtl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">وصول</h1>
        <p className="text-gray-600">إدارة وصول الزوار داخل المنظمة</p>
      </div>

      {/* Action Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="البحث عن الزوار..."
                className="pr-10 pl-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
            {/* Filter Button */}
            <button className="flex items-center px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50 mr-4">
              <Filter className="w-5 h-5 ml-2" />
              تصفية
            </button>
          </div>
          {/* Add Visitor Button */}
          <Link href="/registrationform">
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Plus className="w-5 h-5 ml-2" />
            إضافة زائر
          </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm">
        <VisitorTable />
      </div>
    </div>
  )
}

