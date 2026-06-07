import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const partners = [
    {
        name: "Community Food Banks",
        desc: "Supporting hunger relief programs with logistics expertise and volunteer hours.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        ),
    },
    {
        name: "Youth Education Programs",
        desc: "Investing in the next generation through STEM education and mentorship initiatives.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
    },
    {
        name: "Environmental Sustainability",
        desc: "Committed to reducing our carbon footprint through green logistics practices.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 22c4-4 8-7.5 8-12S16.42 2 12 2 4 5.5 4 10s4 8 8 12z" />
                <path d="M12 2v20" />
                <path d="M12 12c2.5-2.5 4-5 4-7" />
                <path d="M12 12c-2.5-2.5-4-5-4-7" />
            </svg>
        ),
    },
    {
        name: "Local Nonprofits",
        desc: "Partnering with organizations that strengthen communities across our service areas.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" />
                <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" />
            </svg>
        ),
    },
];

const CommunityPartners = () => {
    return (
        <section className="bg-[#0F0F0F] px-6 lg:px-10 py-10">
            <div className="mx-auto max-w-7xl">
                {/* ── Heading ── */}
                <div className="mb-16 max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF6B00] mb-4">
                        Giving Back
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white">
                        Our culture of collaboration extends to our community partners.
                    </h2>
                </div>

                {/* ── Partner Cards ── */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {partners.map((p, i) => (
                        <div
                            key={i}
                            className="group p-7 rounded-lg bg-[#111111] border border-white/5
                                       hover:border-[#FF6B00]/25 hover:bg-[#FF6B00]/[0.03]
                                       transition-all duration-300"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full
                                            bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00]
                                            group-hover:bg-[#FF6B00]/20 transition-colors duration-300">
                                {p.icon}
                            </div>

                            <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-white">
                                {p.name}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-[#B0B0B0]">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="mt-14 flex justify-center">
                    <Link
                        to="/culture"
                        className="group inline-flex items-center gap-4 text-sm font-bold text-white"
                    >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B00] text-white
                                         transition-all duration-300 group-hover:bg-white group-hover:text-[#0F0F0F]
                                         group-hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                            <FiArrowRight size={20} />
                        </span>
                        <span className="group-hover:text-[#FF6B00] transition-colors duration-300">
                            Learn about our culture
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CommunityPartners;
