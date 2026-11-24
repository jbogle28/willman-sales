import willmanLogo from '../../assets/images/willman-logo.png';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
      setSearch('');
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/products#categories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top information bar */}
      <div className="hidden bg-brand-blue text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p>Supplying businesses with quality office essentials.</p>

          <a
            href="/contact"
            className="flex items-center gap-2 transition hover:text-red-200"
          >
            <Phone size={13} />
            Contact Our Team
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-6">

          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
          <img
            src={willmanLogo}
            alt="Willman Sales Company LTD"
            className="h-16 w-16 object-contain"
          />

            <div className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-brand-blue">
                WILLMAN SALES
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-text-secondary">
                Company Limited
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-red'
                      : 'text-text-primary hover:text-brand-red'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop search */}
          <form
            onSubmit={handleSearch}
            className="hidden items-center rounded-md border border-border bg-surface px-3 py-2 xl:flex"
          >
            <Search size={17} className="text-text-secondary" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-36 bg-transparent pl-2 text-sm outline-none placeholder:text-text-secondary"
            />
          </form>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-md p-2 text-brand-blue hover:bg-surface lg:hidden"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-border bg-white px-5 py-5 lg:hidden">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-border py-3 text-sm font-semibold ${
                      isActive ? 'text-brand-red' : 'text-text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <form
              onSubmit={handleSearch}
              className="mt-5 flex items-center rounded-md border border-border bg-surface px-3 py-3"
            >
              <Search size={18} className="text-text-secondary" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent pl-3 text-sm outline-none"
              />
              <button
                type="submit"
                className="text-sm font-semibold text-brand-blue"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>
    </>
  );
}
