
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    name: 'Executive Office Desk',
    category: 'Office Furniture',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=85',
    description: 'Professional furniture for modern workspaces.',
  },
  {
    id: 2,
    name: 'Office Computer Equipment',
    category: 'Computers & Electronics',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85',
    description: 'Technology essentials for business productivity.',
  },
  {
    id: 3,
    name: 'Office Filing & Storage',
    category: 'Office Supplies',
    image:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=85',
    description: 'Practical organisation for everyday office operations.',
  },
  {
    id: 4,
    name: 'Commercial Cleaning Supplies',
    category: 'Janitorial Supplies',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=85',
    description: 'Essential supplies for clean and professional facilities.',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                Explore Our Range
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-blue md:text-4xl">
              Featured Products.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-text-secondary">
              Discover workplace essentials, quality furniture and
              professional equipment from our extensive product range.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-red"
          >
            View Full Catalogue
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Product image */}
              <Link
                to="/products"
                className="relative block aspect-[4/3] overflow-hidden bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                  Featured
                </span>
              </Link>

              {/* Product information */}
              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-red">
                  {product.category}
                </p>

                <h3 className="text-lg font-bold text-brand-blue transition-colors group-hover:text-brand-red">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {product.description}
                </p>

                <Link
                  to="/products"
                  className="mt-5 inline-flex items-center gap-2 border-t border-border pt-4 text-xs font-bold uppercase tracking-wider text-brand-blue transition-colors hover:text-brand-red"
                >
                  View Product
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Catalogue CTA */}
        <div className="mt-12 border border-border bg-white px-6 py-8 text-center md:px-10">
          <h3 className="text-xl font-bold text-brand-blue">
            Looking for something specific?
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-text-secondary">
            Browse our catalogue or speak with our team about the products
            your business needs.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-[#102744]"
          >
            Enquire About Products
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
