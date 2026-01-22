'use client';

import { AnimatedSection, AnimatedDiv } from '@/components/ui/Motion';
import type { Doctor } from '@/types';
import DoctorCard from './DoctorCard';

interface DoctorsHeroProps {
  generalPractitioner?: Doctor;
}

export default function DoctorsHero({ generalPractitioner }: DoctorsHeroProps) {
  return (
    <AnimatedSection className="py-24 bg-secondary-50 relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-accent-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <AnimatedDiv className="text-center mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Expert Medical Team
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
            Our Doctors
          </h1>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Meet our team of experienced healthcare professionals dedicated to providing you with
            the best possible care.
          </p>
        </AnimatedDiv>

        {/* General Practitioner */}
        {generalPractitioner && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
                Family Clinic & General Practice
              </h2>
              <p className="text-secondary-600">Your primary care physician, available every day</p>
            </div>
            <DoctorCard
              name={generalPractitioner.name}
              qualifications={generalPractitioner.qualifications}
              speciality={generalPractitioner.specialtyLabel}
              availability={generalPractitioner.availability}
              imageUrl={generalPractitioner.imageUrl}
              bio={generalPractitioner.bio}
            />
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
