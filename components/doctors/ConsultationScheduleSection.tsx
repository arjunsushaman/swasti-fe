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
          <div className="glass-card overflow-hidden">
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
                      <td className="px-6 py-4 text-secondary-900 font-medium">
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

        {/* Call to Action */}
        <AnimatedDiv delay={0.4} className="text-center mt-12">
          <p className="text-secondary-600 mb-6">
            For appointments and enquiries, contact us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book Appointment
            </Link>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}
