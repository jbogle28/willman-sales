
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutClosing() {
  return (
    <section className="bg-brand-blue py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              The Willman Difference
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Built on experience.
              <span className="block text-white/65">
                Focused on what's next.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/75">
              We're proud of where we started, the relationships
              we've built and the businesses we continue to serve.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-bold text-brand-blue transition hover:bg-gray-100"
            >
              Explore Our Catalogue
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/35 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone size={17} />
              Speak With Our Team
            </Link>
          </div>

        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
          <p className="text-xs font-medium tracking-wider text-white/60">
            WILLMAN SALES COMPANY LIMITED
          </p>

          <p className="text-xs font-medium tracking-wider text-white/60">
            KINGSTON, JAMAICA · EST. 1959
          </p>
        </div>
      </div>
    </section>
  );
}
