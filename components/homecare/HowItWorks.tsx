'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { HOMECARE_CONTENT } from '@/lib/content';

export default function HowItWorks() {
  return (
    <AnimatedSection className="py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-[1.5rem] sm:text-3xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
            <span className="text-gradient whitespace-nowrap">How It Works</span>
          </h2>
          <p className="section-subheading text-center">Simple steps to access quality home care</p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOMECARE_CONTENT.howItWorks.map((step) => (
            <StaggerItem key={step.step}>
              <div className="card text-center bg-white">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 text-2xl mb-4">
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-primary-600 mb-2">
                  Step {step.step}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary-600 text-sm text-center">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
