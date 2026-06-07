import React from "react";

const locations = [
    { city: "Reno, NV", type: "Headquarters", desc: "Corporate offices and regional hub" },
    { city: "Indianapolis, IN", type: "Distribution Hub", desc: "Midwest distribution center" },
    { city: "Dallas, TX", type: "Regional Office", desc: "South-central operations" },
    { city: "Savannah, GA", type: "Port Operations", desc: "Southeast port drayage" },
    { city: "Long Beach, CA", type: "Port Operations", desc: "West coast container operations" },
    { city: "Chicago, IL", type: "Intermodal Hub", desc: "Rail and truckload interchange" },
];

const StrategicLocations = () => {
    return (
        <section className="bg-[#0F0F0F] px-6 lg:px-10 py-10">
            <div className="mx-auto max-w-7xl">
                {/* ── Heading ── */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white">
                        Our strategic locations give ITS a{" "}
                        <span className="text-[#FF6B00]">competitive advantage.</span>
                    </h2>
                </div>

                {/* ── Map Placeholder (stylized grid) ── */}
                <div className="relative mb-16 rounded-lg overflow-hidden bg-[#111111] border border-white/5 p-8 md:p-12">
                    {/* Decorative grid background */}
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)
                            `,
                            backgroundSize: "60px 60px",
                        }}
                    />

                    <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {locations.map((loc, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 p-5 rounded-lg bg-white/[0.03] border border-white/[0.06]
                                           hover:border-[#FF6B00]/30 hover:bg-[#FF6B00]/[0.04] transition-all duration-300"
                            >
                                {/* Location pin */}
                                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                                                bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00]
                                                group-hover:bg-[#FF6B00]/20 transition-colors duration-300">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        {loc.city}
                                    </h3>
                                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF6B00]/70">
                                        {loc.type}
                                    </p>
                                    <p className="mt-2 text-xs leading-5 text-[#B0B0B0]/70">
                                        {loc.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StrategicLocations;
