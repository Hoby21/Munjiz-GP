"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  const [phoneNumber, setPhoneNumber] = useState("0501234567")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", phoneNumber)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8" dir="rtl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">الإعدادات</h1>
        <p className="text-gray-600">إدارة معلومات حسابك الشخصي</p>
      </div>

      {/* Settings Form */}
      <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">الاسم الأول</Label>
              <Input id="firstName" value="محمد" className="bg-gray-50 text-gray-500" disabled />
            </div>
            <div>
              <Label htmlFor="lastName">اسم العائلة</Label>
              <Input id="lastName" value="العمري" className="bg-gray-50 text-gray-500" disabled />
            </div>
          </div>

          <div>
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value="mohammed.alomari@example.com"
              className="bg-gray-50 text-gray-500"
              disabled
            />
            <p className="text-sm text-gray-500 mt-1">للتواصل مع الدعم الفني لتغيير البريد الإلكتروني</p>
          </div>

          <div>
            <Label htmlFor="phone">رقم الجوال</Label>
            <Input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="أدخل رقم الجوال"
              className="ltr text-left"
              dir="ltr"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              حفظ التغييرات
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

