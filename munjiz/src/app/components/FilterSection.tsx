"use client"

import { useState } from "react"

export function FilterSection() {
  const [filters, setFilters] = useState({
    equipmentType: '',
    status: '',
    location: ''
  });

  return (
    <div className="flex items-center gap-4">
      <select
        value={filters.equipmentType}
        onChange={(e) => setFilters({ ...filters, equipmentType: e.target.value })}
        className="rounded-lg border border-gray-200 text-gray-700 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D4B4D] focus:border-transparent"
      >
        <option value="">كل أنواع المعدات</option>
        <option value="AC">مكيف هواء</option>
        <option value="Elevator">مصعد</option>
        <option value="Electrical">نظام كهربائي</option>
        <option value="Furniture">أثاث مكتبي</option>
        <option value="FireSafety">معدات السلامة من الحريق</option>
        <option value="Other">أخرى</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        className="rounded-lg border border-gray-200 text-gray-700 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D4B4D] focus:border-transparent"
      >
        <option value="">كل الحالات</option>
        <option value="Under Review">قيد المراجعة</option>
        <option value="In Progress">قيد التنفيذ</option>
        <option value="Completed">مكتمل</option>
      </select>

      <input
        type="text"
        placeholder="البحث حسب الموقع..."
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className="rounded-lg border border-gray-200 text-gray-700 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D4B4D] focus:border-transparent"
      />
    </div>
  );
}