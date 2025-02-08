import React from 'react';
import { FilterOptions } from '@/app/types/sanad';

export function FilterSection() {
  return (
    <div className="flex items-center gap-4">
      <select
        className="rounded-lg border-gray-300 text-gray-700"
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
        className="rounded-lg border-gray-300 text-gray-700"
      >
        <option value="">كل الحالات</option>
        <option value="Under Review">قيد المراجعة</option>
        <option value="In Progress">قيد التنفيذ</option>
        <option value="Completed">مكتمل</option>
      </select>

      <input
        type="text"
        placeholder="البحث حسب الموقع..."
        className="rounded-lg border-gray-300"
      />
    </div>
  );
}