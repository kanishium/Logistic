import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const OurCompanyHome = () => {
    return (
        <>
            <section className="relative min-h-screen overflow-hidden bg-transparent">
                <div className="fixed inset-0 -z-10">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
                        alt="Company team"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 flex min-h-screen items-center">
                    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl lg:text-8xl">
                                A team culture <br />
                                built to <span className="text-[#FF6B00]">win</span>
                            </h1>

                            <Link
                                to="/careers"
                                className="group mt-10 inline-flex items-center gap-4 text-base font-semibold text-white"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B00] text-white transition group-hover:bg-white group-hover:text-[#0F0F0F]">
                                    <FiArrowRight size={24} />
                                </span>
                                Ready to join our team?
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="relative z-20 bg-[#0F0F0F] px-6 py-24 text-white">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-4xl font-bold">Next section starts here</h2>
                    <p className="mt-4 max-w-2xl text-[#B0B0B0]">
                        This section has its own background color, so it scrolls over and
                        covers the fixed image.
                    </p>
                </div>
            </section> */}
        </>
    );
};

export default OurCompanyHome;