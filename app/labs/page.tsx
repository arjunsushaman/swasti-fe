import { Metadata } from 'next';
import Link from 'next/link';
import LabList from '@/components/services/LabList';
import NeuroLabList from '@/components/services/NeuroLabList';

export const metadata: Metadata = {
  title: 'Laboratory Services',
  description:
    'Comprehensive diagnostic testing at Swasti Lifecare including routine lab tests and specialized neuro-diagnostic services like EEG, NCV, BERA, and more.',
};

export const revalidate = 60;

export default function LabsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-heading">Laboratory Services</h1>
          <p className="section-subheading max-w-3xl mx-auto">
            Comprehensive diagnostic testing available on-site. From routine blood work to
            specialized neurological testing, we ensure accurate and timely results.
          </p>
        </div>

        {/* Lab Services */}
        <div className="space-y-8">
          <LabList />
          <NeuroLabList />
        </div>

        {/* Info Section */}
        <section className="mt-12 bg-secondary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary-900">Sample Collection</h3>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
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
                  Fasting samples: 8-12 hours of fasting recommended
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
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
                  Best time for fasting tests: 7:00 AM - 10:00 AM
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
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
                  Home sample collection available on request
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary-900">Neuro Diagnostics</h3>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
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
                  EEG: Prior appointment recommended
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
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
                  NCV/EMG: Bring previous reports if available
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
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
                  Reports available within 24-48 hours
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Need a Lab Test?</h2>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            Book an appointment or walk in during clinic hours. For neuro-diagnostic tests,
            prior appointment is recommended.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book Appointment
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact for Queries
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
