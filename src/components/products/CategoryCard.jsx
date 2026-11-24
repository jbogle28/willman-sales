import { Link } from 'react-router-dom';
import { ArrowUpRight, Package } from 'lucide-react';

export default function CategoryCard({
  name,
  description,
  image,
}) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(name)}`}
      className="group relative block overflow-hidden rounded-lg bg-gray-100"
    >
      <div className="relative h-64 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <Package size={48} className="text-gray-400" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          {description && (
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {description}
            </p>
          )}

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
            Explore Category
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}