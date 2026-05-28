import {
    SiStarbucks,
    SiFedex,
    SiDhl,
    SiUps,
    SiWalmart,
    SiTarget,
    SiNike,
    SiTesla,
    SiApple,
} from "react-icons/si";

const logos = [
    <SiStarbucks />,
    <SiFedex />,
    <SiDhl />,
    <SiUps />,
    <SiWalmart />,
    <SiTarget />,
    <SiNike />,
    <SiTesla />,
    <SiApple />,
];

const LogoMarquee = () => {
    return (
        <div className="w-full overflow-hidden bg-[#0F0F0F] py-10 border-t border-[#1A1A1A]">
            <div className="relative flex overflow-hidden">
                <div className="flex shrink-0 animate-logo-marquee items-center gap-24 px-12">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex h-20 w-28 shrink-0 items-center justify-center text-5xl md:text-6xl text-[#B0B0B0]  transition"
                        >
                            {logo}
                        </div>
                    ))}
                </div>

                <div className="flex shrink-0 animate-logo-marquee items-center gap-24 px-12">
                    {logos.map((logo, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="flex h-20 w-28 shrink-0 items-center justify-center text-5xl md:text-6xl text-[#B0B0B0]  transition"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;