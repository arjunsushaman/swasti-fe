import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  listItems?: string[];
  hours?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  listItems,
  hours,
}: ServiceCardProps) {
  const content = (
    <>
      <div className="text-4xl mb-4" role="img" aria-label={title}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-secondary-600 leading-relaxed mb-4">{description}</p>
      {listItems && listItems.length > 0 && (
        <ul className="space-y-2 mb-4">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-secondary-600">
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
              {item}
            </li>
          ))}
        </ul>
      )}
      {hours && <p className="text-sm text-primary-600 font-medium">{hours}</p>}
      {href && (
        <span className="inline-flex items-center text-primary-600 font-medium mt-4">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="card group hover:border-primary-200 cursor-pointer block">
        {content}
      </Link>
    );
  }

  return <div className="card">{content}</div>;
}
