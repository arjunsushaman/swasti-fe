'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  defaultTransition,
  hoverLift,
} from '@/lib/animations';

interface MotionDivProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedDiv({ children, className = '', delay = 0 }: AnimatedDivProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInDiv({ children, className = '', delay = 0 }: FadeInDivProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeIn}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className = '' }: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      variants={staggerItem}
      transition={defaultTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface HoverLiftProps {
  children: ReactNode;
  className?: string;
}

export function HoverLift({ children, className = '' }: HoverLiftProps) {
  return (
    <motion.div whileHover={hoverLift} className={className}>
      {children}
    </motion.div>
  );
}
