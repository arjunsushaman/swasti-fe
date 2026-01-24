'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { hoverLift } from '@/lib/animations';
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

  const [showGrid, setShowGrid] = useState(true);
  const [screenWidth, setScreenWidth] = useState(1300);

  // Check if screen is >= 1300px for grid layout
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setShowGrid(width >= 1300);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carousel configuration - 2 items for 1024-1299px range
  const carouselConfig: CarouselConfig = {
    itemsPerView: { mobile: 1, tablet: 2, desktop: screenWidth >= 1024 && screenWidth < 1300 ? 2 : 3 },
    gap: 32, // Match Tailwind gap-8 (8 * 4px = 32px)
    dragEnabled: true,
    showDots: true,
    showArrows: false,
    loop: false,
  };

  // Render doctor card function
  const renderDoctorCard = (doctor: Doctor, forCarousel: boolean = false) => (
    <motion.div
      whileHover={hoverLift}
      className={`glass-card p-6 hover:border-primary-300 transition-colors ${forCarousel ? 'h-full min-h-[280px]' : 'h-full'}`}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="flex flex-col sm:flex-row gap-6 h-full" style={{ touchAction: 'pan-y' }}>
        {/* Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 mx-auto sm:mx-0 bg-primary-100 rounded-xl overflow-hidden">
            {doctor.imageUrl ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
              </motion.div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left flex flex-col">
          <h3 className="text-xl font-semibold text-secondary-900">{doctor.name}</h3>
          <p className="text-primary-600 font-medium mt-1 min-h-[4.5rem]">{doctor.qualifications}</p>
          <p className="text-secondary-600 mt-1">{doctor.specialtyLabel}</p>
          <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-sm text-secondary-500">
            <svg
              className="w-4 h-4 flex-shrink-0 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="line-clamp-2">{doctor.availability}</span>
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

        {showGrid ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayDoctors.map((doctor) => (
              <StaggerItem key={doctor.name}>
                {renderDoctorCard(doctor, false)}
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <Carousel
            config={carouselConfig}
            ariaLabel="Featured doctors carousel"
            className="mb-12"
            forceCarousel={true}
          >
            {displayDoctors.map((doctor) => (
              <div key={doctor.name}>
                {renderDoctorCard(doctor, true)}
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
