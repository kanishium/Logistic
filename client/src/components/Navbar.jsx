import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'OUR CULTURE', to: '/culture' },
  { label: 'SERVICES', to: '/services' },
  { label: 'TECHNOLOGY', to: '/technology' },
  { label: 'OUR COMPANY', to: '/company' },
  { label: 'NEWS + RESOURCES', to: '/news' },
];

const MAIN_NAV_HEIGHT = 72; // px

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Track scroll for shadow effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e) => {
      if (
        drawerRef.current && !drawerRef.current.contains(e.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (to) => location.pathname === to;

  return (
    <>
      {/* ── Fixed wrapper ── */}
      <div className="fixed top-0 left-0 w-full z-[60]">
        {/* ── Main Navbar ── */}
        <nav
          className={`
            w-full bg-[#0F0F0F] border-b border-white/5
            ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : ''}
          `}
        >
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-10 h-[72px]">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-1 group shrink-0" aria-label="ShipNex Home">
              <div className="flex flex-col leading-none select-none">
                <span
                  className="text-[#FF6B00] font-black italic text-[28px] tracking-tight leading-[1]"
                  style={{ fontFamily: "'Trebuchet MS', 'Arial Black', sans-serif" }}
                >
                  ShipNex
                </span>
                <span
                  className="text-white text-[9px] font-semibold tracking-[0.22em] uppercase leading-[1.2]"
                >
                  logistics
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`
                      relative px-3 xl:px-4 py-2 text-[11.5px] xl:text-[12.5px] font-bold tracking-[0.08em] uppercase
                      transition-colors duration-200
                      ${isActive(to)
                        ? 'text-[#FF6B00]'
                        : 'text-[#B0B0B0] hover:text-white'
                      }
                    `}
                  >
                    {label}
                    {/* Active indicator bar */}
                    <span
                      className={`
                        absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full
                        bg-[#FF6B00] transition-all duration-300
                        ${isActive(to) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                      `}
                    />
                    {/* Hover indicator bar */}
                    {!isActive(to) && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-white/20
                          opacity-0 scale-x-0 group-hover:opacity-0 transition-all duration-300
                          hover:opacity-100 hover:scale-x-100"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── CTA Buttons (Desktop) ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/company"
                className="
                  relative px-5 py-2 text-[11px] font-bold tracking-[0.06em] uppercase
                  text-white border border-white/30 rounded-sm
                  overflow-hidden group/btn
                  transition-all duration-300
                  hover:border-[#FF6B00] hover:text-[#FF6B00]
                "
              >
                <span className="relative z-10">Join Our Team</span>
                <span className="absolute inset-0 bg-[#FF6B00]/5 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to="/contact"
                className="
                  px-5 py-2 text-[11px] font-bold tracking-[0.06em] uppercase
                  bg-[#FF6B00] text-[#0F0F0F] rounded-sm
                  transition-all duration-300
                  hover:bg-[#FF8533] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]
                "
              >
                Contact Us
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              ref={hamburgerRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group/ham"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center
                  ${mobileOpen ? 'rotate-45 translate-y-[7px]' : 'group-hover/ham:w-7'}`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300
                  ${mobileOpen ? 'opacity-0 scale-x-0' : 'group-hover/ham:w-5'}`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center
                  ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : 'group-hover/ham:w-7'}`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile Overlay ── */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300 lg:hidden
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* ── Mobile Drawer ── */}
      <div
        ref={drawerRef}
        className="fixed right-0 z-50 w-[min(320px,85vw)] bg-[#1A1A1A] border-l border-white/5
          transition-transform duration-300 ease-out lg:hidden overflow-y-auto"
        style={{
          top: `${MAIN_NAV_HEIGHT}px`,
          height: `calc(100vh - ${MAIN_NAV_HEIGHT}px)`,
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map(({ label, to }, i) => (
            <li key={to}>
              <Link
                to={to}
                className={`
                  block px-7 py-4 text-[13px] font-bold tracking-[0.08em] uppercase
                  border-b border-white/5 transition-all duration-200
                  ${isActive(to)
                    ? 'text-[#FF6B00] bg-[#FF6B00]/5 border-l-2 border-l-[#FF6B00]'
                    : 'text-[#B0B0B0] hover:text-white hover:bg-white/[0.03] hover:pl-9'
                  }
                `}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTA Buttons */}
        <div className="flex flex-col gap-3 px-7 pt-4 pb-8">
          <Link
            to="/company"
            className="
              flex items-center justify-center px-5 py-3 text-[12px] font-bold tracking-[0.06em] uppercase
              text-white border border-white/30 rounded-sm
              transition-all duration-300 hover:border-[#FF6B00] hover:text-[#FF6B00]
            "
          >
            Join Our Team
          </Link>
          <Link
            to="/contact"
            className="
              flex items-center justify-center px-5 py-3 text-[12px] font-bold tracking-[0.06em] uppercase
              bg-[#FF6B00] text-[#0F0F0F] rounded-sm font-bold
              transition-all duration-300 hover:bg-[#FF8533]
            "
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Spacer — prevents content from hiding behind the fixed navbar */}
      <div style={{ height: `${MAIN_NAV_HEIGHT}px` }} />
    </>
  );
};

export default Navbar;