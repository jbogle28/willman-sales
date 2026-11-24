
import { Link } from 'react-router-dom';

export default function ProductsHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2000&q=85"
        alt="Office stationery and workplace supplies"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-brand-blue/85" />

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-28 lg:py-32">

        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-xs font-medium text-white/70">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>

          <span>/</span>

          <span className="text-white">Products</span>
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-brand-red" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Our Catalogue
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Explore Our Products
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 md:text-base md:leading-8">
            Discover our range of office furniture, stationery,
            electronics, commercial equipment and workplace
            essentials. Find the products your organisation needs.
          </p>

          <div className="mt-8 h-1 w-16 bg-brand-red" />
        </div>
      </div>
    </section>
  );
}
