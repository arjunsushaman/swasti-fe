'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { hoverLift } from '@/lib/animations';

interface ServiceDetail {
  id: string;
  emoji: string;
  title: string;
  description: string;
  details: string[];
  gradient: string;
  footer?: string;
}

const SERVICES: ServiceDetail[] = [
  {
    id: 'family-clinic',
    emoji: 'mn',
    title: 'Family General Clinic',
    description: 'A comprehensive family clinic providing care for all common medical conditions.',
    gradient: 'from-blue-50 to-indigo-50',
    details: [
      'Consultation for all age groups',
      'Management of acute and chronic illnesses',
      'Preventive care and routine health check-ups',
      'Clinic Hours: 9:00 AM – 9:00 PM',
      'Focused on whole health, long-term wellness, and continuity of care.',
      'Your trusted healthcare partner for life.'
    ]
  },
  {
    id: 'speciality-care',
    emoji: 'st',
    title: 'Speciality Care Services',
    description: 'Access to specialist consultations with coordinated follow-up through our clinic.',
    gradient: 'from-emerald-50 to-teal-50',
    details: [
      'Neurology',
      'Orthopaedics',
      'Paediatrics',
      'Pulmonology',
      'Physiotherapy & Rehabilitation'
    ],
    footer: 'Specialist care is provided on scheduled days, with continued guidance and follow-up from our clinic.'
  },
  {
    id: 'laboratory',
    emoji: 'lb',
    title: 'Laboratory Services',
    description: 'Comprehensive laboratory testing services under one roof, including:',
    gradient: 'from-violet-50 to-purple-50',
    details: [
      'All routine hematology investigations',
      'Biochemistry tests',
      'Hormone assays'
    ]
  },
  {
    id: 'neuro-laboratory',
    emoji: 'nr',
    title: 'Neuro Laboratory Services',
    description: 'Advanced diagnostic studies for evaluation of nerve and brain function:',
    gradient: 'from-fuchsia-50 to-pink-50',
    details: [
      'Nerve Conduction Study (NCS / NCV)',
      'EEG & Paediatric EEG',
      'Carpal Tunnel Syndrome (CTS) studies',
      'Brachial plexus & Lumbar plexus studies',
      'Repetitive Nerve Stimulation (RNS)',
      'Visual Evoked Potential (VEP)'
    ]
  },
  {
    id: 'physiotherapy',
    emoji: 'py',
    title: 'Physiotherapy Services',
    description: 'Comprehensive physiotherapy and rehabilitation care, including:',
    gradient: 'from-orange-50 to-amber-50',
    details: [
      'Stroke & Brain injury rehabilitation',
      'Spinal cord injury rehabilitation',
      'Musculoskeletal & Pain management',
      'Cardiopulmonary rehabilitation',
      'Paediatric & Geriatric rehabilitation',
      'Telerehabilitation & Home-based physio'
    ]
  },
  {
    id: 'home-care',
    emoji: 'hc',
    title: 'Home Care Services',
    description: 'Healthcare services delivered at home for patient convenience and continuity of care.',
    gradient: 'from-rose-50 to-red-50',
    details: [
      'Doctor home visits',
      'Home blood sample collection',
      'Home physiotherapy services',
      'Medicine delivery services'
    ]
  }
];

const getIcon = (code: string) => {
  switch (code) {
    case 'mn': return '🏥';
    case 'st': return '🩺';
    case 'lb': return '🔬';
    case 'nr': return '🧠';
    case 'py': return '🏃‍♂️';
    case 'hc': return '🏠';
    default: return '✨';
  }
};

export default function ServicesSection() {
  const [columns, setColumns] = useState(1);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  // Update columns based on window width to match grid breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setColumns(3); // lg
      else if (width >= 768) setColumns(2); // md
      else setColumns(1); // sm
    };

    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (index: number) => {
    const row = Math.floor(index / columns);
    // If clicking same row, collapse it. Else expand new row.
    setExpandedRow(expandedRow === row ? null : row);
  };

  return (
    <AnimatedSection className="py-24 bg-white relative overflow-hidden">
      {/* Scroll Anchor */}
      <div id="services" className="absolute top-0 -mt-24" />

      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-50 to-transparent opacity-60 rounded-bl-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent-50 to-transparent opacity-60 rounded-tr-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary-700 bg-primary-100/80 rounded-full border border-primary-200 uppercase"
          >
            🩺 Our Services
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 tracking-tight">
            Comprehensive Healthcare <span className="text-gradient">Under One Roof</span>
          </h2>
          <p className="text-xl text-secondary-600 leading-relaxed text-balance">
            We provide a holistic approach to your health with a wide range of specialized services.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {SERVICES.map((service, index) => {
            const row = Math.floor(index / columns);
            const isExpanded = expandedRow === row;

            return (
              <StaggerItem key={service.id} className="h-full">
                <motion.div
                  layout // Enables smooth layout transitions for siblings
                  onClick={() => handleCardClick(index)}
                  className={`group relative bg-white rounded-3xl border shadow-sm transition-all duration-300 flex flex-col overflow-hidden cursor-pointer ${isExpanded
                      ? 'border-primary-300 shadow-xl ring-1 ring-primary-100'
                      : 'border-secondary-200 hover:border-primary-200 hover:shadow-lg'
                    }`}
                >
                  {/* Min height container for top section to ensure alignment when collapsed */}
                  <div className="relative">
                    {/* Gradient Header */}
                    <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br ${service.gradient} opacity-50 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'group-hover:opacity-100'}`} />

                    <div className="relative z-10 p-8">
                      <div className="flex items-start justify-between mb-4">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-secondary-100 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {getIcon(service.emoji)}
                        </div>

                        {/* Chevron */}
                        <div className={`w-8 h-8 rounded-full bg-white/50 border border-secondary-200 flex items-center justify-center text-secondary-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-primary-50 text-primary-600 border-primary-200' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Title & Desc - Fixed height-ish area to align collapsed row? 
                          Actually let's just let it be natural. Since it's "same row", expanding one expands all, 
                          so height will align naturally via Grid + items-stretch (if we used it) or we accept varied heights (items-start).
                          User asked for "neat". items-stretch with expanding content is risky if content varies WILDLY. 
                          But "same row expand" forces them to match height if we use Flex/Grid stretch. 
                          Let's try sticking to 'h-full' on content.
                      */}
                      <div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-secondary-600 leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-8 pb-8 pt-0">
                          {/* Divider */}
                          <div className="h-px w-full bg-gradient-to-r from-secondary-200 to-transparent mb-6 opacity-60" />

                          {/* Details List */}
                          <ul className="space-y-3 mb-6">
                            {service.details.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-[15px] font-medium text-secondary-700 leading-normal text-start">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {/* Footer */}
                          {service.footer && (
                            <div className="mt-4 pt-4 border-t border-secondary-100">
                              <p className="text-xs text-primary-600 font-medium italic bg-primary-50/50 p-2 rounded-lg">
                                {service.footer}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
