import React from "react";

const reviews = [
    {
        quote:
            "We're offering more than just jobs. We're offering career opportunities that people can build their lives around.",
        name: "Manny McElroy",
        role: "President, Transportation - South Center",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "Great teams are built when people feel trusted, supported, and challenged to grow.",
        name: "Sarah Mitchell",
        role: "Chief People Officer",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "Operational excellence starts with people who care deeply about the work, the customer, and each other.",
        name: "David Carter",
        role: "Vice President, Operations",
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "Our leadership philosophy is simple: remove barriers, create opportunity, and help people win.",
        name: "Angela Brooks",
        role: "Senior Director, Logistics",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "We believe culture is not a slogan. It is how we communicate, solve problems, and show up every day.",
        name: "Robert Hayes",
        role: "Executive Director, Carrier Relations",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    {
        quote:
            "The best organizations create space for ambition and help people see a future they can grow into.",
        name: "Emily Johnson",
        role: "Director, Talent Development",
        image:
            "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=300&q=80",
    },
];

const HeadReviews = () => {
    return (
        <section className="bg-[#0F0F0F] px-5 py-20 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#FF6B00]">
                        Leadership Voices
                    </p>

                    <h2 className="text-4xl font-black uppercase leading-tight md:text-5xl">
                        What Our Leaders Say
                    </h2>
                </div>

                <div className="relative">
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#0F0F0F] to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#0F0F0F] to-transparent" />

                    <div className="flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory no-scrollbar">
                        {reviews.map((review) => (
                            <article
                                key={review.name}
                                className="min-w-[85%] snap-start rounded-lg border border-white/10 bg-[#1A1A1A] p-6 sm:min-w-[420px] lg:min-w-[calc((100%-48px)/3)]"
                            >
                                <div className="mb-7 flex items-center gap-4">
                                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#FF6B00] bg-[#0F0F0F] p-1">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="h-full w-full rounded-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-white">
                                            {review.name}
                                        </h3>
                                        <p className="mt-1 text-sm leading-5 text-[#B0B0B0]">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-base leading-7 text-white">
                                    "{review.quote}"
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeadReviews;