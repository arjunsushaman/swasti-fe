'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/Motion';
import { INTRO_TEXT } from '@/lib/constants';

export default function IntroSection() {
  return (
    <AnimatedSection className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Welcome to Swasti Lifecare</span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-8 leading-tight">
            Healthcare Redefined with <span className="text-gradient">Compassion & Excellence</span>
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed mb-10 text-balance">{INTRO_TEXT}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#services" className="btn-primary shadow-lg shadow-primary-500/20">
                Explore Our Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/doctors" className="btn-secondary">
                Meet Our Doctors
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
