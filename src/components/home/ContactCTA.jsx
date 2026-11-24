
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageSquareText,
  Building2,
} from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-20 md:py-24">

      {/* Decorative background elements */}
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
      <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/[0.03]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

          {/* CTA content */}
          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-brand-red" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                Let's Work Together
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Let's Equip Your Business for
              <span className="text-red-300"> Success.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Whether you're furnishing an office, sourcing essential
              supplies or equipping an entire institution, Willman Sales
              is ready to help. Get in touch with our team to discuss
              your requirements.
            </p>

          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">

            <Link
              to="/contact"
              className="inline-flex min-w-[210px] items-center justify-center gap-3 bg-brand-red px-7 py-4 text-sm font-bold text-white transition hover:bg-red-700"
            >
              <MessageSquareText size={19} />
              Contact Our Team
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/products"
              className="inline-flex min-w-[210px] items-center justify-center gap-3 border border-white/50 px-7 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-brand-blue"
            >
              <Building2 size={19} />
              Explore Products
            </Link>

          </div>

        </div>

        {/* Bottom accent */}
        <div className="mt-14 flex items-center gap-4 border-t border-white/15 pt-6">
          <span className="h-2 w-2 bg-brand-red" />
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
            Willman Sales Company Limited · Serving Jamaica Since 1959
          </p>
        </div>

      </div>
    </section>
  );
}
