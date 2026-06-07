import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const CareerCTA = () => {
    return (
        <section className="bg-[#0F0F0F] px-6 lg:px-10 py-0">
            <div className="mx-auto max-w-7xl">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-lg bg-[#1A1A1A] border border-white/5">
                    {/* ── Image ── */}
                    <div className="relative h-[300px] md:h-full min-h-[360px] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                            alt="Team collaboration at ITS Logistics"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/30 hidden md:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent md:hidden" />
                    </div>

                    {/* ── Content ── */}
                    <div className="flex flex-col justify-center p-8 sm:p-10 md:p-14">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF6B00] mb-4">
                            Careers
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white">
                            Start your journey in logistics
                        </h2>

                        <p className="mt-6 text-base leading-7 text-[#B0B0B0]">
                            We're always looking for driven, creative people who want to make
                            an impact. Explore open positions and discover what makes ITS a
                            great place to build a career.
                        </p>

                        <Link
                            to="/culture"
                            className="group mt-8 inline-flex items-center gap-4 w-fit text-sm font-bold text-white"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B00] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#0F0F0F] group-hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                                <FiArrowRight size={20} />
                            </span>
                            <span className="group-hover:text-[#FF6B00] transition-colors duration-300">
                                Join the team
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerCTA;
