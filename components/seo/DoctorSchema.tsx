import { SITE_URL } from '@/lib/constants';

interface DoctorSchemaProps {
  name: string;
  specialty: string;
  qualifications: string;
  imageUrl?: string;
  availability?: string;
}

export function DoctorSchema({
  name,
  specialty,
  qualifications,
  imageUrl,
  availability,
}: DoctorSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: name,
    image: imageUrl ? `${SITE_URL}${imageUrl}` : undefined,
    jobTitle: qualifications,
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Swasti Lifecare',
      url: SITE_URL,
    },
    medicalSpecialty: specialty,
    ...(availability && {
      availableTime: availability,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
