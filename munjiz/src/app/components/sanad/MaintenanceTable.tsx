"use client"

import { useState } from "react"
import { MaintenanceRequest } from '@/app/types/sanad';
import { X, Clock, MapPin, PenTool as Tool, ClipboardList } from 'lucide-react';

interface MaintenanceTableProps {
  requests: MaintenanceRequest[];
  onCancel: (id: string) => void;
}

export function MaintenanceTable({ requests, onCancel }: MaintenanceTableProps) {
  const [selectedRequest, setSelectedRequest] = useState<MaintenanceRequest | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const getArabicEquipmentType = (type: string) => {
    switch (type) {
      case 'AC':
        return 'مكيف هواء';
      case 'Elevator':
        return 'مصعد';
      case 'Electrical':
        return 'نظام كهربائي';
      case 'Furniture':
        return 'أثاث مكتبي';
      case 'FireSafety':
        return 'معدات السلامة من الحريق';
      default:
        return 'أخرى';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-800 bg-green-50 border-green-200';
      case 'In Progress':
        return 'text-blue-800 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-800 bg-gray-50 border-gray-200';
    }
  };

  const getArabicStatus = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'مكتمل';
      case 'In Progress':
        return 'قيد التنفيذ';
      default:
        return 'قيد المراجعة';
    }
  };

  const renderEquipmentDetails = (request: MaintenanceRequest) => {
    switch (request.equipmentType) {
      case 'AC':
        return (
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">الشركة المصنعة</p>
              <p className="mt-1">{request.details.brand}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">الحجم</p>
              <p className="mt-1">{request.details.size} وحدة</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">النوع</p>
              <p className="mt-1">
                {request.details.type === 'Split' ? 'سبليت' :
                 request.details.type === 'Window' ? 'شباك' :
                 request.details.type === 'Central' ? 'مركزي' :
                 request.details.type === 'Cassette' ? 'كاسيت' : ''}
              </p>
            </div>
          </div>
        );
      case 'Elevator':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">الشركة المصنعة</p>
              <p className="mt-1">{request.details.manufacturer}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">نوع المصعد</p>
              <p className="mt-1">
                {request.details.liftType === 'Passenger' ? 'ركاب' :
                 request.details.liftType === 'Cargo' ? 'بضائع' :
                 request.details.liftType === 'Service' ? 'خدمة' : ''}
              </p>
            </div>
          </div>
        );
      case 'Electrical':
        return (
          <div>
            <p className="text-sm font-medium text-gray-500">نوع المعدات</p>
            <p className="mt-1">
              {request.details.type === 'Lighting' ? 'إضاءة' :
               request.details.type === 'Wiring' ? 'أسلاك' :
               request.details.type === 'Breaker' ? 'قاطع كهربائي' :
               request.details.type === 'Panel' ? 'لوحة كهربائية' : ''}
            </p>
          </div>
        );
      case 'Furniture':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">نوع الأثاث</p>
              <p className="mt-1">
                {request.details.type === 'Chair' ? 'كرسي' :
                 request.details.type === 'Desk' ? 'مكتب' :
                 request.details.type === 'Cabinet' ? 'خزانة' : ''}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">المادة</p>
              <p className="mt-1">
                {request.details.material === 'Wood' ? 'خشب' :
                 request.details.material === 'Metal' ? 'معدن' :
                 request.details.material === 'Plastic' ? 'بلاستيك' : ''}
              </p>
            </div>
          </div>
        );
      case 'FireSafety':
        return (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">نوع المعدات</p>
              <p className="mt-1">
                {request.details.type === 'Extinguisher' ? 'طفاية حريق' :
                 request.details.type === 'Alarm' ? 'جرس إنذار' :
                 request.details.type === 'Sprinkler' ? 'رشاش مياه' : ''}
              </p>
            </div>
            {request.details.brand && (
              <div>
                <p className="text-sm font-medium text-gray-500">الشركة المصنعة</p>
                <p className="mt-1">{request.details.brand}</p>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">نوع المعدات</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الموقع</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">التاريخ</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request) => (
              <tr 
                key={request.id} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedRequest(request)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-right">{getArabicEquipmentType(request.equipmentType)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{request.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatDate(request.date)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(request.status)}`}>
                    {getArabicStatus(request.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Tool className="h-5 w-5 text-gray-500" />
                <h3 className="text-lg font-medium">تفاصيل طلب الصيانة</h3>
              </div>
              <button 
                onClick={() => setSelectedRequest(null)} 
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Current Status */}
              <div className="flex items-center justify-between">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedRequest.status)}`}>
                  {getArabicStatus(selectedRequest.status)}
                </span>
                <span className="text-sm text-gray-500">
                  {formatDate(selectedRequest.date)}
                </span>
              </div>

              {/* Equipment Details */}
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-4">
                  <Tool className="h-5 w-5 text-gray-500" />
                  <h4 className="font-medium">معلومات المعدات</h4>
                </div>
                {renderEquipmentDetails(selectedRequest)}
              </div>

              {/* Location Details */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <h4 className="font-medium">معلومات الموقع</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">المبنى</p>
                    <p className="mt-1">{selectedRequest.building}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">الطابق</p>
                    <p className="mt-1">{selectedRequest.floor}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">القسم</p>
                    <p className="mt-1">{selectedRequest.department}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">رقم المكتب</p>
                    <p className="mt-1">{selectedRequest.officeNumber}</p>
                  </div>
                </div>
              </div>

              {/* Problem Description */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <ClipboardList className="h-5 w-5 text-gray-500" />
                  <h4 className="font-medium">وصف المشكلة</h4>
                </div>
                <p className="text-gray-700">{selectedRequest.description}</p>
              </div>

              {/* Status History */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <h4 className="font-medium">سجل الحالة</h4>
                </div>
                <div className="space-y-4">
                  {selectedRequest.statusHistory.map((history, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(history.status)}`}>
                        {getArabicStatus(history.status)}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(history.date)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {selectedRequest.status === 'Under Review' && (
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
                <button
                  onClick={() => {
                    onCancel(selectedRequest.id);
                    setSelectedRequest(null);
                  }}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  إلغاء الطلب
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}