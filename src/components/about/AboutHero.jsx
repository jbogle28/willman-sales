
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Text */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-brand-red" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary">
                Willman Sales Company Limited
              </p>
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight text-brand-blue md:text-6xl lg:text-7xl">
              Rooted in Jamaica.
              <span className="mt-2 block text-brand-red">
                Ready for Business.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-text-secondary md:text-lg">
              Since 1959, we've helped Jamaican businesses,
              institutions and organizations find the products
              they need to work, grow and thrive.
            </p>

            <div className="mt-9">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 border-b-2 border-brand-blue pb-2 text-sm font-bold text-brand-blue transition hover:border-brand-red hover:text-brand-red"
              >
                Discover What We Offer
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[360px] overflow-hidden md:h-[480px] lg:h-[540px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Contemporary commercial architecture"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-brand-blue/10" />
            </div>

            {/* Heritage detail */}
            <div className="absolute -bottom-5 left-0 bg-brand-blue px-7 py-5 text-white md:-left-6 md:px-9 md:py-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                Proudly Jamaican
              </p>

              <p className="mt-1 text-3xl font-bold">
                Est. 1959
              </p>
            </div>

            <div className="absolute right-0 top-0 h-16 w-16 border-r-4 border-t-4 border-brand-red md:-right-3 md:-top-3" />
          </div>

        </div>
      </div>
    </section>
  );
}
