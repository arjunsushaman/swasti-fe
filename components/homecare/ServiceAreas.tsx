'use client';

import { AnimatedSection, AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { HOMECARE_CONTENT } from '@/lib/content';

export default function ServiceAreas() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <div className="container-custom">
        <AnimatedDiv className="text-center mb-12">
          <h2 className="text-[1.5rem] sm:text-3xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
            <span className="text-gradient whitespace-nowrap">Service Areas</span>
          </h2>
          <p className="section-subheading text-left md:text-center">Home care available in the following locations</p>
        </AnimatedDiv>

        <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {HOMECARE_CONTENT.serviceAreas.map((area) => (
            <StaggerItem key={area}>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 text-primary-700 rounded-full border border-primary-200">
                <span className="text-lg">📍</span>
                <span className="font-medium">{area}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
