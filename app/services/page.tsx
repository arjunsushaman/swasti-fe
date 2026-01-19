import { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/services/ServiceCard';
import { SERVICES_DATA, DOCTORS_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive healthcare services at Swasti Lifecare including family medicine, specialty consultations, laboratory services, physiotherapy, and home care.',
};

export const revalidate = 60;

export default function ServicesPage() {
  const specialtyDoctors = DOCTORS_DATA.filter((d) => d.specialty !== 'general-practice');

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-heading">Our Services</h1>
          <p className="section-subheading max-w-3xl mx-auto">
            From family medicine to specialized care, from diagnostics to home-based services — all
            connected, coordinated, and centered on your wellbeing.
          </p>
        </div>

        {/* Family Clinic Section */}
        <section className="mb-12">
          <div className="card">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="text-5xl" role="img" aria-label="Family Clinic">
                {SERVICES_DATA.general.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-secondary-900 mb-3">
                  {SERVICES_DATA.general.name}
                </h2>
                <p className="text-secondary-600 mb-4">{SERVICES_DATA.general.description}</p>
                <p className="text-primary-600 font-medium">{SERVICES_DATA.general.hours}</p>
                <Link href="/booking" className="btn-primary mt-4 inline-block">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Clinic Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            {SERVICES_DATA.specialty.icon} {SERVICES_DATA.specialty.name}
          </h2>
          <p className="text-secondary-600 mb-6">{SERVICES_DATA.specialty.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyDoctors.map((doctor, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary-600"
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
                <h3 className="font-semibold text-secondary-900">{doctor.name}</h3>
                <p className="text-sm text-primary-600">{doctor.qualifications}</p>
                <p className="text-sm text-secondary-600 mt-1">{doctor.specialtyLabel}</p>
                <p className="text-xs text-secondary-500 mt-2">{doctor.availability}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/doctors" className="btn-secondary">
              View All Doctors
            </Link>
          </div>
        </section>

        {/* Other Services Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Diagnostic & Care Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              icon={SERVICES_DATA.lab.icon}
              title={SERVICES_DATA.lab.name}
              description={SERVICES_DATA.lab.description}
              href="/labs"
            />
            <ServiceCard
              icon={SERVICES_DATA.neuroLab.icon}
              title={SERVICES_DATA.neuroLab.name}
              description={SERVICES_DATA.neuroLab.description}
              href="/labs"
            />
            <ServiceCard
              icon={SERVICES_DATA.physio.icon}
              title={SERVICES_DATA.physio.name}
              description={SERVICES_DATA.physio.description}
              href="/physiotherapy"
            />
            <ServiceCard
              icon={SERVICES_DATA.homeCare.icon}
              title={SERVICES_DATA.homeCare.name}
              description={SERVICES_DATA.homeCare.description}
              href="/home-care"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
            Need Help Choosing a Service?
          </h2>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            Our team is here to help you find the right care. Contact us for a consultation or book
            an appointment with our general practitioner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="btn-primary">
              Book Appointment
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
