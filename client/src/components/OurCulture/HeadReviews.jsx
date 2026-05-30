import React, { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const reviews = [
    {
        quote:
            "We're offering more than just jobs. We're offering career opportunities that people can build their lives around. That takes investment and a real commitment to fostering a culture that starts and ends with the people that work here.",
        name: "Manny McElroy",
        role: "President, Transportation - South Center",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "Great teams are built when people feel trusted, supported, and challenged to grow. Our goal is to create an environment where every team member can do the best work of their career.",
        name: "Sarah Mitchell",
        role: "Chief People Officer",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "Operational excellence starts with people who care deeply about the work, the customer, and each other. That mindset is what keeps our organization moving forward.",
        name: "David Carter",
        role: "Vice President, Operations",
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "Our leadership philosophy is simple: remove barriers, create opportunity, and help people win. When our teams succeed, our customers feel that success too.",
        name: "Angela Brooks",
        role: "Senior Director, Logistics",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "We believe culture is not a slogan. It is how we communicate, how we solve problems, and how we show up for one another every single day.",
        name: "Robert Hayes",
        role: "Executive Director, Carrier Relations",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "The best organizations create space for ambition. We want our people to see a future here and know they have the support to reach it.",
        name: "Emily Johnson",
        role: "Director, Talent Development",
        image:
            "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=300&q=80",
    },
];

const HeadReviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextReview = () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const activeReview = reviews[activeIndex];

    return (
        <section className="relative flex min-h-[430px] items-center justify-center bg-[#f7f8fb] px-6 py-16 text-[#0F0F0F]">
            <button
                type="button"
                onClick={prevReview}
                className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF6B00] text-[#0F0F0F] transition hover:bg-[#FF6B00] hover:text-white md:left-10"
                aria-label="Previous review"
            >
                <IoArrowBack size={24} />
            </button>

            <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-9 h-16 w-16 overflow-hidden rounded-full bg-[#FF6B00] p-1">
                    <img
                        src={activeReview.image}
                        alt={activeReview.name}
                        className="h-full w-full rounded-full object-cover"
                    />
                </div>

                <p className="text-lg leading-relaxed text-[#0F0F0F] md:text-xl">
                    "{activeReview.quote}"
                </p>

                <h3 className="mt-2 text-base font-semibold text-[#0F0F0F]">
                    {activeReview.name}
                </h3>

                <p className="mt-2 text-sm text-[#666666]">{activeReview.role}</p>
            </div>

            <button
                type="button"
                onClick={nextReview}
                className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF6B00] text-[#0F0F0F] transition hover:bg-[#FF6B00] hover:text-white md:right-10"
                aria-label="Next review"
            >
                <IoArrowForward size={24} />
            </button>

            <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full transition ${activeIndex === index ? "bg-[#666666]" : "bg-[#B0B0B0]"
                            }`}
                        aria-label={`Go to review ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeadReviews;