import React, { useState, useEffect, useRef } from 'react';

/* ─── Timeline data ─── */
const points = [
  {
    number: '01',
    title: 'Yes is our starting line',
    description:
      'We embrace a good challenge and take pride in our innovative approach. Every solution ITS provides is custom-built for your unique need.',
    detail:
      'From complex supply chain networks to last-mile delivery, we say "yes" first and then engineer the path forward. Our team thrives on solving problems others walk away from—turning obstacles into opportunities that drive measurable results for our partners.',
  },
  {
    number: '02',
    title: 'Our approach is simple',
    description:
      'We deliver excellence in execution, technology, and capacity—driven by people.',
    detail:
      'Simplicity is at the heart of everything we do. We cut through complexity with streamlined processes, real-time visibility tools, and a relentless focus on what matters most: moving your goods on time, every time. No unnecessary layers, no excuses—just results.',
  },
  {
    number: '03',
    title: 'People are our foundation',
    description:
      'Our people and culture drive our success. We take the time to build relationships with customers in ways that others don\'t. We are your team.',
    detail:
      'Behind every shipment is a dedicated team that knows your business inside and out. We invest in our people so they can invest in you—with 24/7 support, proactive communication, and a genuine commitment to your long-term growth.',
  },
];

const Culture = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const pointRefs = useRef([]);
  const [visiblePoints, setVisiblePoints] = useState([false, false, false]);
  const rafId = useRef(null);

  /* ─── Observe each point for reveal ─── */
  useEffect(() => {
    const observers = pointRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisiblePoints((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  /* ─── Scroll-driven line — direct DOM mutation, no setState ─── */
  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const line = lineRef.current;
      if (!section || !line) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const scrolledInto = windowH - rect.top;
      const total = rect.height + windowH * 0.3;
      const progress = Math.max(0, Math.min(1, scrolledInto / total));

      line.style.height = `${progress * 100}%`;
      rafId.current = requestAnimationFrame(update);
    };

    rafId.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0F0F0F] py-10 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* ── Decorative Curved Path ── */}
      <div className="absolute top-0 left-0 w-[140px] md:w-[220px] lg:w-[300px] h-full pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 300 1000"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-60 0 C-60 200, 100 300, 80 500 C60 700, -40 800, -60 1000"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2"
          />
          <path
            d="M-30 0 C-30 180, 130 320, 110 500 C90 680, -10 780, -30 1000"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* ── Main Content ── */}
      <div className="relative max-w-[900px] mx-auto px-6 lg:px-10">
        <div className="flex">

          {/* ── Timeline Track ── */}
          <div className="relative flex-shrink-0 w-8 md:w-10 mr-8 md:mr-14">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/8" />

            {/* Progress line — mutated directly via ref, no re-renders */}
            <div
              ref={lineRef}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#FF6B00]/70 via-[#FFD700]/50 to-[#FF6B00]/20 will-change-[height]"
              style={{ height: '0%' }}
            />

            {/* Yellow Dots */}
            {points.map((_, i) => {
              const topPercent = ((2 * i + 1) / (2 * points.length)) * 100;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 w-[14px] h-[14px] rounded-full bg-[#FF6B00]
                    shadow-[0_0_10px_rgba(255,215,0,0.5)] z-10 will-change-transform"
                  style={{
                    top: `${topPercent}%`,
                    transform: `translate(-50%, -50%) scale(${visiblePoints[i] ? 1 : 0})`,
                    opacity: visiblePoints[i] ? 1 : 0,
                    transition: 'transform 400ms ease-out, opacity 400ms ease-out',
                  }}
                />
              );
            })}
          </div>

          {/* ── Points Column ── */}
          <div className="flex-1 flex flex-col">
            {points.map((point, i) => {
              const v = visiblePoints[i];

              return (
                <div
                  key={point.number}
                  ref={(el) => (pointRefs.current[i] = el)}
                  className="py-14 md:py-20 lg:py-24 will-change-transform"
                  style={{
                    opacity: v ? 1 : 0,
                    transform: v ? 'translate3d(0,0,0)' : 'translate3d(0,30px,0)',
                    transition: 'opacity 450ms ease-out, transform 450ms ease-out',
                  }}
                >
                  {/* Title */}
                  <h3
                    className="text-white text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem]
                      leading-[1.1] tracking-tight will-change-transform"
                    style={{
                      fontFamily: "'Georgia', 'Playfair Display', serif",
                      fontWeight: 900,
                      fontStyle: 'italic',
                      opacity: v ? 1 : 0,
                      transform: v ? 'translate3d(0,0,0)' : 'translate3d(0,16px,0)',
                      transition: 'opacity 400ms ease-out, transform 400ms ease-out',
                      transitionDelay: v ? '80ms' : '0ms',
                    }}
                  >
                    {point.title}
                  </h3>

                  {/* Number */}
                  <span
                    className="block mt-5 md:mt-7 text-[#B0B0B0]/40 font-black text-[1.8rem] md:text-[2.2rem] tracking-[0.15em] will-change-transform"
                    style={{
                      fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
                      opacity: v ? 1 : 0,
                      transform: v ? 'translate3d(0,0,0)' : 'translate3d(0,12px,0)',
                      transition: 'opacity 400ms ease-out, transform 400ms ease-out',
                      transitionDelay: v ? '160ms' : '0ms',
                    }}
                  >
                    {point.number}
                  </span>

                  {/* Description */}
                  <p
                    className="mt-4 md:mt-5 text-[#B0B0B0] text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed max-w-[560px] will-change-transform"
                    style={{
                      opacity: v ? 1 : 0,
                      transform: v ? 'translate3d(0,0,0)' : 'translate3d(0,12px,0)',
                      transition: 'opacity 400ms ease-out, transform 400ms ease-out',
                      transitionDelay: v ? '240ms' : '0ms',
                    }}
                  >
                    {point.description}
                  </p>

                  {/* Detail */}
                  <p
                    className="mt-3 md:mt-4 text-white/40 text-[13px] md:text-[14px] leading-relaxed max-w-[560px] will-change-transform"
                    style={{
                      opacity: v ? 1 : 0,
                      transform: v ? 'translate3d(0,0,0)' : 'translate3d(0,12px,0)',
                      transition: 'opacity 400ms ease-out, transform 400ms ease-out',
                      transitionDelay: v ? '320ms' : '0ms',
                    }}
                  >
                    {point.detail}
                  </p>

                  {/* Divider */}
                  {i < points.length - 1 && (
                    <div
                      className="mt-14 md:mt-20 h-[1px] max-w-[500px] bg-gradient-to-r from-white/10 to-transparent will-change-transform"
                      style={{
                        opacity: v ? 1 : 0,
                        transform: v ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'opacity 400ms ease-out, transform 400ms ease-out',
                        transitionDelay: v ? '400ms' : '0ms',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
