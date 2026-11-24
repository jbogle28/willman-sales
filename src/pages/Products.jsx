
import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

import ProductsHero from '../components/products/ProductsHero';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';

import products from '../data/products';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(
    'All Categories'
  );
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase().trim();

      result = result.filter((product) =>
        [
          product.name,
          product.sku,
          product.brand,
          product.description,
        ].some((value) =>
          value?.toLowerCase().includes(query)
        )
      );
    }

    // Category
    if (selectedCategory !== 'All Categories') {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sorting
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'featured') {
      result.sort(
        (a, b) => Number(b.featured) - Number(a.featured)
      );
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  // Clear filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchTerm.trim() !== '' ||
    selectedCategory !== 'All Categories';

  return (
    <>
      <ProductsHero />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">

        {/* Mobile Search and Filters */}
        <div className="mb-8 space-y-4 lg:hidden">

          <div className="relative">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products by name or SKU..."
              className="h-12 w-full border border-border bg-white pl-12 pr-4 text-sm outline-none focus:border-brand-blue"
            />
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="flex h-12 w-full items-center justify-center gap-3 border border-brand-blue text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            <SlidersHorizontal size={18} />
            Filters & Sorting
          </button>

        </div>

        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">

          <ProductFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />

          <ProductGrid
            products={filteredProducts}
            selectedCategory={selectedCategory}
            hasActiveFilters={hasActiveFilters}
            onClearFilters={clearFilters}
          />

        </div>
      </section>
    </>
  );
}
