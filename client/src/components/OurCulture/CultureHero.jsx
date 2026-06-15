import React from "react";
// Video served from public/ folder — not bundled by Vite
const HeroSectionvideo = '/HeroSectionvideo.mp4';

const CultureHero = () => {
    return (
        <section className="bg-[#0F0F0F] px-5 py-5 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <h1 className="relative z-10 text-center text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-7xl lg:text-8xl">
                    The Foundation Of <br />
                    ITS <span className="text-[#FF6B00]">Our Culture</span>
                </h1>

                <div className="relative mt-8 mx-auto overflow-hidden rounded-lg bg-[#1A1A1A] md:mt-10">
                    <video
                        src="
https://cdn.sanity.io/files/6mx0z6jm/production/e542b937e13d343467aff5ba5a7438d8f23b478f.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-[320px] w-full object-cover brightness-[0.72] md:h-[520px]"
                    />
                </div>

                <div className="mt-12 border-t border-[#FF6B00] pt-10 md:mt-14">
                    <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF6B00]">
                                The ITS Way
                            </p>

                            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
                                Culture That Moves With Purpose And Progress
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-8 text-[#B0B0B0]">
                                Our culture starts with people who take ownership, move with honesty,
                                and show up for one another. At ShipNex, every team member plays
                                a part in building momentum, solving challenges, and creating better
                                outcomes for our customers, our teams, and our communities.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                <div className="border-l border-[#FF6B00] pl-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        Own It
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                        We take responsibility and follow through.
                                    </p>
                                </div>

                                <div className="border-l border-[#FF6B00] pl-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        Win Together
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                        We support each other and grow as one team.
                                    </p>
                                </div>

                                <div className="border-l border-[#FF6B00] pl-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        Keep Moving
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                        We adapt quickly and keep progress in motion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CultureHero;