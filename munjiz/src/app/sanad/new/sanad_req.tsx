import { NewRequestForm } from '@/app/components/sanad/NewRequestForm';
import { MaintenanceRequest } from '@/app/types/sanad';

export default function NewMaintenanceRequestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              خدمة سند - طلب صيانة جديد
            </h1>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <NewRequestForm onSubmit={function (request: Partial<MaintenanceRequest>): void {
            throw new Error('Function not implemented.');
          } } onCancel={function (): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
      </div>
    </div>
  );
}