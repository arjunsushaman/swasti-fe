import { VALUE_BOXES } from '@/lib/constants';

interface BoxProps {
  icon: string;
  title: string;
  description: string;
}

function Box({ icon, title, description }: BoxProps) {
  return (
    <div className="card group hover:border-primary-200">
      <div className="text-4xl mb-4" role="img" aria-label={title}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-secondary-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Boxes() {
  return (
    <section className="py-16 md:py-24 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">Why Choose Swasti Lifecare?</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            We are not just a clinic — we are a growing healthcare ecosystem designed around you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_BOXES.map((box, index) => (
            <Box key={index} icon={box.icon} title={box.title} description={box.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
