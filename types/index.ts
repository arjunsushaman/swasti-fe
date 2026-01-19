import type { BlocksContent } from '@strapi/blocks-react-renderer';

// Strapi response wrapper types
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
}

export interface StrapiCollectionResponse<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Media type
export interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText?: string;
      width?: number;
      height?: number;
      formats?: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
      };
    };
  } | null;
}

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
export type ServiceType = 'general' | 'specialty' | 'lab' | 'neuro-lab' | 'physio' | 'home-care';

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
  specialty: DoctorSpecialty;
  specialtyLabel: string;
  bio?: string;
  availability: string;
  image?: StrapiMedia;
  imageUrl?: string; // Transformed URL from image.data.attributes.url
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

// Blog
export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: StrapiMedia;
  author: string;
  publicationDate: string;
}

// Blog post for component consumption (transformed from Blog)
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string | BlocksContent; // Support both HTML strings and Strapi blocks
  coverImage?: string; // String URL instead of StrapiMedia
  author: string;
  publicationDate: string;
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
