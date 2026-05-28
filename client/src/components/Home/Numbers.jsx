import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

/* ─── Stats data ─── */
const stats = [
  {
    value: 99,
    suffix: '%',
    accent: '+',
    label: 'On-Time Delivery',
    duration: 2000,
  },
  {
    prefix: '',
    value: 24,
    separator: '/',
    value2: 7,
    accent: '',
    label: 'Operations, Dispatch + Visibility',
    duration: 1500,
  },
  {
    value: 3.7,
    suffix: 'M',
    accent: '+',
    label: 'Square Feet of Warehouse Space',
    decimals: 1,
    duration: 2000,
  },
  {
    value: 50,
    suffix: 'K',
    accent: '+',
    label: 'Truckloads Per Month',
    duration: 1800,
  },
  {
    value: 6000,
    suffix: '',
    accent: '+',
    label: 'ITS Transportation Assets',
    useComma: true,
    duration: 2200,
  },
  {
    value: 15,
    suffix: 'M',
    accent: '+',
    label: 'Omnichannel Units Fulfilled Per Month',
    duration: 1800,
  },
];

/* ─── Animated counter hook ─── */
function useCountUp(target, duration, start, decimals = 0) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, start, decimals]);

  return count;
}

/* ─── Single stat display ─── */
const StatItem = ({ stat, isVisible, index }) => {
  const count = useCountUp(stat.value, stat.duration, isVisible, stat.decimals || 0);
  const count2 = useCountUp(stat.value2 || 0, stat.duration, isVisible);

  const formatNumber = (num) => {
    if (stat.useComma) return num.toLocaleString();
    if (stat.decimals) return num.toFixed(stat.decimals);
    return num;
  };

  return (
    <div
      className="flex flex-col items-center md:items-start"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Number */}
      <div className="flex items-baseline">
        <span
          className="text-white font-black text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-none tracking-tight"
          style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}
        >
          {formatNumber(count)}
        </span>

        {/* Suffix (%, K, M) */}
        {stat.suffix && (
          <span
            className="text-white font-black text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-none"
            style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}
          >
            {stat.suffix}
          </span>
        )}

        {/* Separator for 24/7 */}
        {stat.separator && (
          <>
            <span
              className="text-[#FF6B00] font-black text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-none italic mx-0.5"
              style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}
            >
              {stat.separator}
            </span>
            <span
              className="text-white font-black text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] leading-none"
              style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}
            >
              {count2}
            </span>
          </>
        )}

        {/* Accent symbol (+) */}
        {stat.accent && (
          <span
            className="text-[#FF6B00] font-black text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-none ml-0.5"
            style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}
          >
            {stat.accent}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="mt-2 text-[#B0B0B0] text-[11px] sm:text-[12px] md:text-[13px] tracking-wide text-center md:text-left">
        {stat.label}
      </p>
    </div>
  );
};

/* ─── Numbers Section ─── */
const Numbers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer — trigger count animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when scrolled away so it re-animates on return
          setIsVisible(false);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0F0F0F] py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">

        {/* ── Heading + CTA ── */}
        <div className="max-w-[600px] mb-14 md:mb-20">
          <h2
            className="text-white/90 text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem]
              leading-[1.2] font-light tracking-tight"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            We deliver excellence in execution, technology, and
            capacity—driven by people.
          </h2>

          {/* Contact Us CTA */}
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 group/cta"
          >
            <span className="
              flex items-center justify-center w-9 h-9 rounded-full
              border-2 border-[#FF6B00]/40 bg-[#FF6B00]/10
              group-hover/cta:bg-[#FF6B00] group-hover/cta:border-[#FF6B00]
              transition-all duration-300
            ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-[#FF6B00] group-hover/cta:text-[#0F0F0F] transition-colors duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-white text-[14px] md:text-[15px] font-semibold tracking-wide
              group-hover/cta:text-[#FF6B00] transition-colors duration-300">
              Contact Us
            </span>
          </Link>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16 lg:gap-x-16">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;