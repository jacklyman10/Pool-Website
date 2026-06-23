export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  zipCode: string;
  poolType: 'chlorine' | 'saltwater' | 'ozone' | 'commercial';
  message?: string;
  status: 'pending' | 'contacted' | 'completed';
  createdAt: string;
}

export interface PoolMetrics {
  ph: number;
  chlorine: number; // ppm
  alkalinity: number; // ppm
  saltLevel?: number; // ppm
  waterTemp: number; // F
  filterPressure: number; // psi
}

export interface ServiceReport {
  id: string;
  date: string;
  poolName: string;
  neighborhood: string;
  technician: {
    name: string;
    certId: string;
    avatar: string;
  };
  metrics: PoolMetrics;
  checklist: {
    skimmed: boolean;
    brushed: boolean;
    vacuumed: boolean;
    basketCleaned: boolean;
    filterBackwashed: boolean;
    equipmentChecked: boolean;
  };
  notes: string;
  status: 'Perfect' | 'Balanced' | 'Adjusted';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string; // e.g. "Silverleaf, Scottsdale"
  date: string;
  quote: string;
  highlightedPhrase: string; // inline highlight
  rating: number;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlightText: string;
  features: string[];
}
