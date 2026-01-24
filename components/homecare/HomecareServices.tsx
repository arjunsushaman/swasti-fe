'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { HOMECARE_CONTENT } from '@/lib/content';
import { useMotionPreferences } from '@/lib/hooks/useMotionPreferences';

export default function HomecareServices() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { prefersReducedMotion } = useMotionPreferences();

  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="container-custom">
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-[1.5rem] sm:text-3xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
            <span className="block whitespace-nowrap">Our Home Care</span>
            <span className="text-gradient whitespace-nowrap">Services</span>
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Comprehensive medical care delivered to your doorstep with compassion and expertise
          </p>
        </AnimatedDiv>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {HOMECARE_CONTENT.services.map((service) => (
            <StaggerItem key={service.id}>
              <motion.div
                className={`card cursor-pointer transition-all duration-300 bg-gradient-to-br ${service.gradient} border-2 ${
                  expandedId === service.id ? 'border-primary-400 shadow-lg' : 'border-transparent'
                }`}
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-3">{service.description}</p>

                    <AnimatePresence>
                      {expandedId === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ul className="space-y-2 mt-4 border-t border-secondary-200 pt-4">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-secondary-700">
                                <span className="text-primary-600 mt-1">✓</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button className="text-primary-600 font-medium mt-2 text-sm">
                      {expandedId === service.id ? '− Show less' : '+ Show more'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
