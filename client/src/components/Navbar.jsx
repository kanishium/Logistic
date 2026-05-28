import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'OUR CULTURE', to: '/culture' },
  { label: 'SERVICES', to: '/services' },
  { label: 'CARRIERS', to: '/carriers' },
  { label: 'TECHNOLOGY', to: '/technology' },
  { label: 'OUR COMPANY', to: '/company' },
  { label: 'NEWS + RESOURCES', to: '/news' },
];

const topBarLinks = [
  { label: 'ITS Engage Login', to: '/engage-login' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Media Requests', to: '/media' },
];

const TOP_BAR_HEIGHT = 40; // px
const MAIN_NAV_HEIGHT = 72; // px

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);
  const lastScrollY = useRef(0);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Hide top bar on scroll down, show on scroll to top
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);

      if (currentY <= 5) {
        // At the very top — always show top bar
        setTopBarVisible(true);
      } else if (currentY > lastScrollY.current && currentY > TOP_BAR_HEIGHT) {
        // Scrolling down — hide top bar
        setTopBarVisible(false);
      }
      // Scrolling up — keep top bar hidden (only show at top)

      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
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

  // Dynamic top offset for main nav
  const mainNavTop = topBarVisible ? TOP_BAR_HEIGHT : 0;
  const totalHeight = topBarVisible ? TOP_BAR_HEIGHT + MAIN_NAV_HEIGHT : MAIN_NAV_HEIGHT;

  return (
    <>
      {/* ═══════════════════════════════════════════ */}
      {/* ── Top Utility Bar ── */}
      {/* ═══════════════════════════════════════════ */}
      <div
        className={`
          fixed top-0 left-0 w-full z-[60]
          transition-transform duration-300 ease-out
          ${topBarVisible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {/* Orange accent line at very top */}
        <div className="h-[3px] bg-[#FF6B00] w-full" />

        {/* Utility bar content */}
        <div className="bg-[#1A1A1A] border-b border-white/5">
          <div className="max-w-[1440px] mx-auto flex items-center justify-end px-6 lg:px-10 h-[37px] gap-1">
            {topBarLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="
                  px-3 py-1 text-[12px] tracking-[0.02em]
                  text-[#B0B0B0] hover:text-white
                  transition-colors duration-200
                "
              >
                {label}
              </Link>
            ))}

            {/* Search Icon */}
            <button
              className="ml-2 p-1.5 text-[#B0B0B0] hover:text-white transition-colors duration-200"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[16px] h-[16px]"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* ── Main Navbar ── */}
      {/* ═══════════════════════════════════════════ */}
      <nav
        className={`
          fixed left-0 w-full z-50
          bg-[#0F0F0F] border-b border-white/5
          transition-all duration-300
          ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : ''}
        `}
        style={{ top: `${mainNavTop}px` }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-10 h-[72px]">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-1 group shrink-0" aria-label="ITS Logistics Home">
            <div className="flex flex-col leading-none select-none">
              <span
                className="text-[#FF6B00] font-black italic text-[28px] tracking-tight leading-[1]"
                style={{ fontFamily: "'Trebuchet MS', 'Arial Black', sans-serif" }}
              >
                its
              </span>
              <span
                className="text-white text-[9px] font-semibold tracking-[0.22em] uppercase leading-[1.2]"
              >
                logistics
              </span>
              <span
                className="text-white/40 text-[6.5px] tracking-[0.12em] leading-[1.6]"
              >
                An <span className="font-bold text-white/50">ECHO</span> Company
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
              to="/join"
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
              to="/carrier-signup"
              className="
                px-5 py-2 text-[11px] font-bold tracking-[0.06em] uppercase
                bg-[#FF6B00] text-[#0F0F0F] rounded-sm
                transition-all duration-300
                hover:bg-[#FF8533] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]
              "
            >
              Carrier Sign Up
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
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
          transform transition-all duration-300 ease-out lg:hidden overflow-y-auto"
        style={{
          top: `${mainNavTop + MAIN_NAV_HEIGHT}px`,
          height: `calc(100vh - ${mainNavTop + MAIN_NAV_HEIGHT}px)`,
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
            to="/join"
            className="
              flex items-center justify-center px-5 py-3 text-[12px] font-bold tracking-[0.06em] uppercase
              text-white border border-white/30 rounded-sm
              transition-all duration-300 hover:border-[#FF6B00] hover:text-[#FF6B00]
            "
          >
            Join Our Team
          </Link>
          <Link
            to="/carrier-signup"
            className="
              flex items-center justify-center px-5 py-3 text-[12px] font-bold tracking-[0.06em] uppercase
              bg-[#FF6B00] text-[#0F0F0F] rounded-sm font-bold
              transition-all duration-300 hover:bg-[#FF8533]
            "
          >
            Carrier Sign Up
          </Link>
        </div>

        {/* Mobile utility links */}
        <div className="border-t border-white/5 px-7 py-4 flex flex-col gap-2">
          {topBarLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-[12px] text-[#B0B0B0] hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer to push content below fixed navbar */}
      <div style={{ height: `${totalHeight}px` }} className="transition-all duration-300" />
    </>
  );
};

export default Navbar;