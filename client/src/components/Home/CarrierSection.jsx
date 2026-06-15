import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaTruckFast, FaRoute, FaHandshake } from "react-icons/fa6";

const CarrierSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#0F0F0F] text-white">
            <div className="absolute left-1/2 top-0 h-[520px] w-[140vw] -translate-x-1/2 rounded-b-[100%] border-b border-[#B0B0B0]/20" />

            <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 lg:px-10">
                <div>
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#FF6B00]">
                        Carrier Network
                    </p>

                    <h2 className="max-w-2xl  text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                        Freight that keeps you loaded, paid, and moving forward.
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-8 text-[#B0B0B0] md:text-lg">
                        Join a carrier network built for steady miles, fast communication,
                        reliable freight, and support that respects your time on the road.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <Link
                            to="/company"
                            className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F0F0F]"
                        >
                            Join our carrier network
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FF6B00] transition group-hover:bg-[#0F0F0F] group-hover:text-white">
                                <FiArrowRight size={18} />
                            </span>
                        </Link>

                        <div className="text-sm text-[#B0B0B0]">
                            Trusted lanes. Clear terms. Better support.
                        </div>
                    </div>

                    <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="border-l border-[#FF6B00] pl-4">
                            <FaTruckFast className="mb-3 text-2xl text-[#FF6B00]" />
                            <p className="text-sm font-semibold text-white">Consistent Freight</p>
                        </div>

                        <div className="border-l border-[#FF6B00] pl-4">
                            <FaRoute className="mb-3 text-2xl text-[#FF6B00]" />
                            <p className="text-sm font-semibold text-white">Reliable Routes</p>
                        </div>

                        <div className="border-l border-[#FF6B00] pl-4">
                            <FaHandshake className="mb-3 text-2xl text-[#FF6B00]" />
                            <p className="text-sm font-semibold text-white">Carrier Support</p>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto h-[430px] w-full max-w-[520px]">
                    <div className="absolute right-8 top-4 h-72 w-72 overflow-hidden rounded-full border border-white/10 bg-[#1A1A1A] md:h-80 md:w-80">
                        <img
                            src="https://i.pinimg.com/736x/8d/64/c8/8d64c8f5a2045286044509e753a2fa38.jpg"
                            alt="Professional truck driver"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute left-10 bottom-16 h-44 w-44 overflow-hidden rounded-full border-4 border-[#0F0F0F] bg-[#1A1A1A] md:h-52 md:w-52">
                        <img
                            src="https://i.pinimg.com/736x/91/21/f7/9121f765cd64a82a5f6c05d72fedc992.jpg"
                            alt="Freight truck on highway"
                            className="h-full w-full object-cover"
                        />
                    </div>


                    <div className="absolute right-40 bottom-8 rounded-lg border border-white/10 bg-[#1A1A1A] px-5 py-3 shadow-2xl">
                        <p className="text-4xl font-semibold text-white">24/7</p>
                        <p className="mt-2 text-base text-[#B0B0B0]">Carrier assistance</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarrierSection;