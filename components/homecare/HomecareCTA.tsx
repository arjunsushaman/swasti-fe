'use client';

import Link from 'next/link';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/Motion';
import { CONTACT_INFO } from '@/lib/content';

export default function HomecareCTA() {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <AnimatedDiv className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Quality Home Care?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our team is here to bring professional medical care to your doorstep. Contact us today to discuss your home care needs.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <a href={CONTACT_INFO.phoneLink} className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              📞 Call {CONTACT_INFO.phone}
            </a>
            <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              💬 WhatsApp Us
            </a>
          </div>

          <p className="text-primary-100 mt-8">
            Available {CONTACT_INFO.clinicHours}
          </p>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}
