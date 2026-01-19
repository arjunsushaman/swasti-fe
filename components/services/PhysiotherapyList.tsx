import { PHYSIO_SERVICES } from '@/lib/constants';

export default function PhysiotherapyList() {
  return (
    <div className="bg-white rounded-xl border border-secondary-200 p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl" role="img" aria-label="Physiotherapy">
          🏃
        </span>
        <div>
          <h3 className="text-xl font-semibold text-secondary-900">Physiotherapy Services</h3>
          <p className="text-secondary-600">Professional rehabilitation and physical therapy</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PHYSIO_SERVICES.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg"
          >
            <svg
              className="w-6 h-6 text-primary-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-secondary-700 font-medium">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
