import { HOME_CARE_SERVICES } from '@/lib/constants';

export default function HomeCareList() {
  return (
    <div className="bg-white rounded-xl border border-secondary-200 p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl" role="img" aria-label="Home Care">
          🏠
        </span>
        <div>
          <h3 className="text-xl font-semibold text-secondary-900">Home Care Services</h3>
          <p className="text-secondary-600">Quality healthcare delivered to your home</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {HOME_CARE_SERVICES.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-primary-50 rounded-lg"
          >
            <svg
              className="w-6 h-6 text-primary-600 flex-shrink-0"
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
            <span className="text-secondary-700 font-medium">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
