import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import allArticles from "../../data/newsData";

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
                        <Link
                            key={article.slug || i}
                            to={`/news/${article.slug}`}
                            className="group"
                        >
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
                        </Link>
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