import Link from 'next/link';

const services = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Clinic & General Practice',
    description:
      'Patient-centered primary care for individuals and families with routine checkups, chronic disease management, and preventive care.',
    href: '/services',
  },
  {
    icon: '🏥',
    title: 'Specialty OP Clinic',
    description:
      'Access visiting consultants in Neurology, Orthopaedics, Paediatrics, and Pulmonology right in your neighborhood.',
    href: '/doctors',
  },
  {
    icon: '🧪',
    title: 'Laboratory Services',
    description:
      'Comprehensive diagnostic testing including routine lab tests and specialized neuro-diagnostic services like EEG and NCV.',
    href: '/labs',
  },
  {
    icon: '🏃',
    title: 'Physiotherapy',
    description:
      'Professional rehabilitation services including post-stroke rehab, orthopedic therapy, and sports injury rehabilitation.',
    href: '/physiotherapy',
  },
  {
    icon: '🏠',
    title: 'Home Care Services',
    description:
      'Quality healthcare delivered to your home including nursing care, physiotherapy, palliative care, and elderly support.',
    href: '/home-care',
  },
  {
    icon: '🧠',
    title: 'Neuro Diagnostics',
    description:
      'Specialized neurological testing services including EEG, NCV, BERA, VEP, and comprehensive nerve conduction studies.',
    href: '/labs',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            From family medicine to specialized care, from diagnostics to home-based services — all
            connected, coordinated, and centered on your wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="card group hover:border-primary-200 cursor-pointer"
            >
              <div className="text-4xl mb-4" role="img" aria-label={service.title}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
