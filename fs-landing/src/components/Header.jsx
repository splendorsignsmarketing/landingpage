import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  {
    label: 'Portfolio',
    children: [
      { label: 'All', href: '#portfolio' },
      { label: 'Public Works & Industrial', href: '#portfolio' },
      { label: 'Aviation', href: '#portfolio' },
      { label: 'Commercial', href: '#portfolio' },
      { label: 'Healthcare', href: '#portfolio' },
      { label: 'Institutional', href: '#portfolio' },
    ],
  },
  {
    label: 'Firm',
    children: [
      { label: 'About', href: '#about' },
      { label: 'Our Team', href: '#' },
      { label: 'Meet Our Team', href: '#' },
      { label: 'Join Our Team', href: '#' },
      { label: 'News and Design Blog', href: '#' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'List of Services', href: '#' },
      { label: 'Expertise', href: '#' },
    ],
  },
  {
    label: 'Awards',
    children: [
      { label: 'Featured', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
  },
  {
    label: 'ESG & Sustainability',
    children: [
      { label: 'Overview', href: '#' },
      { label: 'Environment', href: '#' },
      { label: 'Social', href: '#' },
      { label: 'Governance', href: '#' },
    ],
  },
  {
    label: 'Art & Inspiration',
    href: '#',
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (idx) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-charcoal/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center text-white font-heading font-bold text-lg tracking-wider group-hover:bg-brand-red-dark transition-colors">
            FS
          </div>
          <div className="hidden sm:block">
            <span className="text-white font-heading text-sm tracking-[0.25em] uppercase block leading-tight">
              F S Group
            </span>
            <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase block">
              Architects
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item, idx) =>
            item.children ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-3 py-2 text-white/90 hover:text-white text-[11px] font-body tracking-[0.15em] uppercase transition-colors flex items-center gap-1">
                  {item.label}
                  <svg className={`w-3 h-3 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`absolute top-full left-0 mt-0 min-w-[220px] bg-brand-charcoal/95 backdrop-blur-md border border-white/10 rounded-sm shadow-xl transition-all origin-top ${
                    openDropdown === idx
                      ? 'opacity-100 scale-y-100 pointer-events-auto'
                      : 'opacity-0 scale-y-95 pointer-events-none'
                  }`}
                >
                  {item.children.map((child, cidx) => (
                    <a
                      key={cidx}
                      href={child.href}
                      className="block px-5 py-2.5 text-white/70 hover:text-white hover:bg-white/5 text-[11px] tracking-[0.1em] uppercase transition-colors first:pt-3 last:pb-3"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={idx}
                href={item.href}
                className="px-3 py-2 text-white/90 hover:text-white text-[11px] font-body tracking-[0.15em] uppercase transition-colors"
              >
                {item.label}
              </a>
            )
          )}

          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-[11px] font-body tracking-[0.2em] uppercase transition-all rounded-sm shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-brand-charcoal/98 backdrop-blur-md transition-all duration-300 overflow-y-auto ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="px-6 py-8 space-y-1">
          {NAV_ITEMS.map((item, idx) =>
            item.children ? (
              <div key={idx}>
                <button
                  className="w-full text-left px-4 py-3 text-white/80 text-xs tracking-[0.2em] uppercase font-body flex items-center justify-between"
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                >
                  {item.label}
                  <svg className={`w-4 h-4 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === idx && (
                  <div className="pl-6 space-y-0.5">
                    {item.children.map((child, cidx) => (
                      <a
                        key={cidx}
                        href={child.href}
                        className="block px-4 py-2 text-white/50 hover:text-white text-[11px] tracking-[0.1em] uppercase"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={idx}
                href={item.href}
                className="block px-4 py-3 text-white/80 text-xs tracking-[0.2em] uppercase font-body"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            )
          )}
          <div className="pt-4 px-4">
            <a
              href="#contact"
              className="block text-center px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white text-xs tracking-[0.2em] uppercase transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
