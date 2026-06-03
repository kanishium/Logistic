import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import allArticles from "../../data/newsData";

const NewsDetail = () => {
    const { slug } = useParams();
    const article = allArticles.find((a) => a.slug === slug);

    if (!article) {
        return (
            <section className="min-h-screen bg-[#0F0F0F] flex items-center justify-center text-white px-6">
                <div className="text-center">
                    <h1 className="text-4xl font-black uppercase mb-4">Article Not Found</h1>
                    <p className="text-[#B0B0B0] mb-8">The news article you're looking for doesn't exist.</p>
                    <Link
                        to="/news"
                        className="inline-flex items-center gap-2 rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F0F0F]"
                    >
                        <FiArrowLeft size={16} />
                        Back to News
                    </Link>
                </div>
            </section>
        );
    }

    /* ── Related articles (same category, excluding current) ── */
    const related = allArticles
        .filter((a) => a.slug !== slug && (a.category === article.category || a.resource === article.resource))
        .slice(0, 3);

    return (
        <article className="bg-[#0F0F0F] text-white">

            {/* ═══════════════════════════════════════════ */}
            {/* ── Hero Image ── */}
            {/* ═══════════════════════════════════════════ */}
            <div className="relative w-full h-[50vh] min-h-[340px] max-h-[520px] overflow-hidden">
                <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/30 to-transparent" />

                {/* Back button overlay */}
                <Link
                    to="/news"
                    className="absolute top-24 left-6 lg:left-10 inline-flex items-center gap-2
                               text-xs font-semibold uppercase tracking-[0.1em] text-white/80 hover:text-[#FF6B00]
                               transition-colors duration-200 z-10"
                >
                    <FiArrowLeft size={14} />
                    Back to News
                </Link>
            </div>

            {/* ═══════════════════════════════════════════ */}
            {/* ── Article Header ── */}
            {/* ═══════════════════════════════════════════ */}
            <div className="mx-auto max-w-3xl px-6 lg:px-0 -mt-16 relative z-10">

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                    {article.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="inline-block rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10
                                       px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#FF6B00]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white">
                    {article.title}
                </h1>

                {/* Meta */}
                <div className="mt-5 flex items-center gap-4 text-[12px] font-medium text-[#B0B0B0]">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#B0B0B0]/40" />
                    <span>{article.readTime}</span>
                </div>

                {/* Divider */}
                <div className="mt-8 h-px bg-white/10" />
            </div>

            {/* ═══════════════════════════════════════════ */}
            {/* ── Article Body ── */}
            {/* ═══════════════════════════════════════════ */}
            <div className="mx-auto max-w-3xl px-6 lg:px-0 py-10">
                {article.body.map((paragraph, i) => (
                    <p
                        key={i}
                        className="mb-6 text-[15px] leading-[1.85] text-[#D0D0D0]"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* ═══════════════════════════════════════════ */}
            {/* ── Share / Social ── */}
            {/* ═══════════════════════════════════════════ */}
            <div className="mx-auto max-w-3xl px-6 lg:px-0 pb-12">
                <div className="h-px bg-white/10 mb-6" />
                <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#B0B0B0]">Share</span>
                    {/* LinkedIn */}
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-[#B0B0B0]
                                   hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all duration-200"
                        aria-label="Share on LinkedIn"
                    >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" /></svg>
                    </a>
                    {/* X / Twitter */}
                    <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-[#B0B0B0]
                                   hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all duration-200"
                        aria-label="Share on X"
                    >
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    {/* Facebook */}
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-[#B0B0B0]
                                   hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all duration-200"
                        aria-label="Share on Facebook"
                    >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                </div>
            </div>

            {/* ═══════════════════════════════════════════ */}
            {/* ── Related Press Releases ── */}
            {/* ═══════════════════════════════════════════ */}
            {related.length > 0 && (
                <section className="border-t border-white/10 px-6 lg:px-10 py-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-center gap-4 mb-10">
                            {/* Orange circle accent */}
                            <span className="w-3 h-3 rounded-full bg-[#FF6B00]" />
                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                                Related press releases
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((rel) => (
                                <Link
                                    key={rel.slug}
                                    to={`/news/${rel.slug}`}
                                    className="group"
                                >
                                    <div className="overflow-hidden rounded-lg bg-[#1A1A1A]">
                                        <img
                                            src={rel.image}
                                            alt={rel.title}
                                            loading="lazy"
                                            className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <h3 className="mt-4 text-sm font-bold leading-snug text-white group-hover:text-[#FF6B00] transition-colors">
                                        {rel.title}
                                    </h3>

                                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#B0B0B0]/70">
                                        {rel.tags.join(" | ")}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </article>
    );
};

export default NewsDetail;
