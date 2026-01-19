import { NavItem } from '@/types';

export const SITE_NAME = 'Swasti Lifecare';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://swastilifescare.com';

export const MAIN_LINE = 'Clarity. Compassion. Care that continues.';

export const SUB_LINE = `At Swasti Lifecare, healthcare is not rushed or impersonal. It is calm, thoughtful, and centred around the person sitting in front of us. We believe patients heal better when they feel understood, reassured, and supported.`;

export const INTRO_TEXT = `Swasti Lifecare is built on the principles of trust, clarity, and respectful medical care. We believe that effective healthcare begins with listening carefully, understanding the individual behind the symptoms, and explaining medical concerns in a clear and honest manner. Rather than focusing on a single complaint, our approach considers overall health, underlying factors, and long-term wellbeing. Consultations at Swasti Lifecare are thoughtful and unhurried, allowing patients the space to speak openly and participate in informed decision-making. Our responsibility extends beyond diagnosis and treatment—we continue to guide patients after consultations and ensure appropriate follow-up and referrals when needed, so every individual feels supported at every step of their care journey.`;

export const CONTACT_INFO = {
  phone: '+91-8547734214',
  phoneLink: 'tel:+918547734214',
  whatsappLink: 'https://wa.me/918547734214',
  email: 'contact@swastilifescare.com',
  streetAddress: 'Paravur - Parippally Rd, opp. bus stop, Parippally, Kerala 691574',
  locationLink: 'https://www.google.com/maps/search/?api=1&query=Swasti+Lifecare+Paravur+Parippally+Rd+opp+bus+stop+Parippally+Kerala+691574',
  instagramLink: 'https://www.instagram.com/swasti_lifecare',
  facebookLink: 'https://www.facebook.com/p/Swasti-Lifecare-61577658077432/',
  clinicHours: '9:00 AM – 9:00 PM',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/#contact' },
];

export const VALUE_BOXES = [
  {
    icon: '🩺',
    title: 'Whole-Person, Family-First Care',
    description:
      'Our family clinic treats every patient as a person, not a number — with time, attention, and a commitment to long-term relationships.',
  },
  {
    icon: '🧠',
    title: 'Expert-Led Specialty Services',
    description:
      'From neurology to orthopaedics, our visiting specialists bring advanced expertise right to your neighborhood.',
  },
  {
    icon: '🔬',
    title: 'Diagnostics You Can Trust',
    description:
      'With a full-service lab on-site and neuro-specific diagnostics like EEG and NCV, we ensure accurate, timely results.',
  },
  {
    icon: '🏠',
    title: 'Continuity Beyond the Clinic',
    description:
      "Whether it's physiotherapy or palliative care, our home care services extend quality healthcare into your living room.",
  },
];


export const DOCTORS_DATA = [
  {
    name: 'Dr. Anoop Sugunan',
    qualifications: 'MBBS, MD, DrNB (Neurology)',
    specialty: 'neurology' as const,
    specialtyLabel: 'Neurology',
    availability: 'Consultation available on scheduled days',
    featured: true,
    order: 1,
    imageUrl: '/images/doctors/dr-anoop-sugunan.jpg',
  },
  {
    name: 'Dr. Rahul L S',
    qualifications: 'MBBS, DNB – Consultant Orthopaedic Surgeon',
    specialty: 'orthopaedics' as const,
    specialtyLabel: 'Orthopaedics',
    availability: 'Consultation on scheduled days',
    featured: true,
    order: 2,
    imageUrl: '/images/doctors/dr-rahul-ls.jpg',
  },
  {
    name: 'Dr. Akhilesh Arjun',
    qualifications: 'MBBS, MS (Orthopaedics), FIEORA, FRIC',
    specialty: 'orthopaedics' as const,
    specialtyLabel: 'Orthopaedics',
    availability: 'Consultation on scheduled days',
    featured: true,
    order: 3,
    imageUrl: '/images/doctors/dr-akhilesh-arjun.jpg',
  },
  {
    name: 'Dr. K P Asokan Pillai',
    qualifications: 'MBBS, DCH',
    specialty: 'paediatrics' as const,
    specialtyLabel: 'Paediatrics',
    availability: 'Consultation on scheduled days',
    featured: true,
    order: 4,
    imageUrl: '/images/doctors/dr-kp-asokan-pillai.png',
  },
  {
    name: 'Dr. Sajith S L',
    qualifications: 'MBBS, MD (Respiratory Medicine)',
    specialty: 'pulmonology' as const,
    specialtyLabel: 'Pulmonology',
    availability: 'Senior Consultant Pulmonologist (Allergy, Asthma & Sleep Medicine)',
    featured: true,
    order: 5,
    imageUrl: '/images/doctors/dr-sajith-sl.jpg',
  },
  {
    name: 'Dr. Vishnu S Kumar',
    qualifications: 'MBBS – General Practitioner',
    specialty: 'general-practice' as const,
    specialtyLabel: 'General Practice / Family Medicine',
    availability: 'Available all days: 9:00 AM – 9:00 PM',
    featured: true,
    order: 6,
    imageUrl: '/images/doctors/dr-vishnu-s-kumar.png',
  }
];
