import React from "react";

const CompanyAbout = () => {
    return (
        <section className="bg-[#0F0F0F] px-6 lg:px-10 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-14 md:grid-cols-2 md:items-start">
                    {/* Left — Headline */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF6B00] mb-4">
                            About Us
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.05] tracking-tight text-white">
                            From coast to coast and Canada to Mexico
                        </h2>
                    </div>

                    {/* Right — Description */}
                    <div>
                        <p className="text-lg leading-8 text-[#B0B0B0]">
                            ShipNex is a premier third-party logistics company providing
                            creative supply chain solutions. With a passion for excellence, we
                            leverage our nationwide network to deliver customized, technology-driven
                            transportation and distribution solutions that help businesses compete
                            and win.
                        </p>

                        <div className="mt-10 h-px bg-[#FF6B00]" />

                        <div className="mt-10 grid gap-6 sm:grid-cols-3">
                            <div className="border-l border-[#FF6B00] pl-4">
                                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                    Founded
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                    Growing strong since day one with a vision for innovation.
                                </p>
                            </div>

                            <div className="border-l border-[#FF6B00] pl-4">
                                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                    Nationwide
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                    Service areas spanning across North America.
                                </p>
                            </div>

                            <div className="border-l border-[#FF6B00] pl-4">
                                <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                                    People First
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#B0B0B0]">
                                    A culture of collaboration, integrity, and results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyAbout;
