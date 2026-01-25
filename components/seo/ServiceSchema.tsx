import { SITE_NAME, SITE_URL } from '@/lib/constants';

interface ServiceItem {
  name: string;
  description: string;
  procedureType?: 'DiagnosticProcedure' | 'TherapeuticProcedure' | 'NoninvasiveProcedure';
}

interface ServiceSchemaProps {
  services: ServiceItem[];
}

export function ServiceSchema({ services }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: service.name,
          description: service.description,
          procedureType: service.procedureType
            ? `http://schema.org/${service.procedureType}`
            : 'http://schema.org/MedicalProcedure',
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
