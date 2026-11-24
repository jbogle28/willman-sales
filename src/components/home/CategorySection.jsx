
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    title: 'Executive Offices',
    description:
      'Desks, seating, storage and furnishings for professional office environments.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85',
    category: 'executive-offices',
  },
  {
    title: 'Appliances & Electronics',
    description:
      'Computers, printers, air conditioners and essential workplace electronics.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85',
    category: 'appliances-electronics',
  },
  {
    title: 'Reception Areas',
    description:
      'Reception desks, lobby furniture and comfortable seating for visitors.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    category: 'reception-areas',
  },
  {
    title: 'Educational Institutions',
    description:
      'Classroom furniture, school supplies and administrative workspace solutions.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
    category: 'educational-institutions',
  },
  {
    title: 'Commercial Cleaning',
    description:
      'Janitorial products and cleaning equipment for businesses and facilities.',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85',
    category: 'commercial-cleaning',
  },
  {
    title: 'Government & Institutional',
    description:
      'Workplace products and procurement solutions for public and private institutions.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85',
    category: 'government-institutional',
  },
];

function SolutionCard({ solution }) {
  return (
    <Link
      to={`/products?category=${solution.category}`}
      className="group block overflow-hidden border border-border bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <img
          src={solution.image}
          alt={solution.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#102744]/35 to-transparent opacity-70" />
      </div>

      {/* Card content */}
      <div className="flex items-start justify-between gap-3 p-5 sm:p-6">
        <div>
          <h3 className="text-base font-bold text-brand-blue transition-colors duration-300 group-hover:text-brand-red sm:text-lg">
            {solution.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {solution.description}
          </p>

          <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue">
            Explore Solutions
            <span className="h-[2px] w-5 bg-brand-red transition-all duration-300 group-hover:w-9" />
          </span>
        </div>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-brand-blue transition duration-300 group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}

export default function CategorySection() {
  return (
    <section className="bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-brand-red" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              What We Offer
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-blue sm:text-4xl lg:text-5xl">
            Complete Solutions for Every Workspace.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            From everyday office essentials to complete workplace
            furnishing, Willman Sales Company LTD provides quality
            products and solutions for businesses, schools and
            institutions across Jamaica.
          </p>
        </div>

        {/* Solution cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.category}
              solution={solution}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-border pt-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-bold text-brand-blue">
              Looking for something specific?
            </h3>

            <p className="mt-1 text-sm text-text-secondary">
              Explore our catalogue to discover more products.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-brand-blue px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-[#102744]"
          >
            Browse Full Catalogue
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
