import React from "react";
// Video served from public/ folder — not bundled by Vite
const HeroSectionvideo = '/HeroSectionvideo.mp4';

const ServiceHero = () => {
    return (
        <section className="bg-black py-5 text-white md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <h1 className="relative text-white text-center text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-7xl lg:text-8xl">
                    Your strategic <br />
                    supply chain <span className="text-[#FF6B00]">Partner</span>
                </h1>

                <div className="relative mt-8 mx-auto overflow-hidden rounded-lg bg-[#1A1A1A] md:mt-10">
                    <video
                        src="
https://cdn.sanity.io/files/6mx0z6jm/production/5eda0f71403576cf9ff0467cbe3b2bc1bb17830c.mp4"
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
                                Service Advantage
                            </p>

                            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
                                Logistics Built Around Speed, Visibility, And Control
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-8 text-[white]">
                                Our services are designed to keep freight moving with clarity and
                                confidence. From truckload and drayage to fulfillment and supply chain
                                support, we bring flexible solutions, responsive communication, and
                                dependable execution to every shipment.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                <div className="border-l border-[#FF6B00] pl-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        Move Faster
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-white">
                                        We help reduce delays and keep freight flowing.
                                    </p>
                                </div>

                                <div className="border-l border-[#FF6B00] pl-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        Stay Visible
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-white">
                                        We give teams clearer insight across the supply chain.
                                    </p>
                                </div>

                                <div className="border-l border-[#FF6B00] pl-4">
                                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                        Scale Smarter
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-white">
                                        We adapt solutions as your volume and needs change.
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

export default ServiceHero;