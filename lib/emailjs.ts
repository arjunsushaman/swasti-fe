import emailjs from '@emailjs/browser';
import { BookingFormData } from '@/types';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export interface EmailJSResponse {
  success: boolean;
  message: string;
}

// Map service codes to readable labels
const SERVICE_LABELS: Record<string, string> = {
  'general': 'Family Clinic & General Practice',
  'neurology': 'Neurology Consultation',
  'orthopaedics': 'Orthopaedics Consultation',
  'paediatrics': 'Paediatrics Consultation',
  'pulmonology': 'Pulmonology Consultation',
  'general-practice': 'General Practice Consultation',
  'lab': 'Laboratory Services',
  'neuro-lab': 'Neuro Diagnostic Lab (NCS, EEG)',
  'physio': 'Physiotherapy & Rehabilitation',
  'home-care': 'Home Care Services',
};

export async function sendBookingEmail(data: BookingFormData): Promise<EmailJSResponse> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS configuration is missing');
    return {
      success: false,
      message: 'Email service is not configured. Please contact us directly.',
    };
  }

  try {
    // Format service label for better readability
    const serviceLabel = SERVICE_LABELS[data.service] || data.service;

    // Format doctor info
    const doctorInfo = data.doctor
      ? `${data.doctor} (${serviceLabel})`
      : 'Any available doctor';

    const templateParams = {
      to_name: 'Swasti Lifecare',
      from_name: data.name,
      from_phone: data.phone,
      from_email: data.email,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime,
      service: serviceLabel,
      doctor: doctorInfo,
      message: data.message || 'No additional message',
      reply_to: data.email,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your appointment request has been sent successfully! We will contact you shortly.',
      };
    }

    return {
      success: false,
      message: 'Failed to send your request. Please try again or contact us directly.',
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again or contact us directly.',
    };
  }
}

export function initEmailJS(): void {
  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
  }
}
