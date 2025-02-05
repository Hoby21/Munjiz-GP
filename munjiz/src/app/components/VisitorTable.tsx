"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"

type Visitor = {
  id: string
  name: string
  purpose: string
  host: string
  date: string
  status: "Approved" | "Pending" | "Rejected"
}

const visitors: Visitor[] = [
  {
    id: "1",
    name: "Ahmed Mohammed",
    purpose: "Business Meeting",
    host: "Sarah Johnson",
    date: "2024-02-05",
    status: "Approved",
  },
  {
    id: "2",
    name: "John Smith",
    purpose: "Interview",
    host: "Mohammed Ali",
    date: "2024-02-05",
    status: "Pending",
  },
  {
    id: "3",
    name: "Lisa Anderson",
    purpose: "Maintenance",
    host: "Ahmed Hassan",
    date: "2024-02-05",
    status: "Rejected",
  },
  // Add more visitors as needed
]

export default function VisitorTable() {
  const [selectedVisitors, setSelectedVisitors] = useState<string[]>([])

  const toggleVisitor = (visitorId: string) => {
    setSelectedVisitors((prev) =>
      prev.includes(visitorId) ? prev.filter((id) => id !== visitorId) : [...prev, visitorId],
    )
  }

  const getStatusColor = (status: Visitor["status"]) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-4 text-left">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                onChange={() => {
                  const allIds = visitors.map((v) => v.id)
                  setSelectedVisitors((prev) => (prev.length === visitors.length ? [] : allIds))
                }}
                checked={selectedVisitors.length === visitors.length}
              />
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Visitor Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Host</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {visitors.map((visitor) => (
            <tr key={visitor.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  checked={selectedVisitors.includes(visitor.id)}
                  onChange={() => toggleVisitor(visitor.id)}
                />
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{visitor.name}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{visitor.purpose}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{visitor.host}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{visitor.date}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(visitor.status)}`}
                >
                  {visitor.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

