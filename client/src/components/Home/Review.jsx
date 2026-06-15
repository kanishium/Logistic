import React, { useRef, useState, useEffect } from "react";
import {
    SiStarbucks,
    SiFedex,
    SiDhl,
    SiUps,
    SiWalmart,
    SiTarget,
    SiNike,
    SiTesla,
    SiApple,
} from "react-icons/si";

const reviews = [
    {
        quote:
            "ShipNex has provided third party logistics solutions that have delivered cost savings while enhancing service, and they are an integral part of our supply chain.",
        name: "Todd McCullough",
        role: "Director of Distribution at Starbucks",
        icon: <SiStarbucks />,
    },
    {
        quote:
            "ShipNex understands time-sensitive logistics. Their execution, visibility, and support have made a measurable difference for our distribution team.",
        name: "Michael Brown",
        role: "Supply Chain Director at FedEx",
        icon: <SiFedex />,
    },
    {
        quote:
            "We value ShipNex's ability to adapt quickly, solve problems before they slow us down, and maintain a high level of service across locations.",
        name: "Emily Carter",
        role: "Regional Logistics Lead at DHL",
        icon: <SiDhl />,
    },
    {
        quote:
            "The ShipNex team brings consistency and accountability to every shipment. That reliability has helped us improve both planning and customer delivery.",
        name: "David Miller",
        role: "Transportation Manager at UPS",
        icon: <SiUps />,
    },
    {
        quote:
            "ShipNex's logistics support has helped us reduce delays, improve coordination, and strengthen the flow of products through our retail network.",
        name: "Jessica Wilson",
        role: "Distribution Planning Manager at Walmart",
        icon: <SiWalmart />,
    },
    {
        quote:
            "ShipNex has been a strong partner for our delivery operations, offering practical solutions and dependable service when volume increases.",
        name: "Robert Davis",
        role: "Supply Chain Manager at Target",
        icon: <SiTarget />,
    },
    {
        quote:
            "Their attention to detail and ability to move quickly have helped our team keep product launches and seasonal demand on schedule.",
        name: "Amanda Lee",
        role: "Logistics Coordinator at Nike",
        icon: <SiNike />,
    },
    {
        quote:
            "We depend on partners who can keep pace with rapid growth. ShipNex has delivered the responsiveness and precision our operation requires.",
        name: "Chris Anderson",
        role: "Warehouse Operations Lead at Tesla",
        icon: <SiTesla />,
    },
    {
        quote:
            "The ShipNex team provides the visibility and dependability we need across complex logistics workflows, helping us maintain service quality at scale.",
        name: "Rachel Thompson",
        role: "Global Supply Chain Analyst at Apple",
        icon: <SiApple />,
    },
];
const Review = () => {
    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    /* ── Track scroll position for progress bar ── */
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const onScroll = () => {
            const maxScroll = el.scrollWidth - el.clientWidth;
            setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="relative bg-[#0F0F0F] py-16 md:py-24 lg:py-28 overflow-hidden">

            {/* ── Section header ── */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-10 md:mb-14">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[2px] bg-[#FF6B00]" />
                    <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-[#FF6B00]">
                        Testimonials
                    </span>
                </div>
                <h2
                    className="text-white/90 text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] leading-[1.15] font-light tracking-tight max-w-[500px]"
                >
                    What our <span className="font-semibold text-white">partners</span> say
                </h2>
            </div>

            {/* ── Scrollable cards row ── */}
            <div
                ref={scrollRef}
                className="flex gap-5 md:gap-6 overflow-x-auto px-6 lg:px-10 pb-4 snap-x snap-mandatory"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                {/* Hide scrollbar for webkit */}
                <style>{`
                    .review-scroll::-webkit-scrollbar { display: none; }
                `}</style>

                {reviews.map((review, i) => (
                    <div
                        key={i}
                        className="group flex-shrink-0 snap-start w-[85vw] sm:w-[380px] md:w-[400px] lg:w-[420px]"
                    >
                        <div
                            className="relative h-full rounded-2xl px-7 py-9 md:px-9 md:py-10 flex flex-col transition-all duration-300
                                group-hover:-translate-y-1 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
                            style={{
                                background: "linear-gradient(155deg, #1C1C1E 0%, #141416 100%)",
                                boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            {/* Top orange accent */}
                            <div
                                className="absolute top-0 left-8 right-8 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: "linear-gradient(90deg, transparent, #FF6B00, transparent)" }}
                            />

                            {/* Quote mark */}
                            <svg className="w-8 h-8 mb-5 opacity-[0.15] flex-shrink-0" viewBox="0 0 64 64" fill="none">
                                <path
                                    d="M14 40c0-6 4.5-13 12-18l2.5 3.5C23 30 20.5 34 20 37h6.5c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H17c-1.7 0-3-1.3-3-3V40zm24 0c0-6 4.5-13 12-18l2.5 3.5C47 30 44.5 34 44 37h6.5c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H41c-1.7 0-3-1.3-3-3V40z"
                                    fill="#FF6B00"
                                />
                            </svg>

                            {/* Quote text */}
                            <p
                                className="text-white/80 text-[15px] md:text-[16px] leading-[1.7] font-light flex-1"
                                style={{ fontFamily: "'Georgia', 'Playfair Display', serif" }}
                            >
                                "{review.quote}"
                            </p>

                            {/* Divider */}
                            <div className="mt-7 mb-5 w-8 h-[1.5px] rounded-full bg-[#FF6B00]/30" />

                            {/* Author row */}
                            <div className="flex items-center gap-4">
                                {/* Icon avatar */}
                                <div
                                    className="flex items-center justify-center w-11 h-11 rounded-full text-xl flex-shrink-0 transition-all duration-300
                                        group-hover:shadow-[0_0_12px_rgba(255,107,0,0.2)]"
                                    style={{
                                        background: "rgba(255,107,0,0.1)",
                                        border: "1px solid rgba(255,107,0,0.2)",
                                        color: "#FF6B00",
                                    }}
                                >
                                    {review.icon}
                                </div>
                                <div>
                                    <h4 className="text-white text-[14px] font-bold tracking-wide leading-tight">
                                        {review.name}
                                    </h4>
                                    <p className="text-[#888888] text-[12px] tracking-wide mt-0.5 leading-tight">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Right padding spacer */}
                <div className="flex-shrink-0 w-1" />
            </div>

            {/* ── Scroll progress bar ── */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mt-8 md:mt-10">
                <div className="w-full max-w-[300px] h-[2px] bg-white/8 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#FF6B00]/60 rounded-full transition-[width] duration-100 ease-out"
                        style={{ width: `${Math.max(10, scrollProgress * 100)}%` }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Review;