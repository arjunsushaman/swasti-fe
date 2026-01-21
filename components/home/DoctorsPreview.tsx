'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { hoverLift } from '@/lib/animations';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';
import Carousel from '@/components/ui/Carousel';
import type { Doctor, CarouselConfig } from '@/types';

interface DoctorsPreviewProps {
  doctors: Doctor[];
}

export default function DoctorsPreview({ doctors }: DoctorsPreviewProps) {
  // Filter for featured doctors only, limit to 6
  const featuredDoctors = doctors.filter(d => d.featured).slice(0, 6);

  // If no featured doctors, show first 6
  const displayDoctors = featuredDoctors.length > 0 ? featuredDoctors : doctors.slice(0, 6);

  const { isDesktop } = useBreakpoint();

  // Carousel configuration
  const carouselConfig: CarouselConfig = {
    itemsPerView: { mobile: 1, tablet: 2, desktop: 3 },
    gap: 32, // Match Tailwind gap-8 (8 * 4px = 32px)
    dragEnabled: true,
    showDots: true,
    showArrows: false,
    loop: false,
  };

  // Render doctor card function
  const renderDoctorCard = (doctor: Doctor) => (
    <motion.div whileHover={hoverLift} className="glass-card p-6 h-full hover:border-primary-300 transition-colors">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-24 h-24 flex-shrink-0 mx-auto sm:mx-0 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center text-4xl shadow-inner border border-white overflow-hidden">
          {doctor.imageUrl ? (
            <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-full object-cover" />
          ) : (
            '👨‍⚕️'
          )}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-secondary-900 mb-2">{doctor.name}</h3>
          <p className="text-primary-600 font-medium mb-1 text-sm uppercase tracking-wide">{doctor.qualifications}</p>
          <p className="text-secondary-600 mb-3 font-medium">{doctor.specialtyLabel}</p>
          <div className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 text-xs rounded-full">
            {doctor.availability}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <AnimatedSection className="py-24 bg-secondary-50 relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-accent-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Our Expert Doctors</h2>
          <p className="section-subheading max-w-2xl mx-auto text-lg text-secondary-600">
            Our team of experienced specialists brings advanced expertise right to your neighborhood.
          </p>
        </div>

        {isDesktop ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayDoctors.map((doctor) => (
              <StaggerItem key={doctor.name}>
                {renderDoctorCard(doctor)}
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <Carousel
            config={carouselConfig}
            ariaLabel="Featured doctors carousel"
            className="mb-12"
          >
            {displayDoctors.map((doctor) => (
              <div key={doctor.name}>
                {renderDoctorCard(doctor)}
              </div>
            ))}
          </Carousel>
        )}

        <AnimatedDiv delay={0.4} className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link href="/doctors" className="btn-primary shadow-lg shadow-primary-500/25">
              View All Doctors
            </Link>
          </motion.div>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}
