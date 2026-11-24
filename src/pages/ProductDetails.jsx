import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Package,
  Phone,
} from 'lucide-react';

import products from '../data/products';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetails() {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );

  // Product not found
  if (!product) {
    return (
      <section className="min-h-[60vh] px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Package
            size={56}
            className="mx-auto text-gray-300"
          />

          <h1 className="mt-6 text-3xl font-bold text-brand-blue">
            Product Not Found
          </h1>

          <p className="mt-3 text-text-secondary">
            Sorry, we couldn't find the product you're looking for.
            It may have been moved or is no longer available.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white transition hover:bg-brand-blue/90"
          >
            <ArrowLeft size={18} />
            Return to Catalogue
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <>
      {/* Breadcrumbs */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
            <Link
              to="/"
              className="transition hover:text-brand-blue"
            >
              Home
            </Link>

            <ChevronRight size={15} />

            <Link
              to="/products"
              className="transition hover:text-brand-blue"
            >
              Products
            </Link>

            <ChevronRight size={15} />

            <span className="font-medium text-brand-blue">
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Product Information */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">

          {/* Product Image */}
          <div className="flex min-h-[350px] items-center justify-center overflow-hidden rounded-lg border border-border bg-surface md:min-h-[500px]">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full max-h-[550px] w-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center gap-4 text-gray-400">
                <Package size={80} strokeWidth={1.2} />
                <span className="text-sm">
                  Product image coming soon
                </span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <Link
              to={`/products?category=${encodeURIComponent(product.category)}`}
              className="mb-5 w-fit text-sm font-semibold uppercase tracking-wider text-brand-red hover:underline"
            >
              {product.category}
            </Link>

            <h1 className="text-3xl font-bold leading-tight text-brand-blue md:text-4xl">
              {product.name}
            </h1>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-b border-border pb-6 text-sm text-text-secondary">
              <span>
                SKU: <strong className="text-text-primary">{product.sku}</strong>
              </span>

              {product.brand && (
                <span>
                  Brand: <strong className="text-text-primary">{product.brand}</strong>
                </span>
              )}
            </div>

            <div className="py-7">
              <h2 className="mb-3 text-lg font-semibold text-brand-blue">
                Product Description
              </h2>

              <p className="leading-7 text-text-secondary">
                {product.description}
              </p>
            </div>

            <div className="rounded-lg bg-surface p-6">
              <h2 className="text-lg font-semibold text-brand-blue">
                Interested in this product?
              </h2>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Contact our sales team for product information,
                availability, and assistance with your business needs.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 font-semibold text-white transition hover:bg-brand-blue/90 sm:w-auto"
              >
                <Phone size={18} />
                Contact Sales
                <ArrowRight size={17} />
              </Link>
            </div>

            <Link
              to="/products"
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-red"
            >
              <ArrowLeft size={17} />
              Back to Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-border bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
                  You May Also Like
                </p>

                <h2 className="mt-2 text-2xl font-bold text-brand-blue md:text-3xl">
                  Related Products
                </h2>
              </div>

              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-red"
              >
                View Category
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}