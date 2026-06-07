import React from "react";

const CompanyMission = () => {
    return (
        <section className="bg-[#111111] px-6 lg:px-10 py-24">
            <div className="mx-auto max-w-5xl text-center">
                {/* Accent line */}
                <div className="flex justify-center mb-8">
                    <span className="w-12 h-1 rounded-full bg-[#FF6B00]" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-black uppercase leading-[1.15] tracking-tight text-white">
                    To create measurable value for our stakeholders by serving our
                    customers and building our community.
                </h2>

                <p className="mt-8 text-base sm:text-lg leading-8 text-[#B0B0B0] max-w-3xl mx-auto">
                    Our mission drives everything we do — from the way we invest in
                    technology to how we develop our people and strengthen the
                    communities where we operate.
                </p>
            </div>
        </section>
    );
};

export default CompanyMission;
