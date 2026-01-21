'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/Motion';
import { HOMECARE_CONTENT, CONTACT_INFO } from '@/lib/content';
import { useMotionPreferences } from '@/lib/hooks/useMotionPreferences';

export default function HomecareHero() {
  const { isMobile } = useMotionPreferences();
  const { hero } = HOMECARE_CONTENT;

  return (
    <AnimatedSection className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-primary-200/30 rounded-full mix-blend-multiply filter ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
        <div className={`absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-accent-200/30 rounded-full mix-blend-multiply filter ${isMobile ? 'blur-xl' : 'blur-3xl'}`} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <AnimatedDiv className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={CONTACT_INFO.phoneLink} className="btn-primary">
                📞 Request Home Visit
              </a>
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                💬 WhatsApp Us
              </a>
            </div>
          </AnimatedDiv>

          {/* Right: Portrait Image */}
          <AnimatedDiv className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl transform rotate-3 scale-105 opacity-20" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={hero.image}
                  alt="Swasti Lifecare Home Care Services"
                  width={400}
                  height={533}
                  className="w-full h-auto object-cover max-h-[500px] lg:max-h-[600px]"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </AnimatedSection>
  );
}
