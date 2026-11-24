
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  CheckCircle2,
  Star,
} from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Office furniture and workplace essentials',
    'Educational and institutional supplies',
    'Commercial equipment and janitorial products',
    'Reliable service for businesses across Jamaica',
  ];

  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-6 lg:grid-cols-2 lg:gap-20">

        {/* Image area */}
        <div className="relative pb-5 pr-5">

          {/* Decorative corner */}
          <div className="absolute -left-5 -top-5 h-32 w-32 border-l-4 border-t-4 border-brand-red" />

          <div className="relative overflow-hidden">
            <img
              src="https://wryzbpphmtvcuwqbydiw.supabase.co/storage/v1/object/public/business-images/1779a0bf-8d62-47c8-bff6-0e92c9f91cd9/1769711675683.png"
              alt="National Commercial Bank office building in Kingston, Jamaica"
              loading="lazy"
              className="h-[380px] w-full object-cover sm:h-[480px]"
            />

            {/* Heritage ribbon */}
            <div className="absolute bottom-7 left-0 flex items-stretch shadow-xl">

              {/* Red years block */}
              <div className="relative flex flex-col items-center justify-center bg-brand-red px-5 py-4 text-white sm:px-7">

                <div className="mb-1 flex gap-1 text-white">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      size={11}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                <span className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                  60+
                </span>

                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                  Years
                </span>
              </div>

              {/* Navy ribbon block */}
              <div className="flex flex-col justify-center bg-brand-blue px-5 py-4 text-white sm:px-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Established 1959
                </span>

                <span className="mt-1 text-sm font-extrabold uppercase tracking-wider sm:text-base">
                  Proudly Jamaican
                </span>

                <div className="mt-2 h-[2px] w-10 bg-brand-red" />

                <span className="mt-2 text-[10px] font-medium text-white/80">
                  Serving businesses across Jamaica
                </span>
              </div>
            </div>

            {/* Image overlay */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Decorative corner */}
          <div className="absolute -bottom-0 -right-0 h-24 w-24 border-b-4 border-r-4 border-brand-red" />

          {/* Image source */}
          <p className="mt-3 text-[10px] text-text-secondary">
            Image source:{' '}
            <a
              href="https://kingstonhub.services/business/4b564f71-ae93-4836-8e77-443ce3bad0ae"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-brand-red"
            >
              KingstonHub
            </a>
            . Confirm image reuse permission before production.
          </p>
        </div>

        {/* Company information */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-brand-red" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Our Company
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-blue md:text-4xl lg:text-5xl">
            A Jamaican Legacy Built on
            <span className="text-brand-red"> Reliability.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-text-secondary">
            Since 1959, Willman Sales Company Limited has been supplying
            Jamaican businesses and institutions with quality office
            furniture, stationery, school materials, commercial equipment
            and everyday workplace essentials.
          </p>

          <p className="mt-4 text-base leading-8 text-text-secondary">
            From our King Street showroom in Kingston, we continue to support
            organisations of all sizes with dependable products and service.
            Our commitment is to help create productive, efficient and
            well-equipped working environments throughout Jamaica.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-brand-red"
                />

                <span className="text-sm font-medium text-text-primary">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Company details */}
          <div className="mt-9 grid gap-5 border-y border-border py-6 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center bg-red-50 text-brand-red">
                <CalendarDays size={21} />
              </div>

              <div>
                <p className="text-xs text-text-secondary">Established</p>
                <p className="text-sm font-bold text-brand-blue">
                  1959
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center bg-red-50 text-brand-red">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-xs text-text-secondary">
                  Visit Our Showroom
                </p>

                <p className="text-sm font-bold text-brand-blue">
                  2 King Street, Kingston
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-brand-blue px-7 py-4 text-sm font-bold text-white transition hover:bg-[#102744]"
            >
              Discover Our Story
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-brand-red px-7 py-4 text-sm font-bold text-brand-red transition hover:bg-brand-red hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
