import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const teamCards = [
    {
        title: "A World-Class Team",
        label: "Always Striving For More",
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
        text:
            "We invest in your personal and professional growth, providing the tools, resources, and support you need to unlock your full potential.",
    },
    {
        title: "The ITS Way",
        label: "Embodying Our Culture",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
        text:
            "The ITS Way guides how we think, act, and show up for each other and our customers, defined by honesty, adaptability, and commitment.",
    },
    {
        title: "A Commitment to Excellence",
        label: "Unleash Your Potential",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
        text:
            "We build a high-energy, goal-oriented environment where people take pride in doing meaningful work and delivering results.",
    },
];

const TeamSection = () => {
    return (
        <section className="bg-[#0F0F0F] px-5 py-20 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
                    <div>
                        <p className="max-w-2xl text-lg leading-8 text-white md:text-xl">
                            "I love seeing people on my team grow, seeing them be promoted,
                            and just the positive changes in their professional careers. At
                            ITS, you're really changing people's lives whether you're their
                            direct manager or not."
                        </p>

                        <p className="mt-8 text-sm italic text-[#B0B0B0]">
                            — Sarah Ward, Manager of Network Operations
                        </p>
                    </div>

                    <div className="relative mx-auto h-[310px] w-[310px] md:h-[380px] md:w-[380px]">
                        <div className="h-full w-full overflow-hidden rounded-full border border-[#B0B0B0] bg-[#1A1A1A] p-2">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1664478244612-d4b3238abd81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZlbWFsZSUyMGJvc3N8ZW58MHx8MHx8fDA%3D"
                                alt="Team member portrait"
                                className="h-full w-full rounded-full text-center object-cover brightness-[0.85]"
                            />
                        </div>

                        <div className="absolute bottom-4 left-8 h-20 w-20 rounded-full bg-[#FF6B00]/75" />
                    </div>
                </div>

                <Link
                    to="/company"
                    className="group mt-16 inline-flex items-center gap-5 text-xl font-bold text-white"
                >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B00] text-white transition group-hover:bg-white group-hover:text-[#0F0F0F]">
                        <FiArrowRight size={24} />
                    </span>
                    Join Our Team
                </Link>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {teamCards.map((card) => (
                        <article key={card.title}>
                            <div className="overflow-hidden rounded-lg bg-[#1A1A1A]">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-52 w-full object-cover brightness-[0.85] transition duration-500 hover:scale-105"
                                />
                            </div>

                            <h3 className="mt-7 text-2xl font-bold text-white">
                                {card.title}
                            </h3>

                            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#B0B0B0]">
                                {card.label}
                            </p>

                            <p className="mt-6 text-base leading-7 text-[#B0B0B0]">
                                {card.text}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;