import React from "react";
import { Link } from "react-router-dom";
import allArticles from "../../data/newsData";

/* Always feature the first (latest) article */
const featured = allArticles[0];

const NewsHero = () => {
    return (
        <section className="relative bg-[#0A0A0A] overflow-hidden">

            {/* ── Page Title ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-5 text-center pb-4">
                <h1 className="relative z-10 text-center text-5xl text-white font-black uppercase leading-[0.88] tracking-tight md:text-7xl lg:text-8xl">
                    NEWS<span className="text-[#FF6B00]"> + </span>RESOURCES
                </h1>
            </div>

            {/* ── Featured Article Card ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 pt-6">
                <Link
                    to={`/news/${featured.slug}`}
                    className="group block"
                >
                    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-0 bg-[#111111] rounded-lg overflow-hidden
                                    border border-white/[0.04] hover:border-white/[0.08] transition-colors duration-500">

                        {/* ── Left: Text Content ── */}
                        <div className="flex flex-col justify-between p-7 sm:p-9 md:p-10 lg:p-12 order-2 md:order-1">

                            {/* Tags */}
                            <div>
                                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#B0B0B0]/70 mb-5">
                                    {featured.tags.join("  |  ")}
                                </p>

                                {/* Title */}
                                <h2
                                    className="text-white text-[1.55rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.3rem]
                                               font-black uppercase leading-[1.08] tracking-[-0.01em]
                                               group-hover:text-[#FF6B00] transition-colors duration-300"
                                >
                                    {featured.title}
                                </h2>

                                {/* Date */}
                                <p className="mt-5 text-[12px] font-medium text-[#B0B0B0]/60">
                                    {featured.date}
                                </p>
                            </div>

                            {/* Author */}
                            <div className="mt-8 md:mt-0">
                                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF6B00]/80">
                                    ShipNex
                                </span>
                            </div>
                        </div>

                        {/* ── Right: Featured Image ── */}
                        <div className="relative h-[240px] sm:h-[280px] md:h-full min-h-[300px] order-1 md:order-2 overflow-hidden">
                            <img
                                src={featured.heroImage}
                                alt={featured.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out
                                           group-hover:scale-[1.03]"
                            />

                            {/* Subtle left-edge gradient blending into text area (desktop) */}
                            <div className="hidden md:block absolute inset-y-0 left-0 w-20
                                            bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />

                            {/* Bottom gradient (mobile — blends into text below) */}
                            <div className="md:hidden absolute inset-x-0 bottom-0 h-16
                                            bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default NewsHero;
