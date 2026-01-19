import { SITE_NAME, SITE_URL, MAIN_LINE, SUB_LINE, CONTACT_INFO } from '@/lib/constants';

interface JsonLdProps {
  type?: 'MedicalBusiness' | 'BlogPosting' | 'BreadcrumbList';
  data?: Record<string, unknown>;
}

export function MedicalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: SITE_NAME,
    description: SUB_LINE,
    slogan: MAIN_LINE,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/clinic.jpg`,
    telephone: CONTACT_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Paravur - Parippally Rd, opp. bus stop',
      addressLocality: 'Parippally',
      addressRegion: 'Kerala',
      postalCode: '691574',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '8.7083',
      longitude: '76.6833',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
    sameAs: [CONTACT_INFO.instagramLink, CONTACT_INFO.facebookLink],
    medicalSpecialty: [
      'GeneralPractice',
      'Neurology',
      'Orthopedics',
      'Pediatrics',
      'Pulmonology',
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'General Consultation',
        procedureType: 'http://schema.org/NoninvasiveProcedure',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Laboratory Services',
        procedureType: 'http://schema.org/DiagnosticProcedure',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'EEG (Electroencephalogram)',
        procedureType: 'http://schema.org/DiagnosticProcedure',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'NCV (Nerve Conduction Velocity)',
        procedureType: 'http://schema.org/DiagnosticProcedure',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.phone,
      contactType: 'customer service',
      availableLanguage: ['en', 'ml'],
    },
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BlogPostingJsonLd({
  title,
  description,
  author,
  publicationDate,
  url,
  imageUrl,
}: {
  title: string;
  description: string;
  author: string;
  publicationDate: string;
  url: string;
  imageUrl?: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    datePublished: publicationDate,
    dateModified: publicationDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function JsonLd({ type = 'MedicalBusiness', data }: JsonLdProps) {
  if (type === 'MedicalBusiness') {
    return <MedicalBusinessJsonLd />;
  }

  if (type === 'BlogPosting' && data) {
    return (
      <BlogPostingJsonLd
        title={data.title as string}
        description={data.description as string}
        author={data.author as string}
        publicationDate={data.publicationDate as string}
        url={data.url as string}
        imageUrl={data.imageUrl as string}
      />
    );
  }

  if (type === 'BreadcrumbList' && data) {
    return (
      <BreadcrumbJsonLd
        items={data.items as Array<{ name: string; url: string }>}
      />
    );
  }

  return null;
}
