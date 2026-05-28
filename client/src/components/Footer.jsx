import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaVimeoV,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
    FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

const socialLinks = [
    { icon: <FaXTwitter />, url: "#" },
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaVimeoV />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaTiktok />, url: "#" },
];

const partnerLogos = ["Armstrong", "CSCMP", "IANA", "TIA", "WERC", "DAT"];

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="border-y border-white/20">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.1fr_1fr] lg:px-10">
                    <div className="relative flex gap-8 md:border-r md:border-white/20 md:pr-16">
                        <Link to="/" className="shrink-0">
                            <div className="text-5xl font-black italic leading-none">
                                its
                            </div>
                            <div className="mt-1 w-fit bg-[#FF6B00] px-2 py-1 text-[10px] font-bold uppercase text-black">
                                Logistics
                            </div>
                        </Link>

                        <div>
                            <h3 className="text-2xl font-black uppercase leading-none">
                                Unleash your potential
                            </h3>
                            <p className="mt-3 max-w-sm text-sm leading-6 text-[#B0B0B0]">
                                Collaborate with the best, seize limitless opportunities, and
                                advance your career.
                            </p>

                            <Link
                                to="/careers"
                                className="mt-7 inline-flex items-center gap-3 border border-[#FF6B00] px-4 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#FF6B00] hover:text-black"
                            >
                                Join Our Team
                                <FiArrowRight size={15} />
                            </Link>
                        </div>
                    </div>

                    <div className="md:pl-8">
                        <h3 className="text-sm font-black uppercase">
                            Looking for support? We&apos;re standing by.
                        </h3>

                        <p className="mt-4 max-w-md text-sm leading-6 text-[#B0B0B0]">
                            Creative logistics solutions are what we do best. No matter your
                            challenge, we can help — get in touch.
                        </p>

                        <a
                            href="tel:8555623487"
                            className="mt-5 block text-2xl font-medium text-white"
                        >
                            855-562-3487
                        </a>

                        <div className="mt-8 h-px w-20 bg-white/30" />

                        <div className="mt-6 flex items-center gap-5">
                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    className="text-base text-[#B0B0B0] transition hover:text-[#FF6B00]"
                                    aria-label="Social link"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-white/20">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-8 sm:grid-cols-3 md:grid-cols-6 lg:px-10">
                    {partnerLogos.map((logo) => (
                        <div
                            key={logo}
                            className="flex h-12 items-center justify-center text-2xl font-black uppercase tracking-tight text-[#B0B0B0]"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-[11px] text-[#B0B0B0] md:flex-row md:items-center md:flex-wrap lg:px-10">
                <span>© 2026 ITS Logistics</span>

                <Link to="/privacy-policy" className="hover:text-[#FF6B00]">
                    Privacy Policy
                </Link>

                <Link to="/terms" className="hover:text-[#FF6B00]">
                    Terms of Use
                </Link>

                <Link to="/cookies" className="hover:text-[#FF6B00]">
                    Cookie Declaration
                </Link>

                <Link to="/brokerage-terms" className="hover:text-[#FF6B00]">
                    Brokerage Terms & Conditions
                </Link>

                <Link to="/privacy-choices" className="hover:text-[#FF6B00]">
                    Do not sell or share my personal information
                </Link>
            </div>
        </footer>
    );
};

export default Footer;