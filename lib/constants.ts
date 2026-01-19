import { NavItem } from '@/types';

export const SITE_NAME = 'Swasti Lifecare';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://swastilifescare.com';

export const MAIN_LINE = 'Clarity. Compassion. Care that continues.';

export const SUB_LINE = `At Swasti Lifecare, healthcare is not rushed or impersonal. It's intentional, whole, and built on trust. Whether you're managing a long-term condition, seeking expert specialists, or recovering at home, we bring clarity to every diagnosis, compassion to every interaction, and continuity to every step of your journey.`;

export const INTRO_TEXT = `We are not just a clinic — we are a growing healthcare ecosystem designed around you. From family medicine to specialized neurology, from in-clinic diagnostics to physiotherapy and home-based care, every service at Swasti Lifecare is connected, coordinated, and centered on your wellbeing.`;

export const CONTACT_INFO = {
  phone: '+91-8547734214',
  phoneLink: 'tel:+918547734214',
  whatsappLink: 'https://wa.me/918547734214',
  email: 'contact@swastilifescare.com',
  streetAddress: 'Paravur - Parippally Rd, opp. bus stop, Parippally, Kerala 691574',
  locationLink: 'https://maps.app.goo.gl/your-location-link',
  instagramLink: 'https://www.instagram.com/swasti_lifecare',
  facebookLink: 'https://www.facebook.com/p/Swasti-Lifecare-61577658077432/',
  clinicHours: '9:00 AM – 9:00 PM',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Laboratory', href: '/labs' },
      { label: 'Physiotherapy', href: '/physiotherapy' },
      { label: 'Home Care', href: '/home-care' },
    ],
  },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
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

export const SERVICES_DATA = {
  general: {
    icon: '👨‍👩‍👧‍👦',
    name: 'Family Clinic & General Practice',
    description:
      'Dr. Nisha Jayan, BAMS, provides patient-centered primary care for individuals and families. Services include routine checkups, chronic disease management, minor illness treatments, and preventive care.',
    hours: 'Available all days: 9:00 AM – 9:00 PM',
  },
  specialty: {
    icon: '🏥',
    name: 'Specialty OP Clinic',
    description:
      'Our specialty outpatient clinic features visiting consultants across key disciplines:',
    specialists: [
      'Neurology',
      'Orthopaedics',
      'Paediatrics',
      'Pulmonology',
    ],
  },
  lab: {
    icon: '🧪',
    name: 'Routine Laboratory Services',
    description: 'Comprehensive diagnostic testing available on-site.',
  },
  neuroLab: {
    icon: '🧠',
    name: 'Neuro Diagnostic Lab',
    description: 'Specialized neurological testing services.',
  },
  physio: {
    icon: '🏃',
    name: 'Physiotherapy Services',
    description: 'Professional rehabilitation and physical therapy services.',
  },
  homeCare: {
    icon: '🏠',
    name: 'Home Care Services',
    description: 'Quality healthcare delivered to your home.',
  },
};

export const LAB_TESTS = [
  'Complete Blood Count (CBC)',
  'Blood Glucose (Fasting/PP/Random)',
  'Lipid Profile',
  'Liver Function Test (LFT)',
  'Kidney Function Test (KFT/RFT)',
  'Thyroid Function Test (TFT)',
  'Urine Routine Examination',
  'HbA1c (Glycated Hemoglobin)',
  'Electrolytes Panel',
  'Vitamin D / B12 Levels',
  'Pregnancy Test (Urine/Serum)',
  'Dengue / Typhoid / Malaria Tests',
  'ESR / CRP',
  'Semen Analysis',
  'Stool Routine',
];

export const NEURO_LAB_TESTS = [
  'EEG (Electroencephalogram)',
  'NCV (Nerve Conduction Velocity)',
  'BERA (Brainstem Evoked Response Audiometry)',
  'VEP (Visual Evoked Potential)',
  'SSEP (Somatosensory Evoked Potentials)',
  'Blink Reflex Study',
  'RNS (Repetitive Nerve Stimulation)',
  'F-Wave Studies',
  'H-Reflex Studies',
  'EMG (Electromyography) – Coming Soon',
  'Median nerve studies',
  'Ulnar nerve studies',
  'Radial nerve studies',
  'Common peroneal nerve studies',
  'Tibial nerve studies',
  'Sural nerve studies',
  'Lumbar plexus studies',
  'Brachial plexus studies',
  'Lumbar plexus studies',
  'Facial nerve studies',
];

export const PHYSIO_SERVICES = [
  'Post-Stroke Rehabilitation',
  'Orthopedic Physiotherapy',
  'Neurological Physiotherapy',
  'Geriatric Physiotherapy',
  'Sports Injury Rehabilitation',
  'Pain Management',
  'Post-Surgical Rehabilitation',
  'Balance and Gait Training',
];

export const HOME_CARE_SERVICES = [
  'Home Nursing Care',
  'Home Physiotherapy',
  'Post-Operative Care',
  'Palliative Care',
  'Wound Care & Dressing',
  'IV Infusions & Injections',
  'Catheter & Stoma Care',
  'Elderly Care Support',
];

export const DOCTORS_DATA = [
  {
    name: 'Dr. Nisha Jayan',
    qualifications: 'BAMS',
    specialty: 'general-practice' as const,
    specialtyLabel: 'Family Clinic & General Practice',
    availability: 'Available all days: 9:00 AM – 9:00 PM',
    featured: true,
  },
  {
    name: 'Dr. Suresh Kumar R',
    qualifications: 'MBBS, MD, DM (Neurology)',
    specialty: 'neurology' as const,
    specialtyLabel: 'Neurology',
    availability: 'Monday & Thursday',
    featured: true,
  },
  {
    name: 'Dr. Manoj Mathew',
    qualifications: 'MBBS, D.Ortho, DNB Ortho',
    specialty: 'orthopaedics' as const,
    specialtyLabel: 'Orthopaedics',
    availability: 'Tuesday & Saturday',
    featured: true,
  },
  {
    name: 'Dr. Sandeep',
    qualifications: 'MBBS, DCH, DNB',
    specialty: 'paediatrics' as const,
    specialtyLabel: 'Paediatrics',
    availability: 'Friday',
    featured: true,
  },
  {
    name: 'Dr. Ayyappan',
    qualifications: 'MBBS, DTCD',
    specialty: 'pulmonology' as const,
    specialtyLabel: 'Pulmonology',
    availability: 'Wednesday',
    featured: true,
  },
  {
    name: 'Dr. Sreekumar K',
    qualifications: 'MBBS, MD, DM (Neurology)',
    specialty: 'neurology' as const,
    specialtyLabel: 'Neurology',
    availability: 'Saturday',
    featured: true,
  },
];
