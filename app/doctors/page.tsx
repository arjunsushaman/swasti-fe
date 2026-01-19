import { Metadata } from 'next';
import Link from 'next/link';
import DoctorCard from '@/components/doctors/DoctorCard';
import { DOCTORS_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Doctors',
  description:
    'Meet our team of experienced doctors at Swasti Lifecare. Specialists in neurology, orthopaedics, paediatrics, pulmonology, and family medicine.',
};

export const revalidate = 60;

export default function DoctorsPage() {
  const generalPractitioner = DOCTORS_DATA.find((d) => d.specialty === 'general-practice');
  const specialists = DOCTORS_DATA.filter((d) => d.specialty !== 'general-practice');

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-heading">Our Doctors</h1>
          <p className="section-subheading max-w-3xl mx-auto">
            Meet our team of experienced healthcare professionals dedicated to providing you with
            the best possible care.
          </p>
        </div>

        {/* General Practitioner */}
        {generalPractitioner && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">
              Family Clinic & General Practice
            </h2>
            <DoctorCard
              name={generalPractitioner.name}
              qualifications={generalPractitioner.qualifications}
              specialty={generalPractitioner.specialtyLabel}
              availability={generalPractitioner.availability}
            />
          </section>
        )}

        {/* Visiting Specialists */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Visiting Specialists</h2>
          <p className="text-secondary-600 mb-6">
            Our visiting consultants bring advanced expertise right to your neighborhood, so you
            don&apos;t have to travel far for specialized care.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {specialists.map((doctor, index) => (
              <DoctorCard
                key={index}
                name={doctor.name}
                qualifications={doctor.qualifications}
                specialty={doctor.specialtyLabel}
                availability={doctor.availability}
              />
            ))}
          </div>
        </section>

        {/* Schedule Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Weekly Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary-50">
                  <th className="text-left p-4 font-semibold text-secondary-900 border-b">Day</th>
                  <th className="text-left p-4 font-semibold text-secondary-900 border-b">
                    Specialists Available
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b text-secondary-700 font-medium">Monday</td>
                  <td className="p-4 border-b text-secondary-600">
                    Dr. Suresh Kumar R (Neurology)
                  </td>
                </tr>
                <tr className="bg-secondary-50">
                  <td className="p-4 border-b text-secondary-700 font-medium">Tuesday</td>
                  <td className="p-4 border-b text-secondary-600">
                    Dr. Manoj Mathew (Orthopaedics)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b text-secondary-700 font-medium">Wednesday</td>
                  <td className="p-4 border-b text-secondary-600">Dr. Ayyappan (Pulmonology)</td>
                </tr>
                <tr className="bg-secondary-50">
                  <td className="p-4 border-b text-secondary-700 font-medium">Thursday</td>
                  <td className="p-4 border-b text-secondary-600">
                    Dr. Suresh Kumar R (Neurology)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b text-secondary-700 font-medium">Friday</td>
                  <td className="p-4 border-b text-secondary-600">Dr. Sandeep (Paediatrics)</td>
                </tr>
                <tr className="bg-secondary-50">
                  <td className="p-4 text-secondary-700 font-medium">Saturday</td>
                  <td className="p-4 text-secondary-600">
                    Dr. Manoj Mathew (Orthopaedics), Dr. Sreekumar K (Neurology)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-secondary-500">
            <strong>Note:</strong> Dr. Nisha Jayan (General Practice) is available all days from
            9:00 AM to 9:00 PM. Specialist timings may vary — please call to confirm.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
            Book Your Consultation
          </h2>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            Whether you need general medical care or a specialist consultation, we&apos;re here to
            help. Book an appointment today.
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
