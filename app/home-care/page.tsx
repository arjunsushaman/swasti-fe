import { Metadata } from 'next';
import Link from 'next/link';
import HomeCareList from '@/components/services/HomeCareList';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home Care Services',
  description:
    'Quality healthcare delivered to your home by Swasti Lifecare. Services include home nursing, physiotherapy, palliative care, wound care, and elderly support.',
};

export const revalidate = 60;

export default function HomeCarePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-heading">Home Care Services</h1>
          <p className="section-subheading max-w-3xl mx-auto">
            Quality healthcare delivered to your home. Our home care services extend the continuum
            of care beyond the clinic, ensuring you receive personalized attention in the comfort
            of your own space.
          </p>
        </div>

        {/* Services List */}
        <HomeCareList />

        {/* Why Choose Home Care */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-3xl mb-4">🏡</div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Comfort of Home</h3>
            <p className="text-secondary-600 text-sm">
              Recover in familiar surroundings with your loved ones nearby.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-3xl mb-4">👩‍⚕️</div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Trained Staff</h3>
            <p className="text-secondary-600 text-sm">
              Qualified nurses and caregivers with experience in home healthcare.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Personalized Care</h3>
            <p className="text-secondary-600 text-sm">
              Care plans tailored to your specific needs and preferences.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Family Support</h3>
            <p className="text-secondary-600 text-sm">
              Guidance and training for family members on patient care.
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="mt-12 bg-secondary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Our Home Care Services Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Home Nursing Care</h3>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vital signs monitoring
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Medication management
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic nursing procedures
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Palliative Care</h3>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pain management support
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comfort-focused care
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Family counseling and support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Wound Care</h3>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Post-surgical wound care
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Diabetic wound management
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dressing and bandage changes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-3">Elderly Care</h3>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Daily living assistance
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mobility support
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Companionship and supervision
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 bg-primary-600 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Home Care Services?
            </h2>
            <p className="text-primary-100 mb-6">
              Contact us to discuss your home care needs. We&apos;ll help you understand your options
              and create a care plan that works for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-primary-600 shadow-sm transition-all duration-200 hover:bg-primary-50"
              >
                Request Home Care
              </Link>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-white/10"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
