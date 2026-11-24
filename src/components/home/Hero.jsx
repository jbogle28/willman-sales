
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

import heroVideo from '../../assets/videos/hero.mp4';

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  const fallbackImage =
    'https://storage.newlocay.com/realty/original/uploads/2025/05/Premium-Office-Space-for-Rent-at-102-Hope-Road-Kingston-6-Jamaica-2.jpg';

  return (
    <section className="relative flex min-h-[calc(100svh-70px)] items-center overflow-hidden bg-brand-blue py-8 sm:py-14 lg:h-[calc(100svh-80px)] lg:min-h-0 lg:py-0">

      {/* Fallback Image */}
      <img
        src={fallbackImage}
        alt="Modern commercial office building in Kingston, Jamaica"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={fallbackImage}
        aria-hidden="true"
        onCanPlay={() => setVideoReady(true)}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Brand Overlay */}
      <div className="absolute inset-0 bg-brand-blue/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#102744]/80 via-[#17365D]/50 to-[#17365D]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#102744]/30 via-transparent to-[#102744]/10" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-0">

        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="h-[2px] w-9 bg-brand-red sm:w-12" />

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/95 sm:text-xs sm:tracking-[0.25em]">
              Proudly Serving Kingston, Jamaica
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-[1.7rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px]">
            Everything Your Business Needs,
            <span className="mt-1 block">
              All in One Place<span className="text-brand-red">.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-[12px] leading-[1.65] text-white/95 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
            From everyday stationery to office furniture and technology,
            Willman Sales Company LTD supplies businesses in Kingston,
            Jamaica with the essential products they need to keep moving forward.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:gap-4">

            <Link
              to="/products"
              className="group inline-flex min-h-[46px] items-center justify-center gap-3 bg-brand-blue px-5 py-3 text-[13px] font-bold text-white ring-1 ring-white/20 transition duration-300 hover:bg-[#102744] sm:min-h-12 sm:px-6 sm:text-sm"
            >
              Explore Our Products

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-[46px] items-center justify-center gap-3 border border-white/80 bg-white/10 px-5 py-3 text-[13px] font-bold text-white transition duration-300 hover:bg-white hover:text-brand-blue sm:min-h-12 sm:px-6 sm:text-sm"
            >
              <Phone size={16} />
              Contact Our Team
            </Link>

          </div>

          {/* Supporting Information */}
          <div className="mt-7 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/30 pt-4 sm:mt-9 sm:gap-6 sm:pt-5">

            <div>
              <p className="text-[10px] font-bold text-white sm:text-sm">
                Office Supplies
              </p>
              <p className="mt-1 text-[8px] leading-4 text-white/75 sm:text-xs sm:leading-5">
                Everyday workplace essentials
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-white sm:text-sm">
                Office Furniture
              </p>
              <p className="mt-1 text-[8px] leading-4 text-white/75 sm:text-xs sm:leading-5">
                Furnishing professional spaces
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-white sm:text-sm">
                Technology
              </p>
              <p className="mt-1 text-[8px] leading-4 text-white/75 sm:text-xs sm:leading-5">
                Equipment for modern businesses
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Red Brand Accent */}
      <div className="absolute bottom-0 right-0 h-1 w-1/4 bg-brand-red" />

    </section>
  );
}
