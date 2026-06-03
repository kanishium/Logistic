import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const LoopSection = () => {
    return (
        <section className="bg-[#0F0F0F] px-5 py-20 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-14 md:grid-cols-2">
                    {/* ── Left: Content ── */}
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
                            Integration Platform
                        </p>
                        <h2 className="text-4xl font-black leading-tight md:text-5xl">
                            Loop
                        </h2>
                        <p className="mt-5 max-w-lg text-base leading-7 text-gray-400">
                            Loop connects your existing systems — ERP, WMS, OMS — directly into
                            the ITS ecosystem. Seamless API integrations eliminate manual data
                            entry, reduce errors, and accelerate your entire order-to-delivery cycle.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-[#1A1A1A] px-5 py-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B00]/10 text-lg font-black text-[#FF6B00]">
                                    1
                                </span>
                                <div>
                                    <p className="text-sm font-bold">EDI + API Connectivity</p>
                                    <p className="text-xs text-gray-500">Connect via EDI 204/214/210 or RESTful APIs</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-[#1A1A1A] px-5 py-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B00]/10 text-lg font-black text-[#FF6B00]">
                                    2
                                </span>
                                <div>
                                    <p className="text-sm font-bold">Automated Data Sync</p>
                                    <p className="text-xs text-gray-500">Real-time bi-directional data flow</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-[#1A1A1A] px-5 py-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B00]/10 text-lg font-black text-[#FF6B00]">
                                    3
                                </span>
                                <div>
                                    <p className="text-sm font-bold">Custom Workflows</p>
                                    <p className="text-xs text-gray-500">Build rules and triggers that match your process</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F0F0F]"
                        >
                            Learn More
                            <FiArrowRight size={18} />
                        </Link>
                    </div>

                    {/* ── Right: Visual ── */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#1A1A1A] shadow-2xl shadow-black/30">
                            <img
                                src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=800&q=80"
                                alt="Loop integration platform"
                                className="w-full object-cover"
                            />
                        </div>

                        {/* Logo accent */}
                        <div className="absolute -bottom-5 right-6 rounded-lg border border-gray-700 bg-[#1A1A1A] px-6 py-3 shadow-xl shadow-black/30 md:right-10">
                            <p className="text-2xl font-black tracking-tight text-white">
                                <span className="text-[#FF6B00]">l</span>oop
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoopSection;
