import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
// Video served from public/ folder — not bundled by Vite
const heroVideo = '/HeroSectionvideo.mp4';

/* ─── Service items for the bottom selector ─── */
const services = [
    {
        id: 'drayage',
        label: 'DRAYAGE + INTERMODAL',
        description: 'Streamlined port-to-door container movement with nationwide intermodal reach.',
        link: '/services/drayage',
    },
    {
        id: 'truckload',
        label: 'TRUCKLOAD',
        description: 'Delivering supply chain value when and where you need it most.',
        link: '/services/truckload',
    },
    {
        id: 'distribution',
        label: 'DISTRIBUTION + FULFILLMENT',
        description: 'Scalable warehousing and fulfillment solutions across the country.',
        link: '/services/distribution',
    },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Default to middle (Truckload)
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [ballStyle, setBallStyle] = useState({});
    const itemRefs = useRef([]);
    const trackRef = useRef(null);

    const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    /* ─── Calculate ball position ─── */
    const updateBallPosition = useCallback((index) => {
        const item = itemRefs.current[index];
        const track = trackRef.current;
        if (!item || !track) return;

        const trackRect = track.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const centerX = itemRect.left + itemRect.width / 2 - trackRect.left;

        setBallStyle({
            left: `${centerX}px`,
            transform: 'translateX(-50%)',
        });
    }, []);

    /* ─── Update ball when active/hovered changes ─── */
    useEffect(() => {
        updateBallPosition(currentIndex);
    }, [currentIndex, updateBallPosition]);

    /* ─── Recalculate on resize ─── */
    useEffect(() => {
        const onResize = () => updateBallPosition(currentIndex);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [currentIndex, updateBallPosition]);

    return (
        <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden bg-[#0F0F0F]">

            {/* ═══════════════════════════════════════════ */}
            {/* ── Background Video ── */}
            {/* ═══════════════════════════════════════════ */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster=""
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Dark overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
            </div>

            {/* ═══════════════════════════════════════════ */}
            {/* ── Hero Content ── */}
            {/* ═══════════════════════════════════════════ */}
            <div className="relative z-10 flex flex-col justify-between h-full max-w-[1440px] mx-auto px-6 lg:px-10">

                {/* ── Main Heading Area ── */}
                <div className="flex flex-col justify-center flex-1 pt-20 md:pt-28">
                    <h1
                        className="text-white font-black uppercase leading-[0.92] tracking-tight
              text-[clamp(2.8rem,8vw,7rem)]"
                        style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}
                    >
                        SUPPLY CHAIN<br />
                        EXCELLENCE
                    </h1>

                    {/* CTA Link */}
                    <Link
                        to="/services"
                        className="mt-8 md:mt-10 inline-flex items-center gap-3 group/cta w-fit"
                    >
                        {/* Arrow circle */}
                        <span className="
              flex items-center justify-center w-9 h-9 rounded-full
              border-2 border-[#FF6B00] bg-[#FF6B00]/10
              group-hover/cta:bg-[#FF6B00] transition-all duration-300
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
                        <span className="text-white text-[14px] md:text-[16px] font-medium tracking-wide
              group-hover/cta:text-[#FF6B00] transition-colors duration-300">
                            Learn about our supply chain solutions
                        </span>
                    </Link>
                </div>

                {/* ═══════════════════════════════════════════ */}
                {/* ── Bottom Service Selector ── */}
                {/* ═══════════════════════════════════════════ */}
                <div className="pb-8 mt-17 md:pb-12">

                    {/* ── Track + Ball ── */}
                    <div ref={trackRef} className="relative w-full">
                        {/* Horizontal line */}
                        <div className="w-full h-[2px] bg-[#FF6B00]/60" />

                        {/* Animated orange ball */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full
                bg-[#FF6B00] shadow-[0_0_12px_rgba(255,107,0,0.5)]
                transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] z-10"
                            style={ballStyle}
                        />
                    </div>

                    {/* ── Service Labels (each with its own pop-up above) ── */}
                    <div className="flex justify-between items-start mt-0">
                        {services.map((service, i) => (
                            <div
                                key={service.id}
                                ref={(el) => (itemRefs.current[i] = el)}
                                className="relative flex-1 flex flex-col items-center"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setActiveIndex(i)}
                            >
                                {/* ── Pop-up content (appears above hovered label) ── */}
                                <div
                                    className={`
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-4
                    flex flex-col items-center w-[220px] md:w-[260px]
                    transition-all duration-300 ease-out pointer-events-none
                    ${hoveredIndex === i
                                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                                            : 'opacity-0 translate-y-3'
                                        }
                  `}
                                >
                                    <span className="text-white text-[13px] md:text-[14px] font-bold tracking-[0.04em] uppercase mb-1.5">
                                        {service.label}
                                    </span>
                                    <p className="text-[#B0B0B0] text-[11px] md:text-[12px] text-center leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link
                                        to={service.link}
                                        className="mt-2 text-white text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase
                      hover:text-[#FF6B00] transition-colors duration-200 pointer-events-auto"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        LEARN MORE
                                    </Link>
                                </div>

                                {/* ── Label button ── */}
                                <button
                                    className={`
                    w-full text-center px-2 py-4 cursor-pointer
                    text-[10px] sm:text-[11px] md:text-[13px] font-bold tracking-[0.08em] uppercase
                    transition-all duration-300
                    ${hoveredIndex === i
                                            ? 'text-white'
                                            : 'text-[#B0B0B0]/60 hover:text-[#B0B0B0]'
                                        }
                  `}
                                >
                                    {service.label}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;