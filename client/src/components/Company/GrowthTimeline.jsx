import React from "react";

const milestones = [
    {
        year: "2006",
        title: "Founded in Reno",
        desc: "ShipNex was founded with a vision to create a different kind of logistics company — one built on culture, technology, and relentless customer focus.",
    },
    {
        year: "2012",
        title: "Drayage Expansion",
        desc: "Expanded into port drayage and intermodal services, connecting major U.S. ports to inland distribution points.",
    },
    {
        year: "2016",
        title: "Distribution Launch",
        desc: "Launched full-service distribution and fulfillment operations with strategically located facilities across the country.",
    },
    {
        year: "2019",
        title: "Technology Investment",
        desc: "Major investment in proprietary technology platforms for real-time visibility, AI-powered analytics, and automated operations.",
    },
    {
        year: "2022",
        title: "National Footprint",
        desc: "Expanded to 24+ strategic locations with coast-to-coast coverage and cross-border capabilities into Canada and Mexico.",
    },
    {
        year: "2026",
        title: "Industry Leader",
        desc: "Recognized as a Top 100 3PL, Fraud Fighter Award winner, and Top Workplace for three consecutive years.",
    },
];

const GrowthTimeline = () => {
    return (
        <section className="bg-[#111111] px-6 lg:px-10 py-2">
            <div className="mx-auto max-w-7xl">
                {/* ── Heading ── */}
                <div className="mb-16">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF6B00] mb-4">
                        Our Journey
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white">
                        A trajectory of growth
                    </h2>
                    <p className="mt-6 text-base leading-7 text-[#B0B0B0] max-w-2xl">
                        From a small team with big ambitions to a nationally recognized
                        logistics leader — our growth has been driven by our people, our
                        culture, and our commitment to innovation.
                    </p>
                </div>

                {/* ── Timeline ── */}
                <div className="relative">
                    {/* Vertical line (desktop) */}
                    <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10" />

                    <div className="space-y-12 md:space-y-0">
                        {milestones.map((m, i) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <div key={i} className="relative md:flex md:items-start md:min-h-[160px]">
                                    {/* Center dot (desktop) */}
                                    <div className="hidden md:flex absolute left-[50%] top-6 -translate-x-1/2 z-10
                                                    w-5 h-5 rounded-full bg-[#FF6B00] border-4 border-[#111111]
                                                    shadow-[0_0_12px_rgba(255,107,0,0.4)]" />

                                    {/* Left column */}
                                    <div className={`md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pr-16 md:text-right md:order-1 md:invisible"}`}>
                                        {isLeft && (
                                            <div className="p-6 rounded-lg bg-[#0F0F0F] border border-white/5
                                                            hover:border-[#FF6B00]/20 transition-colors duration-300">
                                                <span className="text-[#FF6B00] text-2xl font-black">{m.year}</span>
                                                <h3 className="mt-2 text-lg font-bold uppercase tracking-wide text-white">
                                                    {m.title}
                                                </h3>
                                                <p className="mt-3 text-sm leading-6 text-[#B0B0B0]">
                                                    {m.desc}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right column */}
                                    <div className={`md:w-1/2 ${!isLeft ? "md:pl-16 md:order-2" : "md:pl-16 md:invisible"}`}>
                                        {!isLeft && (
                                            <div className="p-6 rounded-lg bg-[#0F0F0F] border border-white/5
                                                            hover:border-[#FF6B00]/20 transition-colors duration-300">
                                                <span className="text-[#FF6B00] text-2xl font-black">{m.year}</span>
                                                <h3 className="mt-2 text-lg font-bold uppercase tracking-wide text-white">
                                                    {m.title}
                                                </h3>
                                                <p className="mt-3 text-sm leading-6 text-[#B0B0B0]">
                                                    {m.desc}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Mobile dot */}
                                    <div className="md:hidden flex items-center gap-3 mb-3">
                                        <span className="w-3 h-3 rounded-full bg-[#FF6B00] shrink-0
                                                         shadow-[0_0_8px_rgba(255,107,0,0.4)]" />
                                        <span className="text-[#FF6B00] text-lg font-black">{m.year}</span>
                                    </div>

                                    {/* Mobile card */}
                                    <div className="md:hidden p-5 rounded-lg bg-[#0F0F0F] border border-white/5 mb-8">
                                        <h3 className="text-base font-bold uppercase tracking-wide text-white">
                                            {m.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                            {m.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthTimeline;
