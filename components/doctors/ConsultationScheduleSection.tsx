'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/Motion';
import { CONTACT_INFO } from '@/lib/constants';
import type { Doctor } from '@/types';

interface ConsultationScheduleSectionProps {
  specialists: Doctor[];
}

export default function ConsultationScheduleSection({ specialists }: ConsultationScheduleSectionProps) {
  return (
    <AnimatedSection className="py-16 bg-secondary-50">
      <div className="container-custom">
        <AnimatedDiv className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Consultation Schedule
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Our specialists are available on scheduled days. Please call ahead to confirm availability and book your appointment.
          </p>
        </AnimatedDiv>

        <div className="max-w-4xl mx-auto">
          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {specialists.map((doctor) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-secondary-900 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                  {doctor.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium text-secondary-500 min-w-[80px]">Speciality:</span>
                    <span className="text-sm text-secondary-700">{doctor.specialtyLabel}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-medium text-secondary-500 min-w-[80px]">Available:</span>
                    <span className="text-sm text-secondary-700">{doctor.availability}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">
                      Specialist
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">
                      Speciality
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-900">
                      Availability
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary-100">
                  {specialists.map((doctor) => (
                    <tr key={doctor.name} className="hover:bg-primary-50/30 transition-colors">
                      <td className="px-6 py-4 text-secondary-900 font-medium whitespace-nowrap">
                        {doctor.name}
                      </td>
                      <td className="px-6 py-4 text-secondary-600">
                        {doctor.specialtyLabel}
                      </td>
                      <td className="px-6 py-4 text-secondary-600">
                        {doctor.availability}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
