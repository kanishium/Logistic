import React from "react";
import HeroSectionvideo from "../../assets/HeroSectionvideo.mp4";

const CultureHero = () => {
    return (
        <section className="bg-[#0F0F0F] px-5 py-20 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <h1 className="relative z-10 text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-7xl lg:text-8xl">
                    The Foundation Of <br />
                    ITS <span className="text-[#FF6B00]">Our Culture</span>
                </h1>

                <div className="relative -mt-4 ml-auto overflow-hidden rounded-lg bg-[#1A1A1A] md:-mt-8 md:w-[88%]">
                    <video
                        src={HeroSectionvideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-[320px] w-full object-cover brightness-[0.72] md:h-[520px]"
                    />
                </div>

                <div className="mx-auto mt-12 max-w-2xl border-t border-[#FF6B00] pt-8 md:ml-[42%] md:mt-14">
                    <h2 className="text-2xl font-semibold text-white md:text-3xl">
                        Our Culture Starts and Ends with You
                    </h2>

                    <p className="mt-5 text-base leading-7 text-[#B0B0B0]">
                        At ITS Logistics, every single team member is committed to a
                        relentless pursuit of excellence. Here, your honesty and drive to
                        win are celebrated, and your willingness to hold yourself and those
                        around you accountable drives our shared success. We truly believe
                        that, together, we can conquer any challenge and empower futures for
                        ourselves, our teams, and our communities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CultureHero;