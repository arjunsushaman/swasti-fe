import { LAB_TESTS } from '@/lib/constants';

export default function LabList() {
  return (
    <div className="bg-white rounded-xl border border-secondary-200 p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl" role="img" aria-label="Laboratory">
          🧪
        </span>
        <div>
          <h3 className="text-xl font-semibold text-secondary-900">Routine Laboratory Services</h3>
          <p className="text-secondary-600">Comprehensive diagnostic testing available on-site</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {LAB_TESTS.map((test, index) => (
          <div key={index} className="flex items-center gap-2 text-secondary-700">
            <svg
              className="w-4 h-4 text-primary-500 flex-shrink-0"
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
            <span className="text-sm">{test}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
