"use client"

import { useState } from "react"
import { MaintenanceRequest } from '@/app/types/sanad';
import { ArrowLeft } from 'lucide-react';

interface NewRequestFormProps {
  onSubmit: (request: Partial<MaintenanceRequest>) => void;
  onCancel: () => void;
}

type FormData = {
  equipmentType: MaintenanceRequest['equipmentType'] | '';
  building: string;
  floor: string;
  department: string;
  officeNumber: string;
  description: string;
  details: Record<string, string>;
}

export function NewRequestForm({ onSubmit, onCancel }: NewRequestFormProps) {
  const [formData, setFormData] = useState<FormData>({
    equipmentType: '',
    building: '',
    floor: '',
    department: '',
    officeNumber: '',
    description: '',
    details: {}
  });

  const renderSpecialSections = () => {
    switch (formData.equipmentType) {
      case 'AC':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الشركة المصنعة</label>
              <select
                className="w-full rounded-lg border-gray-300"
                onChange={(e) => setFormData({...formData, details: {...formData.details, brand: e.target.value}})}
              >
                <option value="">اختر الشركة المصنعة</option>
                <option value="LG">LG</option>
                <option value="Samsung">Samsung</option>
                <option value="Carrier">Carrier</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الحجم</label>
              <select
                className="w-full rounded-lg border-gray-300"
                onChange={(e) => setFormData({...formData, details: {...formData.details, size: e.target.value}})}
              >
                <option value="">اختر الحجم</option>
                <option value="1.5">1.5 طن</option>
                <option value="2">2 طن</option>
                <option value="3">3 طن</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">النوع</label>
              <select
                className="w-full rounded-lg border-gray-300"
                onChange={(e) => setFormData({...formData, details: {...formData.details, type: e.target.value}})}
              >
                <option value="">اختر النوع</option>
                <option value="Window">شباك</option>
                <option value="Split">سبليت</option>
                <option value="Central">مركزي</option>
                <option value="Cassette">كاسيت</option>
              </select>
            </div>
          </div>
        );
      case 'Elevator':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الشركة المصنعة</label>
              <select
                className="w-full rounded-lg border-gray-300"
                onChange={(e) => setFormData({...formData, details: {...formData.details, manufacturer: e.target.value}})}
              >
                <option value="">اختر الشركة المصنعة</option>
                <option value="Otis">Otis</option>
                <option value="Schindler">Schindler</option>
                <option value="Kone">Kone</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نوع المصعد</label>
              <select
                className="w-full rounded-lg border-gray-300"
                onChange={(e) => setFormData({...formData, details: {...formData.details, liftType: e.target.value}})}
              >
                <option value="">اختر النوع</option>
                <option value="Passenger">ركاب</option>
                <option value="Cargo">بضائع</option>
                <option value="Service">خدمة</option>
              </select>
            </div>
          </div>
        );
      case 'FireSafety':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نوع المعدات</label>
              <select
                className="w-full rounded-lg border-gray-300"
                onChange={(e) => setFormData({...formData, details: {...formData.details, type: e.target.value}})}
              >
                <option value="">اختر النوع</option>
                <option value="Extinguisher">طفاية حريق</option>
                <option value="Alarm">جرس إنذار</option>
                <option value="Sprinkler">رشاش مياه</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الشركة المصنعة</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300"
                placeholder="أدخل اسم الشركة المصنعة"
                onChange={(e) => setFormData({...formData, details: {...formData.details, brand: e.target.value}})}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.equipmentType === '') return;
    
    const request: Partial<MaintenanceRequest> = {
      ...formData,
      equipmentType: formData.equipmentType
    };
    onSubmit(request);
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onCancel}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>العودة</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">معلومات المعدات</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">نوع المعدات</label>
            <select
              className="w-full rounded-lg border-gray-300"
              value={formData.equipmentType}
              onChange={(e) => setFormData({...formData, equipmentType: e.target.value as MaintenanceRequest['equipmentType'] | '', details: {}})}
              required
            >
              <option value="">اختر نوع المعدات</option>
              <option value="AC">مكيف الهواء</option>
              <option value="Elevator">المصعد</option>
              <option value="Electrical">النظام الكهربائي</option>
              <option value="Furniture">الأثاث المكتبي</option>
              <option value="FireSafety">معدات السلامة من الحريق</option>
              <option value="Other">أخرى</option>
            </select>
          </div>

          {renderSpecialSections()}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">وصف المشكلة</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border-gray-300"
              placeholder="صف المشكلة التي تواجهها"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">المبنى</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300"
                placeholder="أدخل اسم/رقم المبنى"
                value={formData.building}
                onChange={(e) => setFormData({...formData, building: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الطابق</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300"
                placeholder="أدخل رقم الطابق"
                value={formData.floor}
                onChange={(e) => setFormData({...formData, floor: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">القسم</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300"
                placeholder="أدخل اسم القسم"
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">رقم المكتب</label>
              <input
                type="text"
                className="w-full rounded-lg border-gray-300"
                placeholder="أدخل رقم المكتب"
                value={formData.officeNumber}
                onChange={(e) => setFormData({...formData, officeNumber: e.target.value})}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            إلغاء
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#2D4B4D] text-white rounded-lg hover:bg-[#1a2e2f]"
          >
            تقديم الطلب
          </button>
        </div>
      </form>
    </div>
  );
}