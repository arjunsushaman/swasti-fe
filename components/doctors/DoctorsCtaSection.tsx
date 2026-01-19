'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/Motion';

export default function DoctorsCtaSection() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 opacity-90"></div>

        {/* Animated Background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Book Your Consultation
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need general medical care or a specialist consultation, we&apos;re here to
            help. Book an appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-primary-700 shadow-xl transition-all duration-200 hover:bg-gray-50 hover:shadow-2xl hover:shadow-white/10"
              >
                Book Appointment
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:bg-white/20 hover:border-white/50"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
