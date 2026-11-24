
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border bg-white transition duration-300 hover:border-brand-blue">
      
      {/* Product Image */}
      <Link
        to={`/products/${product.slug}`}
        className="relative block overflow-hidden bg-surface"
      >
        <div className="flex aspect-[4/3] items-center justify-center overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-text-secondary">
              <Package size={42} strokeWidth={1.2} />
              <span className="text-xs font-medium">
                Product Image
              </span>
            </div>
          )}
        </div>

        {product.featured && (
          <span className="absolute left-3 top-3 bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Featured
          </span>
        )}
      </Link>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-brand-red">
          {product.category}
        </p>

        <Link to={`/products/${product.slug}`}>
          <h3 className="text-base font-bold text-brand-blue transition-colors group-hover:text-brand-red">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-xs text-text-secondary">
          SKU: {product.sku}
        </p>

        {/* Product Action */}
        <div className="mt-auto pt-5">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition-colors hover:text-brand-red"
          >
            View Product
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
