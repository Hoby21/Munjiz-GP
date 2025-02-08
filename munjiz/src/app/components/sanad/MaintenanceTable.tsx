"use client"

import { useState } from "react"
import { MaintenanceRequest } from '@/app/types/sanad';
import { X } from 'lucide-react';

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
              <p className="mt-1">{request.details.size} طن</p>
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
            <div>
              <p className="text-sm font-medium text-gray-500">الشركة المصنعة</p>
              <p className="mt-1">{request.details.brand}</p>
            </div>
          </div>
        );
      default:
        return null;
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

  return (
    <div>
      <div className="overflow-x-auto">
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
                    {request.status === 'Completed' ? 'مكتمل' :
                     request.status === 'In Progress' ? 'قيد التنفيذ' :
                     'قيد المراجعة'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">تفاصيل الطلب</h3>
              <button onClick={() => setSelectedRequest(null)} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Equipment Details */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <h4 className="font-medium mb-4">معلومات المعدات</h4>
                {renderEquipmentDetails(selectedRequest)}
              </div>

              {/* Location Details */}
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">معلومات الموقع</h4>
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
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">وصف المشكلة</h4>
                <p className="text-gray-700">{selectedRequest.description}</p>
              </div>

              {/* Status History */}
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-4">سجل الحالة</h4>
                <div className="space-y-2">
                  {selectedRequest.statusHistory.map((history, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className={`px-2 py-1 rounded-full ${getStatusColor(history.status)}`}>
                        {history.status === 'Completed' ? 'مكتمل' :
                         history.status === 'In Progress' ? 'قيد التنفيذ' :
                         'قيد المراجعة'}
                      </span>
                      <span className="text-gray-500">{formatDate(history.date)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {selectedRequest.status === 'Under Review' && (
              <div className="mt-6">
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