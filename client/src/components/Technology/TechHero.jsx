import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const TechHero = () => {
    return (
        <section className="relative overflow-hidden bg-[#0F0F0F] px-5 py-5 md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                {/* ── Heading ── */}
                <h1 className="relative z-10 text-center text-5xl font-black uppercase leading-[0.88] tracking-tight text-white md:text-7xl lg:text-8xl">
                    Innovation <br />
                    You Can <span className="text-[#FF6B00]">Trust</span>
                </h1>

                {/* ── Hero image ── */}
                <div className="relative mt-8 mx-auto overflow-hidden rounded-lg bg-[#1A1A1A] md:mt-10">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                        alt="Team collaborating on technology solutions"
                        className="h-[320px] w-full object-cover brightness-[0.72] md:h-[520px]"
                    />
                </div>

                {/* ── Subtext ── */}
                <div className="mt-12 border-t border-[#FF6B00] pt-10 md:mt-14">
                    <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF6B00]">
                                Tech Advantage
                            </p>

                            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
                                Tracking Like Never Considered
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-8 text-[#B0B0B0]">
                                At ShipNex, we harness innovation and proprietary technology
                                to deliver real-time supply chain visibility. Our suite of technology
                                platforms gives you the control and insight needed to make smarter,
                                faster decisions across your entire logistics network.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                <div className="border-l border-[#FF6B00] pl-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        Real-Time
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                        Live visibility across every shipment and route.
                                    </p>
                                </div>

                                <div className="border-l border-[#FF6B00] pl-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        Data-Driven
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                        Actionable insights for smarter decisions.
                                    </p>
                                </div>

                                <div className="border-l border-[#FF6B00] pl-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        Integrated
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                        Seamless connectivity across your supply chain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechHero;
