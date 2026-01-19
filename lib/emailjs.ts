import emailjs from '@emailjs/browser';
import { BookingFormData } from '@/types';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export interface EmailJSResponse {
  success: boolean;
  message: string;
}

export async function sendBookingEmail(data: BookingFormData): Promise<EmailJSResponse> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS configuration is missing');
    return {
      success: false,
      message: 'Email service is not configured. Please contact us directly.',
    };
  }

  try {
    const templateParams = {
      to_name: 'Swasti Lifecare',
      from_name: data.name,
      from_phone: data.phone,
      from_email: data.email,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime,
      service: data.service,
      doctor: data.doctor || 'Not specified',
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
