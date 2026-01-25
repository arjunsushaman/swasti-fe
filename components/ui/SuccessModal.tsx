'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useMotionPreferences } from '@/lib/hooks/useMotionPreferences';
import Button from '@/components/ui/Button';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  redirectPath?: string;
  autoRedirectDelay?: number; // milliseconds, default 3000
}

export default function SuccessModal({
  isOpen,
  onClose,
  title,
  message,
  redirectPath = '/',
  autoRedirectDelay = 3000,
}: SuccessModalProps) {
  const router = useRouter();
  const { prefersReducedMotion } = useMotionPreferences();
  const [countdown, setCountdown] = useState(Math.ceil(autoRedirectDelay / 1000));

  // Auto-redirect logic
  useEffect(() => {
    if (!isOpen) return;

    // Reset countdown when modal opens
    setCountdown(Math.ceil(autoRedirectDelay / 1000));

    const redirectTimer = setTimeout(() => {
      router.push(redirectPath);
    }, autoRedirectDelay);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [isOpen, autoRedirectDelay, redirectPath, router]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleManualRedirect = () => {
    router.push(redirectPath);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.1 : 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary-900/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
          aria-describedby="success-modal-description"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: prefersReducedMotion ? 0.1 : 0.3,
              ease: 'easeOut',
            }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-5 sm:p-6 md:p-8 text-center"
          >
            {/* Animated Checkmark Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.2,
                type: prefersReducedMotion ? 'tween' : 'spring',
                stiffness: 200,
                damping: 15,
              }}
              className="mx-auto w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mb-6"
            >
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <motion.circle
                  cx="40"
                  cy="40"
                  r="36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-green-500"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.2 : 0.5,
                    ease: 'easeInOut',
                  }}
                />
                <motion.path
                  d="M25 40 L35 50 L55 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: prefersReducedMotion ? 0 : 0.3,
                    duration: prefersReducedMotion ? 0.2 : 0.4,
                    ease: 'easeInOut',
                  }}
                />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h2
              id="success-modal-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.4,
                duration: prefersReducedMotion ? 0.1 : 0.3,
              }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-900 mb-3"
            >
              {title}
            </motion.h2>

            {/* Message */}
            <motion.p
              id="success-modal-description"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.5,
                duration: prefersReducedMotion ? 0.1 : 0.3,
              }}
              className="text-secondary-600 mb-6 text-sm sm:text-base"
            >
              {message}
            </motion.p>

            {/* Countdown & CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.6,
                duration: prefersReducedMotion ? 0.1 : 0.3,
              }}
            >
              <p className="text-sm text-secondary-500 mb-4">
                Redirecting to homepage in {countdown} second{countdown !== 1 ? 's' : ''}...
              </p>
              <Button onClick={handleManualRedirect} className="w-full">
                Go to Homepage Now
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
