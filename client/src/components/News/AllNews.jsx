import React, { useState, useMemo } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

/* ── All news articles data ── */
const allArticles = [
    {
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics Named 2026 Fraud Fighter Award Winner",
        tags: ["PRESS RELEASE", "TRUCKLOAD"],
        resource: "Press Release",
        category: "Truckload",
    },
    {
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
        title: "IN THE NEWS: FreightWaves Announces 2026 Fraud Fighters Award Winners",
        tags: ["BLOG", "COMPANY NEWS"],
        resource: "Blog",
        category: "Company News",
    },
    {
        image: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics May Supply Chain Report: Broker Liability Ruling and Inventory Replenishment Collide with Most Expensive Freight Market in Years",
        tags: ["MARKET UPDATE", "MARKET UPDATE"],
        resource: "Market Update",
        category: "Market Update",
    },
    {
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics May Port/Rail Ramp Freight Index: Strait of Hormuz Closure Sends Fuel Shock Through Supply Chains",
        tags: ["PORT + RAIL INDEX", "US PORT/RAIL RAMP FREIGHT INDEX"],
        resource: "Port + Rail Index",
        category: "Distribution + Fulfillment",
    },
    {
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        title: "Four Steps to Decarbonize Your Supply Chain in 2026",
        tags: ["BLOG", "SUSTAINABILITY"],
        resource: "Blog",
        category: "Sustainability",
    },
    {
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics Distribution + Fulfillment Q1 Index: Rising Transportation Costs Test Lean Inventory Strategies",
        tags: ["DISTRIBUTION + FULFILLMENT INDEX", "DISTRIBUTION + FULFILLMENT"],
        resource: "Distribution + Fulfillment Index",
        category: "Distribution + Fulfillment",
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        title: "IN THE NEWS: Driver Shortage—or Market Reset? How Compliance, Demographics, and Capacity Are Reshaping Freight",
        tags: ["BLOG", "TRUCKLOAD"],
        resource: "Blog",
        category: "Truckload",
    },
    {
        image: "https://images.unsplash.com/photo-1605732562742-3023a888e56e?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics April Supply Chain Report: Hormuz Crisis Strains Freight Markets Heading into Q2",
        tags: ["MARKET UPDATE", "MARKET UPDATE"],
        resource: "Market Update",
        category: "Market Update",
    },
    {
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
        title: "IN THE NEWS: Careers That Don't Follow the Ladder: Amazon, ITS Logistics, Circle Logistics",
        tags: ["BLOG", "CAREERS"],
        resource: "Blog",
        category: "Careers",
    },
    {
        image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics Combats Rising Freight Fraud with Tech-Enabled, Human-Led Security Strategy",
        tags: ["PRESS RELEASE", "TRUCKLOAD"],
        resource: "Press Release",
        category: "Truckload",
    },
    {
        image: "https://images.unsplash.com/photo-1541185934-01b600ea069c?auto=format&fit=crop&w=600&q=80",
        title: "IN THE NEWS: Top 100 3PLs Adapt to Market Pressures, Trade Upheaval",
        tags: ["BLOG", "COMPANY NEWS"],
        resource: "Blog",
        category: "Company News",
    },
    {
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics Partners with Indianapolis Zoo to Present xZOOberance Spring Festival",
        tags: ["PRESS RELEASE", "COMMUNITY"],
        resource: "Press Release",
        category: "Community",
    },
    {
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics April Port/Rail Ramp Freight Index: Hormuz Crisis and Capacity Squeeze Drive First Sustained Cost Increases Since COVID",
        tags: ["PORT + RAIL INDEX", "US PORT/RAIL RAMP FREIGHT INDEX"],
        resource: "Port + Rail Index",
        category: "Distribution + Fulfillment",
    },
    {
        image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=600&q=80",
        title: "How ITS Logistics Is Building the Future of Freight Visibility",
        tags: ["BLOG", "TECHNOLOGY"],
        resource: "Blog",
        category: "Technology",
    },
    {
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics March Supply Chain Report: Tariff Uncertainty and Consumer Pullback Signal Bumpy Quarter Ahead",
        tags: ["MARKET UPDATE", "MARKET UPDATE"],
        resource: "Market Update",
        category: "Market Update",
    },
    {
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics Distribution + Fulfillment Q4 Index: E-Commerce Peak Season Reshapes Warehouse Strategy",
        tags: ["DISTRIBUTION + FULFILLMENT INDEX", "DISTRIBUTION + FULFILLMENT"],
        resource: "Distribution + Fulfillment Index",
        category: "Distribution + Fulfillment",
    },
    {
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
        title: "IN THE NEWS: How Logistics Companies Are Winning the War for Talent",
        tags: ["BLOG", "CAREERS"],
        resource: "Blog",
        category: "Careers",
    },
    {
        image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80",
        title: "ITS Logistics Recognized as a Top Workplace for Third Consecutive Year",
        tags: ["PRESS RELEASE", "COMPANY NEWS"],
        resource: "Press Release",
        category: "Company News",
    },
];

