export interface MaintenanceRequest {
    id: string;
    equipmentType: 'AC' | 'Elevator' | 'Electrical' | 'Furniture' | 'FireSafety' | 'Other';
    location: string;
    building: string;
    floor: string;
    department: string;
    officeNumber: string;
    status: 'Under Review' | 'In Progress' | 'Completed';
    statusHistory: {
      status: 'Under Review' | 'In Progress' | 'Completed';
      date: string;
    }[];
    date: string;
    details: Record<string, string>;
    description: string;
  }
  
  export interface FilterOptions {
    equipmentType: string;
    location: string;
    status: string;
  }