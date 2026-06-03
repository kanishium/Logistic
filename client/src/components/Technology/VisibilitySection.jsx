import React from "react";
import { FiBarChart2, FiMap, FiClock, FiTruck, FiLayers, FiShield } from "react-icons/fi";

const features = [
    {
        icon: <FiMap size={28} />,
        title: "Real-time Tracking",
        desc: "Track every shipment across all modes in real-time with GPS precision and automated milestone updates.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: <FiBarChart2 size={28} />,
        title: "Smart Analytics",
        desc: "Powerful dashboards and reporting tools that turn raw data into actionable supply chain intelligence.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: <FiClock size={28} />,
        title: "Predictive ETAs",
        desc: "Machine-learning powered arrival predictions that are 40% more accurate than traditional estimates.",
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: <FiTruck size={28} />,
        title: "Carrier Matching",
        desc: "AI-driven carrier selection that matches your freight with the best-fit capacity in seconds.",
        img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: <FiLayers size={28} />,
        title: "Integrated TMS",
        desc: "A unified platform connecting shippers, carriers, and warehouses into one seamless workflow.",
        img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80",
    },
    {
        icon: <FiShield size={28} />,
        title: "Fraud Prevention",
        desc: "Multi-layered security with real-time carrier verification and AI-powered anomaly detection.",
        img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
    },
];

const VisibilitySection = () => {
    return (
        <section className="bg-black px-5 py-20 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                {/* ── Section Header ── */}
                <div className="mb-14 max-w-2xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF6B00]">
                        Supply Chain Visibility
                    </p>
                    <h2 className="text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
                        Experience real-time supply chain visibility
                    </h2>
                    <p className="mt-5 text-base leading-7 text-gray-100">
                        Our suite of technology solutions gives you end-to-end visibility
                        across every touchpoint. See what's happening, predict what's next,
                        and control outcomes in real time.
                    </p>
                </div>

                {/* ── Features Grid ── */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group relative overflow-hidden rounded-xl border border-gray-800 bg-[#1A1A1A] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,107,0,0.12)] hover:border-[#FF6B00]/40"
                        >
                            {/* Image */}
                            <div className="relative h-[180px] overflow-hidden">
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover brightness-[0.8] transition duration-500 group-hover:scale-105 group-hover:brightness-[0.9]"
                                />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] transition-colors duration-300 group-hover:bg-[#FF6B00]/25">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-400">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisibilitySection;
