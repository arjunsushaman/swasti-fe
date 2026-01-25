'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Input, Textarea } from '@/components/ui/Input';
import { DatePicker } from '@/components/ui/DatePicker';
import { Dropdown } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import { sendBookingEmail, initEmailJS } from '@/lib/emailjs';
import { BookingFormData } from '@/types';
import { DOCTORS_DATA } from '@/lib/constants';

// Combined service and doctor options
const combinedServiceOptions = [
  // General Services
  {
    value: 'general|',
    label: 'Family Clinic & General Practice',
    group: 'General Services'
  },
  {
    value: 'lab|',
    label: 'Laboratory Services',
    group: 'General Services'
  },
  {
    value: 'neuro-lab|',
    label: 'Neuro Diagnostic Lab (NCS, EEG)',
    group: 'General Services'
  },
  {
    value: 'physio|',
    label: 'Physiotherapy & Rehabilitation',
    group: 'General Services'
  },
  {
    value: 'home-care|',
    label: 'Home Care Services',
    group: 'General Services'
  },
  // Doctors with their specialties
  ...DOCTORS_DATA.map((doc) => ({
    value: `${doc.speciality}|${doc.name}`,
    label: `${doc.name} — ${doc.specialtyLabel}`,
    group: 'Specialist Consultations'
  })),
];

const timeSlots = [
  { value: '09:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' },
  { value: '17:00', label: '5:00 PM' },
  { value: '18:00', label: '6:00 PM' },
  { value: '19:00', label: '7:00 PM' },
  { value: '20:00', label: '8:00 PM' },
];

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  preferredDate?: string;
  preferredTime?: string;
  serviceDoctor?: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    service: '',
    doctor: '',
    message: '',
  });
  const [serviceDoctor, setServiceDoctor] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    initEmailJS();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = 'Please select a future date';
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (!serviceDoctor) {
      newErrors.serviceDoctor = 'Please select a service or doctor';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Parse the combined serviceDoctor value
    const [service, doctor] = serviceDoctor.split('|');
    const submissionData = {
      ...formData,
      service,
      doctor: doctor || '',
    };

    try {
      const result = await sendBookingEmail(submissionData);
      setSubmitStatus({
        type: result.success ? 'success' : 'error',
        message: result.message,
      });

      if (result.success) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          preferredDate: '',
          preferredTime: '',
          service: '',
          doctor: '',
          message: '',
        });
        setServiceDoctor('');
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCustomChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    if (name === 'serviceDoctor') {
      setServiceDoctor(value);
      if (errors.serviceDoctor) {
        setErrors((prev) => ({ ...prev, serviceDoctor: undefined }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {submitStatus.type && (
        <div
          className={`p-3 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
          role="alert"
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter your full name"
          required
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="+91 XXXXX XXXXX"
          required
        />
      </div>

      <Input
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="your@email.com"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DatePicker
          label="Preferred Date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleCustomChange}
          error={errors.preferredDate}
          min={getTodayString()}
          required
        />

        <Dropdown
          label="Preferred Time"
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleCustomChange}
          error={errors.preferredTime}
          options={timeSlots}
          placeholder="Select a time slot"
          required
        />
      </div>

      <Dropdown
        label="Select Service or Doctor"
        name="serviceDoctor"
        value={serviceDoctor}
        onChange={handleCustomChange}
        error={errors.serviceDoctor}
        options={combinedServiceOptions}
        placeholder="Choose a service or doctor consultation"
        required
      />

      <Textarea
        label="Additional Message (Optional)"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Any specific concerns or requirements..."
        rows={3}
      />

      <div className="pt-2">
        <Button type="submit" className="w-full md:w-auto" isLoading={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Request Appointment'}
        </Button>
      </div>

      <p className="text-sm text-secondary-500">
        By submitting this form, you agree to be contacted by our team to confirm your appointment.
        We typically respond within 2-4 hours during clinic hours.
      </p>
    </form>
  );
}
