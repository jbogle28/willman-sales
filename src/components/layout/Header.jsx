
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
      {/* Top Information Bar */}
      <div className="hidden bg-brand-blue text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p>Supplying businesses with quality office essentials.</p>

          <Link
            to="/contact"
            className="flex items-center gap-2 transition hover:text-red-200"
          >
            <Phone size={13} />
            Contact Our Team
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-white">
        <div className="mx-auto flex min-h-[66px] max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-5 md:min-h-0 md:gap-6 md:px-6 md:py-3">

          {/* Logo */}
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={willmanLogo}
              alt="Willman Sales Company LTD"
              className="h-[48px] w-[48px] shrink-0 object-contain md:h-16 md:w-16"
            />

            <div className="leading-tight">
              <span className="block whitespace-nowrap text-[14px] font-extrabold tracking-tight text-brand-blue md:text-lg">
                WILLMAN SALES
              </span>

              <span className="mt-1 block whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.13em] text-text-secondary md:text-[10px] md:tracking-[0.17em]">
                Company Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop Search */}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="shrink-0 rounded-md p-2 text-brand-blue hover:bg-surface lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-border bg-white px-5 py-4 lg:hidden">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-border py-3 text-[14px] font-semibold ${
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
