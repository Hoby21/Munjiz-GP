import { Search, Filter, Plus } from "lucide-react"
import VisitorTable from "../components/VisitorTable"

export default function WusoolPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Wusool</h1>
        <p className="text-gray-600">Visitor access management within the organization.</p>
      </div>

      {/* Action Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search visitors..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            {/* Filter Button */}
            <button className="flex items-center px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>
          </div>
          {/* Add Visitor Button */}
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Plus className="w-5 h-5 mr-2" />
            Add Visitor
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm">
        <VisitorTable />
      </div>
    </div>
  )
}

