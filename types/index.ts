// Clinic Info (Single Type)
export interface ClinicInfo {
  mainLine: string;
  subLine: string;
  introText: string;
  phone: string;
  whatsappLink: string;
  locationLink: string;
  streetAddress: string;
  instagramLink: string;
  facebookLink: string;
  clinicHours: string;
}

// Box (Value Propositions)
export interface Box {
  id: number;
  icon: string;
  title: string;
  description: string;
  order: number;
}

// Service Types
export type ServiceType = 'general' | 'speciality' | 'lab' | 'neuro-lab' | 'physio' | 'home-care';

export interface Service {
  id: number;
  icon: string;
  name: string;
  slug: string;
  description: string;
  hours?: string;
  serviceType: ServiceType;
  listItems?: string[];
  order: number;
}

// Doctor Specialties
export type DoctorSpecialty =
  | 'neurology'
  | 'orthopaedics'
  | 'paediatrics'
  | 'pulmonology'
  | 'general-practice';

export interface Doctor {
  id?: number;
  name: string;
  qualifications: string;
  speciality: DoctorSpecialty;
  specialtyLabel: string;
  bio?: string;
  availability: string;
  imageUrl?: string;
  featured: boolean;
  order?: number;
}

// Review
export interface Review {
  id: number;
  reviewerName: string;
  rating: number;
  reviewDate: string;
  reviewText: string;
  source: string;
  verified: boolean;
  published: boolean;
}

// Booking Form
export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  doctor?: string;
  message?: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Carousel
export interface CarouselConfig {
  itemsPerView: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap: number;
  dragEnabled: boolean;
  showDots: boolean;
  showArrows: boolean;
  loop: boolean;
}

export interface CarouselState {
  currentIndex: number;
  totalItems: number;
  itemsPerView: number;
  isDragging: boolean;
}
