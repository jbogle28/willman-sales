
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: (
      <>
        2 King Street,
        <br />
        P.O. Box 336
        <br />
        Kingston, Jamaica, W.I.
      </>
    ),
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: (
      <a
        href="tel:+18769227188"
        className="transition hover:text-brand-red"
      >
        +1 876-922-7188
      </a>
    ),
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: (
      <a
        href="mailto:info@willmansales.com"
        className="transition hover:text-brand-red"
      >
        info@willmansales.com
      </a>
    ),
  },
];

const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/TheWillmanSales/',
    label: 'f',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/thewillmansalesco/',
    label: 'ig',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/willmansales',
    label: 'X',
  },
];

export default function ContactInformation() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Contact Details */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Contact Information
            </p>

            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-4xl">
              We'd love to hear from you.
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-text-secondary">
              Reach out to our team by phone, email or visit
              our Kingston location. We're happy to assist.
            </p>

            <div className="mt-10 divide-y divide-border border-y border-border">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5 py-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-surface text-brand-blue">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-brand-blue">
                        {item.title}
                      </h3>

                      <div className="mt-2 text-sm leading-7 text-text-secondary">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="mt-9">
              <h3 className="text-sm font-bold text-brand-blue">
                Connect With Us
              </h3>

            <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((social) => (
                <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name}`}
                className="flex h-11 w-11 items-center justify-center border border-border text-sm font-bold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                >
                {social.label}
                </a>
            ))}
            </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-surface p-8 md:p-10 lg:self-start">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center bg-brand-blue text-white">
                <Clock size={21} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                  When to Visit
                </p>
                <h3 className="text-xl font-bold text-brand-blue">
                  Opening Hours
                </h3>
              </div>
            </div>

            <div className="mt-9 space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="font-semibold text-brand-blue">
                    Monday – Friday
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    9:00 AM – 5:00 PM
                  </p>
                </div>

                <span className="text-xs font-semibold text-green-700">
                  Open
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-5">
                <p className="font-semibold text-brand-blue">
                  Saturday
                </p>
                <span className="text-sm text-text-secondary">
                  Closed
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p className="font-semibold text-brand-blue">
                  Sunday
                </p>
                <span className="text-sm text-text-secondary">
                  Closed
                </span>
              </div>
            </div>

            <div className="mt-9 border-l-2 border-brand-red pl-4">
              <p className="text-sm leading-7 text-text-secondary">
                We look forward to assisting you during our
                regular business hours.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
