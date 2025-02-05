"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"

type Visitor = {
  id: string
  name: string
  purpose: string
  host: string
  date: string
  status: "مقبول" | "قيد الانتظار" | "مرفوض"
}

const visitors: Visitor[] = [
  {
    id: "1",
    name: "أحمد محمد",
    purpose: "اجتماع عمل",
    host: "سارة الجابري",
    date: "2024-02-05",
    status: "مقبول",
  },
  {
    id: "2",
    name: "عبدالله العمري",
    purpose: "مقابلة",
    host: "محمد علي",
    date: "2024-02-05",
    status: "قيد الانتظار",
  },
  {
    id: "3",
    name: "ليلى أحمد",
    purpose: "صيانة",
    host: "أحمد حسن",
    date: "2024-02-05",
    status: "مرفوض",
  },
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
      case "مقبول":
        return "bg-green-100 text-green-800"
      case "قيد الانتظار":
        return "bg-yellow-100 text-yellow-800"
      case "مرفوض":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="overflow-x-auto" dir="rtl">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-4 text-right">
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
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">اسم الزائر</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">الغرض من الزيارة</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">المضيف</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">التاريخ</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">الحالة</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">الإجراءات</th>
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

