"use client"

import { useState } from "react";
import { MaintenanceTable } from '@/app/components/MaintenanceTable';
import { FilterSection } from '@/app/components/FilterSection';
import { NewRequestForm } from '@/app/components/NewRequestForm';
import { MaintenanceRequest } from '@/app/types/sanad';

// Sample data
const sampleRequests: MaintenanceRequest[] = [
  {
    id: '1',
    equipmentType: 'AC',
    location: 'مبنى الإدارة',
    building: 'مبنى الإدارة',
    floor: '2',
    department: 'تقنية المعلومات',
    officeNumber: '204',
    status: 'Completed',
    date: '2024-02-01',
    description: 'مكيف لا يعمل',
    details: {
      brand: 'LG',
      size: '24,000',
      type: 'Split'
    },
    statusHistory: [
      { status: 'Under Review', date: '2024-02-01T08:00:00Z' },
      { status: 'In Progress', date: '2024-02-01T10:00:00Z' },
      { status: 'Completed', date: '2024-02-01T14:00:00Z' }
    ]
  },
  {
    id: '2',
    equipmentType: 'Elevator',
    location: 'المبنى الرئيسي',
    building: 'المبنى الرئيسي',
    floor: '1',
    department: 'الاستقبال',
    officeNumber: '101',
    status: 'In Progress',
    date: '2024-02-15',
    description: 'صوت غير طبيعي في المصعد',
    details: {
      manufacturer: 'Otis',
      liftType: 'Passenger'
    },
    statusHistory: [
      { status: 'Under Review', date: '2024-02-15T09:00:00Z' },
      { status: 'In Progress', date: '2024-02-15T11:30:00Z' }
    ]
  },
  {
    id: '3',
    equipmentType: 'FireSafety',
    location: 'مبنى المختبرات',
    building: 'مبنى المختبرات',
    floor: '3',
    department: 'المختبر الكيميائي',
    officeNumber: '305',
    status: 'Under Review',
    date: '2024-02-20',
    description: 'طفاية حريق تحتاج إلى صيانة',
    details: {
      type: 'Extinguisher',
      brand: 'FireMax'
    },
    statusHistory: [
      { status: 'Under Review', date: '2024-02-20T13:15:00Z' }
    ]
  }
];

function App() {
  const [showNewRequest, setShowNewRequest] = useState(false);
  const [requests, setRequests] = useState<MaintenanceRequest[]>(sampleRequests);

  const handleNewRequest = (request: Partial<MaintenanceRequest>) => {
    const newRequest = {
      ...request,
      id: Math.random().toString(36).substr(2, 9),
      location: request.building,
      date: new Date().toISOString().split('T')[0],
      status: 'Under Review' as const,
      statusHistory: [
        { status: 'Under Review' as const, date: new Date().toISOString() }
      ]
    } as MaintenanceRequest;
    
    setRequests([newRequest, ...requests]);
    setShowNewRequest(false);
  };

  const handleCancelRequest = (id: string) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              {showNewRequest ? 'خدمة سند - طلب صيانة جديد' : 'خدمة سند - طلبات الصيانة'}
            </h1>
          </div>
        </div>

        {!showNewRequest ? (
          <>
            <div className="mb-6 flex justify-between">
              <button
                onClick={() => setShowNewRequest(true)}
                className="px-4 py-2 bg-[#2D4B4D] text-white rounded-lg font-medium hover:bg-[#1a2e2f]"
              >
                تقديم طلب جديد
              </button>
              <FilterSection />
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold p-4 border-b border-gray-200">سجل الطلبات</h2>
              <MaintenanceTable 
                requests={requests}
                onCancel={handleCancelRequest}
              />
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <NewRequestForm
              onSubmit={handleNewRequest}
              onCancel={() => setShowNewRequest(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;