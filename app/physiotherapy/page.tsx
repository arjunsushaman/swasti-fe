import { Metadata } from 'next';
import Link from 'next/link';
import PhysiotherapyList from '@/components/services/PhysiotherapyList';

export const metadata: Metadata = {
  title: 'Physiotherapy Services',
  description:
    'Professional physiotherapy and rehabilitation services at Swasti Lifecare including post-stroke rehab, orthopedic therapy, sports injury treatment, and more.',
};

export const revalidate = 60;

export default function PhysiotherapyPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-heading">Physiotherapy Services</h1>
          <p className="section-subheading max-w-3xl mx-auto">
            Professional rehabilitation and physical therapy services designed to help you recover,
            regain mobility, and improve your quality of life.
          </p>
        </div>

        {/* Services List */}
        <PhysiotherapyList />

        {/* Features Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Expert Therapists</h3>
            <p className="text-secondary-600">
              Qualified physiotherapists with experience in various rehabilitation techniques.
            </p>
          </div>
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">In-Clinic Sessions</h3>
            <p className="text-secondary-600">
              Well-equipped facility with modern physiotherapy equipment.
            </p>
          </div>
          <div className="card text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Home Physio</h3>
            <p className="text-secondary-600">
              Can&apos;t visit the clinic? We bring physiotherapy to your home.
            </p>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="mt-12 bg-secondary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Conditions We Treat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Stroke Recovery',
              'Joint Replacement Rehab',
              'Fracture Recovery',
              'Back Pain & Sciatica',
              'Neck Pain & Stiffness',
              'Sports Injuries',
              'Arthritis Management',
              'Parkinson\'s Disease',
              'Post-Surgery Rehabilitation',
              'Balance Disorders',
              'Muscle Weakness',
              'Mobility Issues',
            ].map((condition, index) => (
              <div key={index} className="flex items-center gap-2 text-secondary-700">
                <svg
                  className="w-5 h-5 text-primary-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {condition}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Start Your Recovery Journey
          </h2>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            Book a physiotherapy consultation today. Our therapists will assess your condition and
            create a personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book Physiotherapy Session
            </Link>
            <Link href="/home-care" className="btn-secondary">
              Home Physiotherapy
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
