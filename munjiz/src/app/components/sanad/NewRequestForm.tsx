"use client"

import { useState } from "react"
import { MaintenanceRequest } from '@/app/types/sanad';
import { ArrowRight } from 'lucide-react';

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

const selectStyles = "w-full rounded-lg border border-gray-200 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2D4B4D] focus:border-transparent";
const selectErrorStyles = "w-full rounded-lg border border-red-500 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent";

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

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate equipment type
    if (!formData.equipmentType) {
      newErrors.equipmentType = 'يرجى اختيار نوع المعدات';
    }

    // Validate equipment details based on type
    if (formData.equipmentType === 'AC') {
      if (!formData.details.brand) newErrors.brand = 'يرجى اختيار الشركة المصنعة';
      if (!formData.details.size) newErrors.size = 'يرجى اختيار الحجم';
      if (!formData.details.type) newErrors.type = 'يرجى اختيار النوع';
    } else if (formData.equipmentType === 'Elevator') {
      if (!formData.details.manufacturer) newErrors.manufacturer = 'يرجى اختيار الشركة المصنعة';
      if (!formData.details.liftType) newErrors.liftType = 'يرجى اختيار نوع المصعد';
    } else if (formData.equipmentType === 'FireSafety') {
      if (!formData.details.type) newErrors.type = 'يرجى اختيار نوع المعدات';
      if (!formData.details.brand) newErrors.brand = 'يرجى إدخال الشركة المصنعة';
    }

    // Validate other mandatory fields
    if (!formData.description.trim()) {
      newErrors.description = 'يرجى وصف المشكلة';
    }
    if (!formData.building.trim()) {
      newErrors.building = 'يرجى إدخال المبنى';
    }
    if (!formData.floor.trim()) {
      newErrors.floor = 'يرجى إدخال الطابق';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const renderSpecialSections = () => {
    switch (formData.equipmentType) {
      case 'AC':
        return (
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-4">تفاصيل المكيف</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الشركة المصنعة<span className="text-red-500">*</span>
                </label>
                <select
                  className={errors.brand ? selectErrorStyles : selectStyles}
                  onChange={(e) => setFormData({...formData, details: {...formData.details, brand: e.target.value}})}
                  required
                >
                  <option value="">اختر الشركة المصنعة</option>
                  <option value="LG">LG</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Carrier">Carrier</option>
                </select>
                {errors.brand && <p className="mt-1 text-sm text-red-500">{errors.brand}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الحجم<span className="text-red-500">*</span>
                </label>
                <select
                  className={errors.size ? selectErrorStyles : selectStyles}
                  onChange={(e) => setFormData({...formData, details: {...formData.details, size: e.target.value}})}
                  required
                >
                  <option value="">اختر الحجم</option>
                  <option value="18000">18,000 وحدة</option>
                  <option value="22000">22,000 وحدة</option>
                  <option value="24000">24,000 وحدة</option>
                  <option value="30000">30,000 وحدة</option>
                </select>
                {errors.size && <p className="mt-1 text-sm text-red-500">{errors.size}</p>}
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  النوع<span className="text-red-500">*</span>
                </label>
                <select
                  className={errors.type ? selectErrorStyles : selectStyles}
                  onChange={(e) => setFormData({...formData, details: {...formData.details, type: e.target.value}})}
                  required
                >
                  <option value="">اختر النوع</option>
                  <option value="Window">شباك</option>
                  <option value="Split">سبليت</option>
                  <option value="Central">مركزي</option>
                  <option value="Cassette">كاسيت</option>
                </select>
                {errors.type && <p className="mt-1 text-sm text-red-500">{errors.type}</p>}
              </div>
            </div>
          </div>
        );
      case 'Electrical':
        return (
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-4">تفاصيل النظام الكهربائي</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نوع المعدات<span className="text-red-500">*</span>
              </label>
              <select
                className={errors.type ? selectErrorStyles : selectStyles}
                onChange={(e) => setFormData({...formData, details: {...formData.details, type: e.target.value}})}
                required
              >
                <option value="">اختر نوع المعدات</option>
                <option value="Lighting">إضاءة</option>
                <option value="Wiring">أسلاك</option>
                <option value="Breaker">قاطع كهربائي</option>
                <option value="Panel">لوحة كهربائية</option>
              </select>
              {errors.type && <p className="mt-1 text-sm text-red-500">{errors.type}</p>}
            </div>
          </div>
        );
      case 'Furniture':
        return (
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-4">تفاصيل الأثاث المكتبي</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نوع الأثاث<span className="text-red-500">*</span>
                </label>
                <select
                  className={errors.type ? selectErrorStyles : selectStyles}
                  onChange={(e) => setFormData({...formData, details: {...formData.details, type: e.target.value}})}
                  required
                >
                  <option value="">اختر نوع الأثاث</option>
                  <option value="Chair">كرسي</option>
                  <option value="Desk">مكتب</option>
                  <option value="Cabinet">خزانة</option>
                </select>
                {errors.type && <p className="mt-1 text-sm text-red-500">{errors.type}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  المادة<span className="text-red-500">*</span>
                </label>
                <select
                  className={errors.material ? selectErrorStyles : selectStyles}
                  onChange={(e) => setFormData({...formData, details: {...formData.details, material: e.target.value}})}
                  required
                >
                  <option value="">اختر نوع المادة</option>
                  <option value="Wood">خشب</option>
                  <option value="Metal">معدن</option>
                  <option value="Plastic">بلاستيك</option>
                </select>
                {errors.material && <p className="mt-1 text-sm text-red-500">{errors.material}</p>}
              </div>
            </div>
          </div>
        );
      case 'FireSafety':
        return (
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-lg font-medium text-gray-900 mb-4">تفاصيل معدات السلامة</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نوع المعدات<span className="text-red-500">*</span>
              </label>
              <select
                className={errors.type ? selectErrorStyles : selectStyles}
                onChange={(e) => setFormData({...formData, details: {...formData.details, type: e.target.value}})}
                required
              >
                <option value="">اختر النوع</option>
                <option value="Extinguisher">طفاية حريق</option>
                <option value="Alarm">جرس إنذار</option>
                <option value="Sprinkler">رشاش مياه</option>
              </select>
              {errors.type && <p className="mt-1 text-sm text-red-500">{errors.type}</p>}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Convert FormData to Partial<MaintenanceRequest>
      const requestData: Partial<MaintenanceRequest> = {
        ...formData,
        equipmentType: formData.equipmentType as MaintenanceRequest['equipmentType']
      };
      onSubmit(requestData);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onCancel}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowRight className="h-5 w-5" />
          <span>العودة</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          {/* Equipment Type Section */}
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">معلومات المعدات</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نوع المعدات<span className="text-red-500">*</span>
                </label>
                <select
                  className={errors.equipmentType ? selectErrorStyles : selectStyles}
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
                {errors.equipmentType && <p className="mt-1 text-sm text-red-500">{errors.equipmentType}</p>}
              </div>

              {renderSpecialSections()}
            </div>
          </div>

          {/* Problem Description Section */}
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">وصف المشكلة</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                وصف المشكلة<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                className={errors.description ? selectErrorStyles : selectStyles}
                placeholder="صف المشكلة التي تواجهها"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              />
              {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
            </div>
          </div>

          {/* Location Section */}
          <div className="border border-gray-200 rounded-lg p-4 bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">معلومات الموقع</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  المبنى<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={errors.building ? selectErrorStyles : selectStyles}
                  placeholder="أدخل اسم/رقم المبنى"
                  value={formData.building}
                  onChange={(e) => setFormData({...formData, building: e.target.value})}
                  required
                />
                {errors.building && <p className="mt-1 text-sm text-red-500">{errors.building}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الطابق<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={errors.floor ? selectErrorStyles : selectStyles}
                  placeholder="أدخل رقم الطابق"
                  value={formData.floor}
                  onChange={(e) => setFormData({...formData, floor: e.target.value})}
                  required
                />
                {errors.floor && <p className="mt-1 text-sm text-red-500">{errors.floor}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">القسم</label>
                <input
                  type="text"
                  className={selectStyles}
                  placeholder="أدخل اسم القسم"
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">رقم المكتب</label>
                <input
                  type="text"
                  className={selectStyles}
                  placeholder="أدخل رقم المكتب"
                  value={formData.officeNumber}
                  onChange={(e) => setFormData({...formData, officeNumber: e.target.value})}
                />
              </div>
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