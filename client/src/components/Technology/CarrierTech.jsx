import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CarrierTech = () => {
    return (
        <section className="bg-[#141414] px-5 py-20 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-14 md:grid-cols-2">
                    {/* ── Left: Visual ── */}
                    <div className="relative order-2 md:order-1">
                        <div className="overflow-hidden rounded-xl bg-[#1A1A1A] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                                alt="Carrier technology interface"
                                className="w-full object-cover"
                            />
                        </div>
                        {/* Floating accent */}
                        <div className="absolute -top-4 -right-4 rounded-lg border border-gray-700 bg-[#1A1A1A] px-5 py-4 shadow-xl shadow-black/30 md:-right-8">
                            <p className="text-3xl font-black text-[#FF6B00]">24/7</p>
                            <p className="mt-1 text-xs font-semibold text-gray-400">Carrier Support</p>
                        </div>
                    </div>

                    {/* ── Right: Content ── */}
                    <div className="order-1 md:order-2">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
                            Carrier Platform
                        </p>
                        <h2 className="text-4xl font-black leading-tight md:text-5xl">
                            Carrier Technology
                        </h2>
                        <p className="mt-5 max-w-lg text-base leading-7 text-gray-400">
                            Our carrier-facing technology makes it easy to find loads, manage
                            documentation, and get paid faster. We build tools that respect your
                            time and keep you moving forward.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div className="border-l-2 border-[#FF6B00] pl-4">
                                <p className="text-2xl font-black">50K+</p>
                                <p className="mt-1 text-xs text-gray-400">Active Carriers</p>
                            </div>
                            <div className="border-l-2 border-[#FF6B00] pl-4">
                                <p className="text-2xl font-black">2-Day</p>
                                <p className="mt-1 text-xs text-gray-400">QuickPay Available</p>
                            </div>
                            <div className="border-l-2 border-[#FF6B00] pl-4">
                                <p className="text-2xl font-black">98%</p>
                                <p className="mt-1 text-xs text-gray-400">On-Time Pickup</p>
                            </div>
                            <div className="border-l-2 border-[#FF6B00] pl-4">
                                <p className="text-2xl font-black">4.8★</p>
                                <p className="mt-1 text-xs text-gray-400">Carrier Rating</p>
                            </div>
                        </div>

                        <Link
                            to="/carriers"
                            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F0F0F]"
                        >
                            Join Our Network
                            <FiArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarrierTech;
