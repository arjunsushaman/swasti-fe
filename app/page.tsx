import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Boxes from '@/components/home/Boxes';
import ServicesOverview from '@/components/home/ServicesOverview';
import { INTRO_TEXT, CONTACT_INFO } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
};

export const revalidate = 60;

function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-6">Welcome to Swasti Lifecare</h2>
          <p className="text-lg text-secondary-600 leading-relaxed mb-8">{INTRO_TEXT}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="btn-primary">
              Explore Our Services
            </Link>
            <Link href="/doctors" className="btn-secondary">
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorsPreview() {
  const doctors = [
    {
      name: 'Dr. Nisha Jayan',
      qualifications: 'BAMS',
      specialty: 'Family Clinic & General Practice',
      availability: 'Available all days: 9:00 AM – 9:00 PM',
    },
    {
      name: 'Dr. Suresh Kumar R',
      qualifications: 'MBBS, MD, DM (Neurology)',
      specialty: 'Neurology',
      availability: 'Monday & Thursday',
    },
    {
      name: 'Dr. Manoj Mathew',
      qualifications: 'MBBS, D.Ortho, DNB Ortho',
      specialty: 'Orthopaedics',
      availability: 'Tuesday & Saturday',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Expert Doctors</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Our team of experienced specialists brings advanced expertise right to your neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {doctors.map((doctor, index) => (
            <div key={index} className="card text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-primary-600"
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
              <h3 className="text-xl font-semibold text-secondary-900 mb-1">{doctor.name}</h3>
              <p className="text-primary-600 font-medium mb-1">{doctor.qualifications}</p>
              <p className="text-secondary-600 mb-2">{doctor.specialty}</p>
              <p className="text-sm text-secondary-500">{doctor.availability}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/doctors" className="btn-primary">
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary-600 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Better Healthcare?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Book an appointment today and discover healthcare that&apos;s intentional, whole, and built
            on trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-primary-600 shadow-sm transition-all duration-200 hover:bg-primary-50"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book Appointment
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
          <p className="mt-6 text-primary-200">
            <a href={CONTACT_INFO.phoneLink} className="hover:text-white">
              {CONTACT_INFO.phone}
            </a>{' '}
            • {CONTACT_INFO.clinicHours}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Boxes />
      <IntroSection />
      <ServicesOverview />
      <DoctorsPreview />
      <CTASection />
    </>
  );
}
