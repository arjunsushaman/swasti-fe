'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MAIN_LINE, SUB_LINE, CONTACT_INFO } from '@/lib/constants';
import { fadeInUp, fadeIn, staggerContainer, staggerItem, defaultTransition } from '@/lib/animations';
import { useMotionPreferences } from '@/lib/hooks/useMotionPreferences';

export default function Hero() {
  const { prefersReducedMotion, isMobile, shouldDisableInfiniteAnimations } = useMotionPreferences();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-50 pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-white via-primary-50 to-primary-100 opacity-80" />

        {/* Conditional animated blobs - only on desktop with motion enabled */}
        {!shouldDisableInfiniteAnimations && (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animate-delay-2000" />
            <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animate-delay-4000" />
          </>
        )}

        {/* Static fallback for mobile/reduced motion */}
        {shouldDisableInfiniteAnimations && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 opacity-50" />
        )}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm mb-8"
          >
            <span className={`flex h-2 w-2 rounded-full bg-accent-500 ${!prefersReducedMotion ? 'animate-pulse' : ''}`}></span>
            <span className="text-sm font-medium text-secondary-600">Your Health, Our Priority</span>
          </motion.div>

          {/* Main Tagline */}
          <motion.h1
            initial={prefersReducedMotion ? false : "initial"}
            animate={prefersReducedMotion ? false : "animate"}
            variants={fadeInUp}
            transition={prefersReducedMotion ? { duration: 0 } : defaultTransition}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary-900 mb-8 text-balance"
          >
            <span className="block mb-2">Clarity. Compassion.</span>
            <span className="text-gradient drop-shadow-sm">Care that continues.</span>
          </motion.h1>

          {/* Sub Line */}
          <motion.p
            initial={prefersReducedMotion ? false : "initial"}
            animate={prefersReducedMotion ? false : "animate"}
            variants={fadeInUp}
            transition={prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.2 }}
            className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            {SUB_LINE}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={prefersReducedMotion ? false : "initial"}
            animate={prefersReducedMotion ? false : "animate"}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              variants={staggerItem}
              transition={prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.3 }}
            >
              <Link
                href="/booking"
                className="btn-primary flex items-center gap-3 px-8 py-4 text-lg shadow-lg shadow-primary-500/30 hover:shadow-primary-600/40 hover:-translate-y-1 transition-all duration-300"
              >
                {!prefersReducedMotion && (
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                )}
                {prefersReducedMotion && (
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                )}
                Book Appointment
              </Link>
            </motion.div>

            <motion.div
              variants={staggerItem}
              transition={prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.4 }}
            >
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-3 px-8 py-4 text-lg bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Only
              </a>
            </motion.div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={prefersReducedMotion ? false : "initial"}
            animate={prefersReducedMotion ? false : "animate"}
            variants={fadeIn}
            transition={prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-secondary-500 font-medium"
          >
            <a
              href={CONTACT_INFO.phoneLink}
              className="group flex items-center gap-3 px-5 py-2 rounded-full bg-white/50 hover:bg-white transition-all duration-300"
            >
              <div className="p-2 bg-primary-100 rounded-full text-primary-600 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              {CONTACT_INFO.phone}
            </a>
            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/50">
              <div className="p-2 bg-accent-100 rounded-full text-accent-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {CONTACT_INFO.clinicHours}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
