'use client';

import Image from 'next/image';
import { AnimatedSection, AnimatedDiv } from '@/components/ui/Motion';
import { HOMECARE_CONTENT, CONTACT_INFO } from '@/lib/content';

export default function HomecareHero() {
  const { hero } = HOMECARE_CONTENT;

  return (
    <section className="relative min-h-screen flex items-start md:items-center overflow-hidden">
      {/* Desktop Background Image (≥ 768px) */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/homecare-cover.png"
          alt="Swasti Home Care Services"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Mobile/Tablet Background Image (< 768px) */}
      <div className="md:hidden absolute inset-x-0 bottom-0 top-48">
        <Image
          src="/images/swasti-homecare.png"
          alt="Swasti Home Care Services"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Gradient overlay for text visibility on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent pointer-events-none" />
      </div>

      {/* White gradient overlay for header area visibility (all screens) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none z-[5]" />

      {/* Desktop left content gradient (≥ 768px only) */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-[1]" />

      {/* Content - Responsive Layout */}
      <div className="w-full px-6 md:px-12 lg:px-16 pt-24 pb-20 md:py-32 relative z-10 flex items-center justify-center md:justify-start md:w-1/2">
        <AnimatedDiv className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
            <span className="block">Compassionate</span>
            <span className="block">Medical Care</span>
            <span className="text-gradient">at Your Doorstep</span>
          </h1>

          <p className="text-base md:text-lg text-secondary-700 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center md:justify-start">
            <a
              href={CONTACT_INFO.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3.5 rounded-lg font-semibold shadow-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-xl"
            >
              📞 Request Home Visit
            </a>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-secondary-700 px-6 py-3.5 rounded-lg font-semibold border-2 border-secondary-300 shadow-md hover:bg-white hover:border-primary-400 hover:text-primary-600 transition-all duration-300"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
