'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { HOMECARE_CONTENT } from '@/lib/content';

export default function WhyChooseUs() {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-[1.5rem] sm:text-3xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
            <span className="block whitespace-nowrap">Why Choose Swasti</span>
            <span className="text-gradient whitespace-nowrap">Home Care?</span>
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOMECARE_CONTENT.whyChooseUs.map((benefit, idx) => (
            <StaggerItem key={idx}>
              <div className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
