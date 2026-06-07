import React from "react";

const CompanyHero = () => {
    return (
        <section className="relative bg-[#0F0F0F] overflow-hidden">
            {/* ── Page Title ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-5 text-center pb-4">
                <h1 className="relative z-10 text-center text-5xl text-white font-black uppercase leading-[0.88] tracking-tight md:text-7xl lg:text-8xl">
                    ITS LOGISTICS: YOUR{" "}
                    <span className="text-[#FF6B00]">PREMIER 3PL</span>{" "}
                    COMPANY
                </h1>
            </div>

            {/* ── Hero Image ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-10 pt-6">
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                        alt="ITS Logistics warehouse facility"
                        className="w-full h-[320px] md:h-[480px] object-cover brightness-[0.8]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default CompanyHero;
