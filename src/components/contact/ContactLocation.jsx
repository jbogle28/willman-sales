
import { MapPin, ExternalLink } from 'lucide-react';

export default function ContactLocation() {
  const mapUrl =
    'https://www.google.com/maps/search/?api=1&query=2+King+Street+Kingston+Jamaica';

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
              Find Our Showroom
            </p>

            <h2 className="mt-4 text-3xl font-bold text-brand-blue md:text-4xl">
              Visit us in Kingston.
            </h2>

            <p className="mt-4 text-text-secondary">
              2 King Street, Kingston, Jamaica, W.I.
            </p>
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-red"
          >
            Get Directions
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="relative h-[350px] overflow-hidden border border-border md:h-[450px]">
          <iframe
            title="Willman Sales Company Limited location"
            src="https://maps.google.com/maps?q=2%20King%20Street%2C%20Kingston%2C%20Jamaica&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}
