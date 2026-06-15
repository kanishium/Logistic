import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const featuredNews = {
    image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    category: "Blog",
    title:
        "IN THE NEWS: FreightWaves Announces 2026 Fraud Fighters Award Winners",
};

const newsCards = [
    {
        image:
            "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=900&q=80",
        title:
            "ShipNex May Supply Chain Report: Broker Liability Ruling and Inventory Replenishment Collide with Most Expensive Freight Market in Years",
    },
    {
        image:
            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80",
        title:
            "ShipNex May Port/Rail Ramp Freight Index: Strait of Hormuz Closure Sends Fuel Shock Through Supply Chains",
    },
];

const latestNews = [
    {
        type: "Latest",
        title:
            "ShipNex April Supply Chain Report: Hormuz Crisis Strains Freight Markets Heading into Q2",
    },
    {
        type: "Blog",
        title: "IN THE NEWS: Top 100 3PLs Adapt to Market Pressures, Trade Upheaval",
    },
    {
        type: "Press Release",
        title:
            "ShipNex April Port/Rail Ramp Freight Index: Hormuz Crisis and Capacity Squeeze Drive First Sustained Cost Increases Since COVID",
    },
    {
        type: "Press Release",
        title:
            "ShipNex Combats Rising Freight Fraud with Tech-Enabled, Human-Led Security Strategy",
    },
    {
        type: "Press Release",
        title:
            "ShipNex Partners with Indianapolis Zoo to Present xZOOberance Spring Festival",
    },
];

const NewsSection = () => {
    return (
        <section className="bg-[#F4F5F7] px-5 py-20 text-[#0F0F0F] md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-tight md:text-7xl lg:text-8xl">
                        News <span className="text-[#FF6B00]">+</span>
                        <br />
                        Resources
                    </h2>

                    <Link
                        to="/news"
                        className="group inline-flex w-fit items-center gap-4 text-sm font-bold text-[#0F0F0F]"
                    >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B00] text-white transition group-hover:bg-[#0F0F0F]">
                            <FiArrowRight size={22} />
                        </span>
                        View the latest news
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.95fr_0.7fr]">
                    <article>
                        <p className="mb-5 border-b border-[#B0B0B0] pb-2 text-[11px] font-black uppercase">
                            Featured
                        </p>

                        <Link to="/news/freightwaves-fraud-fighters">
                            <div className="overflow-hidden rounded-lg bg-[#1A1A1A]">
                                <img
                                    src={featuredNews.image}
                                    alt={featuredNews.title}
                                    className="h-[310px] w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            <p className="mt-5 text-[11px] font-medium uppercase text-[#555]">
                                {featuredNews.category}
                            </p>

                            <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">
                                {featuredNews.title}
                            </h3>
                        </Link>
                    </article>

                    <div className="space-y-8 pt-8 lg:pt-11">
                        {newsCards.map((item, index) => (
                            <Link
                                key={index}
                                to="/news"
                                className="group block border-b border-[#B0B0B0] pb-8"
                            >
                                <div className="overflow-hidden rounded-lg bg-[#1A1A1A]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <h3 className="mt-4 text-base font-semibold leading-relaxed">
                                    {item.title}
                                </h3>
                            </Link>
                        ))}
                    </div>

                    <aside>
                        <p className="mb-5 border-b border-[#B0B0B0] pb-2 text-[11px] font-black uppercase">
                            Latest
                        </p>

                        <div className="divide-y divide-[#B0B0B0]">
                            {latestNews.map((item, index) => (
                                <Link
                                    key={index}
                                    to="/news"
                                    className="block py-5 transition hover:text-[#FF6B00]"
                                >
                                    <p className="mb-3 text-[10px] font-medium uppercase text-[#777]">
                                        {item.type}
                                    </p>

                                    <h4 className="text-sm font-semibold leading-relaxed">
                                        {item.title}
                                    </h4>
                                </Link>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;