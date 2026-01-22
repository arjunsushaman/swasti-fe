'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { hoverLift } from '@/lib/animations';

interface DoctorCardProps {
  name: string;
  qualifications: string;
  speciality: string;
  availability: string;
  imageUrl?: string;
  bio?: string;
}

export default function DoctorCard({
  name,
  qualifications,
  speciality,
  availability,
  imageUrl,
  bio,
}: DoctorCardProps) {
  return (
    <motion.div whileHover={hoverLift} className="card">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 mx-auto sm:mx-0 bg-primary-100 rounded-xl overflow-hidden">
            {imageUrl ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={imageUrl}
                  alt={name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-semibold text-secondary-900">{name}</h3>
          <p className="text-primary-600 font-medium mt-1">{qualifications}</p>
          <p className="text-secondary-600 mt-1">{speciality}</p>
          {bio && <p className="text-secondary-500 mt-3 text-sm">{bio}</p>}
          <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-sm text-secondary-500">
            <svg
              className="w-4 h-4 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {availability}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
