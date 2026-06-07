import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import allArticles from "../../data/newsData";

/* Pick the latest article as featured */
const featured = allArticles[0];

const CompanyNews = () => {
    return (
        <section className="bg-[#111111] px-6 lg:px-10 py-2 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                    {/* ── Left: Title + CTA ── */}
                    <div>
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.88] tracking-tight text-white">
                            News<span className="text-[#FF6B00]">+</span>
                            <br />
                            Resources
                        </h2>

                        <Link
                            to="/news"
                            className="group mt-10 inline-flex items-center gap-4 text-sm font-bold text-white"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B00] text-white
                                             transition-all duration-300 group-hover:bg-white group-hover:text-[#0F0F0F]
                                             group-hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                                <FiArrowRight size={20} />
                            </span>
                            <span className="group-hover:text-[#FF6B00] transition-colors duration-300">
                                View the latest news
                            </span>
                        </Link>
                    </div>

                    {/* ── Right: Featured Article Card ── */}
                    <Link
                        to={`/news/${featured.slug}`}
                        className="group block"
                    >
                        <div className="overflow-hidden rounded-lg bg-[#0F0F0F] border border-white/5
                                        hover:border-white/10 transition-colors duration-500">
                            <div className="overflow-hidden">
                                <img
                                    src={featured.heroImage}
                                    alt={featured.title}
                                    className="w-full h-[220px] sm:h-[260px] object-cover
                                               transition-transform duration-700 group-hover:scale-[1.03]"
                                />
                            </div>

                            <div className="p-6 sm:p-8">
                                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#B0B0B0]/60 mb-3">
                                    {featured.tags.join("  |  ")}
                                </p>

                                <h3 className="text-xl sm:text-2xl font-black uppercase leading-[1.1] tracking-tight text-white
                                               group-hover:text-[#FF6B00] transition-colors duration-300">
                                    {featured.title}
                                </h3>

                                <p className="mt-4 text-[12px] font-medium text-[#B0B0B0]/50">
                                    {featured.date}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CompanyNews;