const ITEMS_PER_PAGE = 9;

const resourceOptions = ["All Resources", ...new Set(allArticles.map((a) => a.resource))];
const categoryOptions = ["All Categories", ...new Set(allArticles.map((a) => a.category))];

const AllNews = () => {
    const [resourceFilter, setResourceFilter] = useState("All Resources");
    const [categoryFilter, setCategoryFilter] = useState("All Categories");
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = useMemo(() => {
        return allArticles.filter((a) => {
            const rMatch = resourceFilter === "All Resources" || a.resource === resourceFilter;
            const cMatch = categoryFilter === "All Categories" || a.category === categoryFilter;
            return rMatch && cMatch;
        });
    }, [resourceFilter, categoryFilter]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const page = Math.min(currentPage, totalPages);
    const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    const goTo = (p) => {
        setCurrentPage(Math.max(1, Math.min(p, totalPages)));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Build pagination numbers
    const pageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1, 2, 3, 4);
            if (page > 4 && page < totalPages) pages.push(page);
            pages.push(totalPages);
        }
        return [...new Set(pages)].sort((a, b) => a - b);
    };

    return (
        <section className="bg-[#0F0F0F] px-6 py-20 text-white lg:px-10">
            <div className="mx-auto max-w-7xl">
                {/* ── Filter Bar ── */}
                <div className="mb-10 flex flex-wrap items-center gap-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#FF6B00]">
                        Filter by
                    </span>

                    <select
                        value={resourceFilter}
                        onChange={(e) => { setResourceFilter(e.target.value); setCurrentPage(1); }}
                        className="appearance-none border border-white/20 bg-transparent px-4 py-2 pr-8 text-xs font-semibold uppercase tracking-wider text-white outline-none transition-colors focus:border-[#FF6B00] cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 10px center",
                        }}
                    >
                        {resourceOptions.map((r) => (
                            <option key={r} value={r} className="bg-[#0F0F0F]">{r}</option>
                        ))}
                    </select>

                    <select
                        value={categoryFilter}
                        onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
                        className="appearance-none border border-white/20 bg-transparent px-4 py-2 pr-8 text-xs font-semibold uppercase tracking-wider text-white outline-none transition-colors focus:border-[#FF6B00] cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 10px center",
                        }}
                    >
                        {categoryOptions.map((c) => (
                            <option key={c} value={c} className="bg-[#0F0F0F]">{c}</option>
                        ))}
                    </select>
                </div>

                {/* ── Articles Grid ── */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {paged.map((article, i) => (
                        <article key={i} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-lg bg-[#1A1A1A]">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    loading="lazy"
                                    className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="mt-4 text-sm font-bold leading-snug text-white group-hover:text-[#FF6B00] transition-colors">
                                {article.title}
                            </h3>

                            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#B0B0B0]/70">
                                {article.tags.join(" | ")}
                            </p>
                        </article>
                    ))}
                </div>

                {/* ── Pagination ── */}
                {totalPages > 1 && (
                    <div className="mt-14 flex items-center justify-center gap-2">
                        <button
                            onClick={() => goTo(page - 1)}
                            disabled={page === 1}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#B0B0B0] transition hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <FiArrowLeft size={14} />
                            Previous
                        </button>

                        {pageNumbers().map((n, i, arr) => (
                            <React.Fragment key={n}>
                                {i > 0 && n - arr[i - 1] > 1 && (
                                    <span className="px-1 text-xs text-[#B0B0B0]/50">...</span>
                                )}
                                <button
                                    onClick={() => goTo(n)}
                                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition
                                        ${page === n
                                            ? "bg-[#FF6B00] text-black"
                                            : "text-[#B0B0B0] hover:text-white"
                                        }`}
                                >
                                    {n}
                                </button>
                            </React.Fragment>
                        ))}

                        <button
                            onClick={() => goTo(page + 1)}
                            disabled={page === totalPages}
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#B0B0B0] transition hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            Next
                            <FiArrowRight size={14} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllNews;