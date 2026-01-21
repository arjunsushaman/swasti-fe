import { Doctor, Review } from '@/types';

// Re-export existing constants from constants.ts
export {
  MAIN_LINE,
  SUB_LINE,
  INTRO_TEXT,
  VALUE_BOXES,
  CONTACT_INFO,
  DOCTORS_DATA,
} from './constants';

// Reviews (from ReviewsSection.tsx PLACEHOLDER_REVIEWS)
export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    reviewerName: 'Rahul K.',
    rating: 5,
    reviewDate: '2024-01-10T10:00:00Z',
    reviewText:
      'Excellent care and attention. Dr. Nisha took the time to understand my concerns and explained everything clearly. The clinic is clean and well-maintained. Highly recommend!',
    source: 'Google',
    verified: true,
    published: true,
  },
  {
    id: 2,
    reviewerName: 'Priya M.',
    rating: 5,
    reviewDate: '2024-01-05T10:00:00Z',
    reviewText:
      'Very happy with the neurology consultation. Dr. Suresh Kumar is very knowledgeable and patient. The neuro diagnostic facilities are excellent.',
    source: 'Google',
    verified: true,
    published: true,
  },
  {
    id: 3,
    reviewerName: 'Thomas J.',
    rating: 4,
    reviewDate: '2023-12-20T10:00:00Z',
    reviewText:
      'Good experience overall. The staff is friendly and the wait time was reasonable. Lab results were delivered quickly.',
    source: 'Facebook',
    verified: false,
    published: true,
  },
];

// Homecare Content
export const HOMECARE_CONTENT = {
  hero: {
    title: "Compassionate Medical Care at Your Doorstep",
    subtitle: "Professional healthcare services delivered to your home with the same quality and care you'd receive at our clinic. Ideal for elderly patients, chronic illness management, and post-hospitalization recovery.",
    image: "/images/swasti-homecare.jpeg",
  },

  services: [
    {
      id: 'home-care-overview',
      icon: '🏠',
      title: 'Home Care Services',
      description: 'Medical care delivered at home for patients unable to visit the clinic',
      details: [
        'Suitable for elderly, bedridden, chronically ill, and post-hospitalization patients',
        'Focus on continuity, safety, and professional care',
        'Comprehensive support in the comfort of your home',
      ],
      gradient: 'from-blue-50 to-cyan-50',
    },
    {
      id: 'doctor-visits',
      icon: '👨‍⚕️',
      title: 'Doctor Home Visits',
      description: 'Comprehensive medical consultations and evaluations at your doorstep',
      details: [
        'Evaluation of acute and chronic medical conditions',
        'Post-discharge follow-ups and medication review',
        'Supportive and palliative care when required',
        'Clear, evidence-based medical decision making',
      ],
      gradient: 'from-blue-50 to-indigo-50',
    },
    {
      id: 'nursing-care',
      icon: '👩‍⚕️',
      title: 'Nursing Care at Home',
      description: 'Professional nursing services for medical treatments and daily care',
      details: [
        'Injections and vital sign monitoring',
        'Post-operative nursing care',
        'Ryle\'s tube insertion and care',
        'Urinary catheterisation and catheter care',
        'Wound dressing with strict hygiene protocols',
      ],
      gradient: 'from-green-50 to-teal-50',
    },
    {
      id: 'physiotherapy',
      icon: '🏃‍♂️',
      title: 'Physiotherapy at Home',
      description: 'Expert rehabilitation and mobility support in your familiar environment',
      details: [
        'Post-stroke and post-operative rehabilitation',
        'Pain management and mobility training',
        'Geriatric physiotherapy',
        'Functional recovery in a familiar environment',
      ],
      gradient: 'from-orange-50 to-amber-50',
    },
    {
      id: 'medicine-delivery',
      icon: '💊',
      title: 'Medicine Home Delivery',
      description: 'Convenient home delivery of prescribed medicines',
      details: [
        'Home delivery of prescribed medicines',
        'Ensures uninterrupted treatment',
        'Coordinated with doctor consultations and follow-ups',
      ],
      gradient: 'from-pink-50 to-rose-50',
    },
    {
      id: 'bedridden-elderly-care',
      icon: '🛏️',
      title: 'Care for Bedridden & Elderly Patients',
      description: 'Specialized care and support for long-term patient needs',
      details: [
        'Regular medical and nursing visits',
        'Chronic disease monitoring',
        'Pressure sore prevention',
        'Guidance and support for caregivers',
      ],
      gradient: 'from-purple-50 to-pink-50',
    },
    {
      id: 'post-hospitalization',
      icon: '🏥',
      title: 'Post-Hospitalization & Recovery Care',
      description: 'Comprehensive recovery support after hospital discharge',
      details: [
        'Monitoring during recovery after surgery or illness',
        'Medication adherence support',
        'Early identification of complications',
        'Reduced need for hospital readmissions',
      ],
      gradient: 'from-indigo-50 to-purple-50',
    },
  ],

  howItWorks: [
    {
      step: 1,
      title: 'Request Service',
      description: 'Call us or visit the clinic to request home care',
      icon: '📞',
    },
    {
      step: 2,
      title: 'Needs Assessment',
      description: 'We evaluate your requirements and recommend care',
      icon: '📋',
    },
    {
      step: 3,
      title: 'Schedule Visit',
      description: 'Convenient scheduling at your preferred time',
      icon: '📅',
    },
    {
      step: 4,
      title: 'Receive Care',
      description: 'Our professionals deliver quality care at home',
      icon: '🏠',
    },
  ],

  serviceAreas: [
    'Ooninmoodu',
    'Paravur',
    'Bhoothakulam',
    'Chirakara',
    'Puthenkulam',
    'Parippally',
    'Varkala',
  ],

  whyChooseUs: [
    {
      icon: '✅',
      title: 'Qualified Professionals',
      description: 'Experienced doctors, nurses, and physiotherapists',
    },
    {
      icon: '🤝',
      title: 'Ethical & Transparent',
      description: 'Clear communication and honest medical guidance',
    },
    {
      icon: '💙',
      title: 'Compassionate Care',
      description: 'Patient-centered approach with empathy and respect',
    },
    {
      icon: '🏡',
      title: 'Comfort & Convenience',
      description: 'Reduces travel stress for elderly patients',
    },
  ],
};

// Services (from ServicesSection.tsx)
export const SERVICES_DATA = [
  {
    id: 'family-clinic',
    emoji: '👨‍👩‍👧‍👦',
    title: 'Family General Clinic',
    description: 'A comprehensive family clinic providing care for all ages, from infants to seniors.',
    gradient: 'from-blue-50 to-indigo-50',
    details: [
      'Consultation for all age groups',
      'Preventive health checkups',
      'Chronic disease management',
      'Immunizations and vaccinations',
      'Minor procedures and treatments',
      'Health education and counseling',
    ],
  },
  {
    id: 'specialties',
    emoji: '🩺',
    title: 'Visiting Specialists',
    description: 'Access to expert specialists in Neurology, Orthopedics, Pediatrics, and Pulmonology.',
    gradient: 'from-purple-50 to-pink-50',
    details: [
      'Neurology (Brain & Nerve disorders)',
      'Orthopedics (Bone & Joint care)',
      'Pediatrics (Child healthcare)',
      'Pulmonology (Respiratory care)',
      'Scheduled consultations available',
      'Coordinated care with our general physicians',
    ],
  },
  {
    id: 'laboratory',
    emoji: '🔬',
    title: 'Laboratory Services',
    description: 'Full-service diagnostic laboratory for accurate and timely test results.',
    gradient: 'from-green-50 to-teal-50',
    details: [
      'Blood tests and screenings',
      'Urine and stool analysis',
      'Hormone level testing',
      'Infection and disease markers',
      'Same-day results available',
      'Home sample collection',
    ],
  },
  {
    id: 'neuro-lab',
    emoji: '🧠',
    title: 'Neuro Lab',
    description: 'Specialized neurological diagnostic services including EEG and nerve conduction studies.',
    gradient: 'from-orange-50 to-red-50',
    details: [
      'Electroencephalography (EEG)',
      'Nerve conduction studies',
      'Evoked potential testing',
      'Sleep disorder evaluation',
      'Expert interpretation',
      'Coordination with neurology specialists',
    ],
  },
  {
    id: 'physiotherapy',
    emoji: '💪',
    title: 'Physiotherapy',
    description: 'Professional rehabilitation and pain management through evidence-based physiotherapy.',
    gradient: 'from-yellow-50 to-orange-50',
    details: [
      'Musculoskeletal rehabilitation',
      'Post-surgical recovery',
      'Sports injury treatment',
      'Chronic pain management',
      'Geriatric physiotherapy',
      'Home visit services available',
    ],
  },
  {
    id: 'home-care',
    emoji: '🏠',
    title: 'Home Healthcare',
    description: 'Bringing quality healthcare to your doorstep with our comprehensive home care services.',
    gradient: 'from-cyan-50 to-blue-50',
    details: [
      'Doctor home visits',
      'Nursing care at home',
      'Sample collection',
      'Physiotherapy sessions',
      'Post-operative care',
      'Elderly care support',
    ],
  },
];
