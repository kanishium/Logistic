import React, { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
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
            "ITS has provided third party logistics solutions that have provided cost savings while enhancing service, and they are an integral part of the Starbucks supply chain.",
        name: "Todd McCullough",
        role: "Director of Distribution at Starbucks",
        icon: <SiStarbucks />,
    },
    {
        quote:
            "ITS understands time-sensitive logistics. Their execution, visibility, and support have made a measurable difference for our distribution team.",
        name: "Michael Brown",
        role: "Supply Chain Director at FedEx",
        icon: <SiFedex />,
    },
    {
        quote:
            "We value their ability to adapt quickly, solve problems before they slow us down, and maintain a high level of service across locations.",
        name: "Emily Carter",
        role: "Regional Logistics Lead at DHL",
        icon: <SiDhl />,
    },
    {
        quote:
            "The team brings consistency and accountability to every shipment. That reliability has helped us improve both planning and customer delivery.",
        name: "David Miller",
        role: "Transportation Manager at UPS",
        icon: <SiUps />,
    },
    {
        quote:
            "Their logistics support has helped us reduce delays, improve coordination, and strengthen the flow of products through our retail network.",
        name: "Jessica Wilson",
        role: "Distribution Planning Manager at Walmart",
        icon: <SiWalmart />,
    },
    {
        quote:
            "ITS has been a strong partner for our delivery operations, offering practical solutions and dependable service when volume increases.",
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
            "We depend on partners who can keep pace with rapid growth. ITS has delivered the responsiveness and precision our operation requires.",
        name: "Chris Anderson",
        role: "Warehouse Operations Lead at Tesla",
        icon: <SiTesla />,
    },
    {
        quote:
            "Their team provides the visibility and dependability we need across complex logistics workflows, helping us maintain service quality at scale.",
        name: "Rachel Thompson",
        role: "Global Supply Chain Analyst at Apple",
        icon: <SiApple />,
    },
];

const Review = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextReview = () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const activeReview = reviews[activeIndex];

    return (
        <section className="relative min-h-[560px] bg-[#0F0F0F] flex items-center justify-center px-6 py-20">
            <button
                type="button"
                onClick={prevReview}
                className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full border border-[#FF6B00] text-[#FFFFFF] flex items-center justify-center hover:border-[#FF6B00] hover:bg-[#FF6B00] transition"
            >
                <IoArrowBack size={30} />
            </button>

            <div className="max-w-4xl mx-auto text-center bg-[#f7f8fb] px-6 py-12 md:px-12 rounded-lg">
                <div className="mx-auto mb-14 text-7xl text-[#0F0F0F] flex justify-center">
                    {activeReview.icon}
                </div>

                <p className="text-[22px] md:text-2xl leading-snug text-[#0F0F0F] font-light">
                    "{activeReview.quote}"
                </p>

                <h3 className="mt-3 text-lg font-semibold text-[#0F0F0F]">
                    {activeReview.name}
                </h3>

                <p className="mt-3 text-base md:text-lg text-[#1A1A1A]">
                    {activeReview.role}
                </p>
            </div>

            <button
                type="button"
                onClick={nextReview}
                className="absolute right-6 md:right-14 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full border border-[#FF6B00] text-[#FFFFFF] flex items-center justify-center hover:bg-[#FF6B00] transition"
            >
                <IoArrowForward size={30} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-3 w-3 rounded-full transition ${activeIndex === index ? "bg-[#FF6B00]" : "bg-[#B0B0B0]"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Review;