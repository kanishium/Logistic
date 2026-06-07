import React from "react";

/* ── Stylized text-based logos for fictional/generic logistics partners ── */
const logos = [
    { name: "APEX", sub: "FREIGHT" },
    { name: "NOVA", sub: "SUPPLY CO." },
    { name: "ATLAS", sub: "CARRIERS" },
    { name: "SUMMIT", sub: "LOGISTICS" },
    { name: "IRON", sub: "TRANSPORT" },
    { name: "VANGUARD", sub: "SHIPPING" },
    { name: "MERIDIAN", sub: "GLOBAL" },
    { name: "PIONEER", sub: "WAREHOUSING" },
    { name: "TRIDENT", sub: "INTERMODAL" },
];

const LogoItem = ({ name, sub }) => (
    <div className="flex h-20 w-36 shrink-0 flex-col items-center justify-center select-none">
        <span
            className="text-[22px] md:text-[26px] font-black tracking-[0.08em] leading-none text-[#B0B0B0]/70"
            style={{ fontFamily: "'Oswald', Impact, 'Arial Narrow', sans-serif" }}
        >
            {name}
        </span>
        <span className="mt-0.5 text-[8px] md:text-[9px] font-semibold tracking-[0.18em] uppercase text-[#B0B0B0]/35">
            {sub}
        </span>
    </div>
);

const LogoMarquee = () => {
    return (
        <div className="w-full overflow-hidden bg-[#0F0F0F] py-10 border-t border-[#1A1A1A]">
            <div className="relative flex overflow-hidden">
                <div className="flex shrink-0 animate-logo-marquee items-center gap-20 px-10">
                    {logos.map((logo, index) => (
                        <LogoItem key={index} {...logo} />
                    ))}
                </div>

                <div className="flex shrink-0 animate-logo-marquee items-center gap-20 px-10">
                    {logos.map((logo, index) => (
                        <LogoItem key={`duplicate-${index}`} {...logo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;