
import { useEffect, useState } from 'react';
import {
  PackageOpen,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import ProductCard from './ProductCard';

const PRODUCTS_PER_PAGE = 9;

export default function ProductGrid({
  products,
  selectedCategory,
  hasActiveFilters,
  onClearFilters,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset pagination when the results change
  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const startResult = products.length === 0
    ? 0
    : startIndex + 1;

  const endResult = Math.min(
    startIndex + PRODUCTS_PER_PAGE,
    products.length
  );

  const goToPage = (page) => {
    setCurrentPage(
      Math.max(1, Math.min(page, totalPages))
    );

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>

      {/* Results Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
        <div>
          <h2 className="text-xl font-bold text-brand-blue">
            {selectedCategory === 'All Categories'
              ? 'All Products'
              : selectedCategory}
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Showing {startResult}–{endResult} of {products.length}{' '}
            {products.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-sm font-semibold text-brand-red transition hover:text-brand-blue"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Product Cards */}
      {currentProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">

              {/* Previous */}
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-10 items-center gap-2 border border-border px-3 text-sm font-semibold text-brand-blue transition hover:border-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={17} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Page Numbers */}
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                  className={`h-10 min-w-10 border px-3 text-sm font-bold transition ${
                    currentPage === page
                      ? 'border-brand-blue bg-brand-blue text-white'
                      : 'border-border text-brand-blue hover:border-brand-blue hover:bg-surface'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next */}
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-10 items-center gap-2 border border-border px-3 text-sm font-semibold text-brand-blue transition hover:border-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={17} />
              </button>

            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="flex min-h-[350px] flex-col items-center justify-center border border-dashed border-border px-6 text-center">

          <div className="mb-5 flex h-16 w-16 items-center justify-center bg-surface text-brand-blue">
            <PackageOpen size={30} strokeWidth={1.4} />
          </div>

          <h3 className="text-lg font-bold text-brand-blue">
            No Products Found
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">
            We couldn't find any products matching your search.
            Try adjusting your search or selecting another category.
          </p>

          <button
            type="button"
            onClick={onClearFilters}
            className="mt-6 bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-[#102744]"
          >
            Clear Filters
          </button>

        </div>
      )}

    </div>
  );
}
