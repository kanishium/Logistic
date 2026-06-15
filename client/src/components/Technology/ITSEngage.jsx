import React from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const engageFeatures = [
    "Real-time shipment tracking across all modes",
    "Automated reporting and analytics dashboards",
    "Document management and digital BOL",
    "Rate quotes and instant booking",
    "Exception management with proactive alerts",
    "Customizable KPI scorecards",
];

const ITSEngage = () => {
    return (
        <section className="bg-[#0F0F0F] px-5 py-20 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-14 md:grid-cols-2">
                    {/* ── Left: Content ── */}
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
                            Shipper Platform
                        </p>
                        <h2 className="text-4xl font-black leading-tight md:text-5xl">
                            ShipNex Engage
                        </h2>
                        <p className="mt-5 max-w-lg text-base leading-7 text-gray-400">
                            Our proprietary shipper portal puts the power of your entire
                            logistics operation at your fingertips. Access real-time data,
                            manage shipments, and gain insights — all from one intuitive platform.
                        </p>

                        <ul className="mt-8 space-y-3">
                            {engageFeatures.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6B00] text-white">
                                        <FiCheck size={12} strokeWidth={3} />
                                    </span>
                                    <span className="text-sm font-medium text-gray-300">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/contact"
                            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F0F0F]"
                        >
                            Request a Demo
                            <FiArrowRight size={18} />
                        </Link>
                    </div>

                    {/* ── Right: Visual ── */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#1A1A1A] shadow-2xl shadow-black/30">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                                alt="ITS Engage platform dashboard"
                                className="w-full object-cover"
                            />
                        </div>
                        {/* Floating accent card */}
                        <div className="absolute -bottom-6 -left-4 rounded-lg border border-gray-700 bg-[#1A1A1A] px-5 py-4 shadow-xl shadow-black/30 md:-left-8">
                            <p className="text-3xl font-black text-[#FF6B00]">99.7%</p>
                            <p className="mt-1 text-xs font-semibold text-gray-400">Platform Uptime</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ITSEngage;
