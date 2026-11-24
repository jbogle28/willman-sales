
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  X,
} from 'lucide-react';

export default function ProductFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  isMobileOpen,
  setIsMobileOpen,
}) {
  const categories = [
    'All Categories',
    'Executive Offices',
    'Appliances & Electronics',
    'Reception Areas',
    'Educational Institutions',
    'Commercial Cleaning',
    'Government & Institutions',
  ];

  return (
    <>
      {/* Desktop Filters */}
      <aside className="hidden space-y-6 lg:block">

        {/* Search */}
        <div>
          <label
            htmlFor="product-search"
            className="mb-3 block text-sm font-bold text-brand-blue"
          >
            Search Products
          </label>

          <div className="relative">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
            />

            <input
              id="product-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, SKU or brand..."
              className="h-12 w-full border border-border bg-white pl-12 pr-10 text-sm text-text-primary outline-none transition placeholder:text-text-secondary focus:border-brand-blue"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-brand-red"
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>

        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <SortFilter
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

      </aside>

      {/* Mobile Filter Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">

          {/* Overlay */}
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setIsMobileOpen(false)}
            className="absolute inset-0 bg-black/50"
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl">

            <div className="flex items-center justify-between border-b border-border px-5 py-5">
              <h2 className="text-lg font-bold text-brand-blue">
                Product Filters
              </h2>

              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close filters"
                className="text-text-secondary hover:text-brand-red"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 space-y-7 overflow-y-auto p-5">

              {/* Mobile Search */}
              <div>
                <label
                  htmlFor="mobile-product-search"
                  className="mb-3 block text-sm font-bold text-brand-blue"
                >
                  Search Products
                </label>

                <div className="relative">
                  <Search
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                  />

                  <input
                    id="mobile-product-search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="h-12 w-full border border-border bg-white pl-12 pr-4 text-sm outline-none focus:border-brand-blue"
                  />
                </div>
              </div>

              <CategoryFilters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              <SortFilter
                sortBy={sortBy}
                setSortBy={setSortBy}
              />

            </div>

            <div className="border-t border-border p-5">
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="w-full bg-brand-blue py-4 text-sm font-bold text-white transition hover:bg-[#102744]"
              >
                Show Results
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

function CategoryFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="border border-border bg-white">

      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <SlidersHorizontal
          size={18}
          className="text-brand-red"
        />

        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
          Categories
        </h2>
      </div>

      <div className="p-3">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`mb-1 flex w-full items-center justify-between px-3 py-3 text-left text-sm transition ${
                isSelected
                  ? 'bg-brand-blue font-semibold text-white'
                  : 'text-text-secondary hover:bg-surface hover:text-brand-blue'
              }`}
            >
              <span>{category}</span>

              {isSelected && (
                <span className="text-white">✓</span>
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
}

function SortFilter({ sortBy, setSortBy }) {
  return (
    <div>
      <label
        htmlFor="sort-products"
        className="mb-3 block text-sm font-bold text-brand-blue"
      >
        Sort Products
      </label>

      <div className="relative">
        <select
          id="sort-products"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="h-12 w-full appearance-none border border-border bg-white px-4 pr-10 text-sm font-medium text-brand-blue outline-none focus:border-brand-blue"
        >
          <option value="featured">Featured</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary"
        />
      </div>
    </div>
  );
}
