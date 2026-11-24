
import willmanLogo from '../../assets/images/willman-logo.png';

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">

        {/* Company Information */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={willmanLogo}
              alt="Willman Sales Company Limited"
              className="h-14 w-14 object-contain"
            />

            <div>
              <h2 className="text-xl font-extrabold">
                WILLMAN SALES
              </h2>

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                Company Limited
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
            Your business supply partner. Explore our range of
            office stationery, furniture, technology and essential
            workplace products.
          </p>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-white/60">
            Proudly Jamaican · Established 1959
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="transition hover:text-white">
                Products
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-white">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
            Get in Touch
          </h3>

          <ul className="space-y-4 text-sm text-white/75">

            <li className="flex items-start gap-3">
              <MapPin
                size={17}
                className="mt-1 shrink-0 text-red-300"
              />

              <span>
                2 King Street,
                <br />
                P.O. Box 336
                <br />
                Kingston, Jamaica, W.I.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={17}
                className="shrink-0 text-red-300"
              />

              <a
                href="tel:+18769227188"
                className="transition hover:text-white"
              >
                +1 876-922-7188
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={17}
                className="shrink-0 text-red-300"
              />

              <a
                href="mailto:info@willmansales.com"
                className="break-all transition hover:text-white"
              >
                info@willmansales.com
              </a>
            </li>

          </ul>

          {/* Opening Hours */}
          <div className="mt-7 border-t border-white/15 pt-5">
            <div className="mb-3 flex items-center gap-2">
              <Clock size={16} className="text-red-300" />

              <h4 className="text-xs font-bold uppercase tracking-wider">
                Opening Hours
              </h4>
            </div>

            <p className="text-sm leading-6 text-white/75">
              Monday – Friday: 9:00 AM – 5:00 PM
              <br />
              Saturday – Sunday: Closed
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-xs text-white/60 md:flex-row md:px-6">

          <p>
            © {new Date().getFullYear()} Willman Sales Company Limited.
            All rights reserved.
          </p>

          <p>
            Professional supplies for your business.
          </p>

        </div>
      </div>

    </footer>
  );
}
