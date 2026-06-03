import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const TechCTA = () => {
    return (
        <section className="relative overflow-hidden bg-[#FF6B00] px-5 py-20 md:px-8 md:py-28 lg:px-12">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white" />
                <div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-black" />
            </div>

            <div className="relative mx-auto max-w-5xl text-center">
                <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0F0F0F] md:text-6xl lg:text-7xl">
                    Develop your future at ITS—
                    <br />
                    Go <span className="text-white">faster</span>, deliver{" "}
                    <span className="text-white">better</span> results, have{" "}
                    <span className="text-white">more</span> fun.
                </h2>

                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <Link
                        to="/culture"
                        className="inline-flex items-center gap-3 rounded-full bg-[#0F0F0F] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F0F0F]"
                    >
                        Explore Our Culture
                        <FiArrowRight size={18} />
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 rounded-full border-2 border-[#0F0F0F] px-7 py-4 text-sm font-semibold text-[#0F0F0F] transition hover:bg-[#0F0F0F] hover:text-white"
                    >
                        Contact Us
                        <FiArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TechCTA;
