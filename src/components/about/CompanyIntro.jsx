
import { MapPin, Building2, BriefcaseBusiness } from 'lucide-react';

const highlights = [
  {
    icon: Building2,
    title: 'Workplace Essentials',
    description: 'Furniture, equipment and supplies for professional environments.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Institutional Solutions',
    description: 'Products supporting businesses, schools and organizations.',
  },
  {
    icon: MapPin,
    title: 'Proudly Jamaican',
    description: 'Serving customers from our roots in Kingston, Jamaica.',
  },
];

export default function CompanyIntro() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Introduction */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Who We Are
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-brand-blue md:text-4xl lg:text-5xl">
              More than products.
              <span className="block text-text-secondary">
                We support the way Jamaica works.
              </span>
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-text-secondary">
              From office furniture and supplies to educational
              and commercial essentials, we bring together
              practical solutions for the workplaces and
              institutions that keep Jamaica moving.
            </p>

            <div className="mt-9 flex items-center gap-4 border-t border-border pt-6">
              <div>
                <p className="text-3xl font-bold text-brand-blue">
                  1959
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-secondary">
                  Year Established
                </p>
              </div>

              <div className="h-12 w-px bg-border" />

              <div>
                <p className="text-lg font-bold text-brand-blue">
                  Kingston
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-text-secondary">
                  Jamaica
                </p>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="space-y-0">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-6 border-b border-border py-7 first:border-t"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-brand-blue">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-brand-blue">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-7 text-text-secondary">
                      {item.description}
                    </p>
                  </div>

                  <span className="ml-auto hidden text-xs font-semibold text-text-secondary sm:block">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
