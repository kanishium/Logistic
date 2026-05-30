import React, { useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Truckload Services",
        desc: "We deliver supply chain value when and where you need it most.",
        img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80",
    },
    {
        title: "Drayage + Intermodal",
        desc: "We solve your complex supply chain challenges and execute 24/7/365.",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    },
    {
        title: "Distribution + Fulfillment",
        desc: "Custom solutions to meet your unique distribution needs.",
        img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80",
    },
    {
        title: "Supply Chain Services",
        desc: "Gain visibility into the entire freight and supply chain lifecycle.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    },
];

const SideScroll = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const location = useLocation();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current;
            const track = trackRef.current;

            if (!section || !track) return;

            const getScrollAmount = () => {
                return track.scrollWidth - section.clientWidth;
            };

            gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    pin: true,
                    scrub: 1.2,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, [location.pathname]);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden bg-[#0F0F0F] text-white"
        >
            <div
                ref={trackRef}
                className="flex h-full w-max items-stretch gap-8 px-6 py-12 md:px-12 lg:px-12"
            >
                <div className="flex h-full w-[560px] shrink-0 flex-col justify-center">
                    <h2 className="max-w-[560px] text-5xl font-black leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
                        We go beyond your traditional logistics service provider to make
                        your world better and your supply chain more efficient.
                    </h2>

                    <a
                        href="#contact"
                        className="mt-8 inline-flex w-fit items-center gap-4 rounded-full bg-[#FF6B00] px-7 py-4 text-lg font-semibold text-black transition hover:bg-white"
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                            <FiArrowRight size={18} />
                        </span>
                        Contact Us
                    </a>
                </div>

                {services.map((service) => (
                    <article
                        key={service.title}
                        className="group relative h-full w-[480px] shrink-0 overflow-hidden rounded-lg bg-[#1A1A1A]"
                    >
                        <img
                            src={service.img}
                            alt={service.title}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-8">
                            <div>
                                <h3 className="text-3xl font-black text-white">
                                    {service.title}
                                </h3>

                                <p className="mt-4 max-w-sm text-lg leading-7 text-[#B0B0B0]">
                                    {service.desc}
                                </p>
                            </div>

                            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FF6B00] text-black transition group-hover:scale-110">
                                <FiArrowRight size={25} />
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default SideScroll;