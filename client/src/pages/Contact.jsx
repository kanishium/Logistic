import React, { useState } from "react";
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";

const API_URL = "http://localhost:5000/api/contact";

const services = [
    "Truckload Services",
    "Drayage + Intermodal",
    "Distribution + Fulfillment",
    "Supply Chain Services",
    "Technology Solutions",
    "General Inquiry",
];

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        try {
            await axios.post(API_URL, form);
            setStatus("success");
            setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
        } catch (err) {
            setStatus("error");
            setErrorMsg(
                err.response?.data?.error || "Something went wrong. Please try again."
            );
        }
    };

    return (
        <div className="bg-[#0F0F0F] text-white">
            {/* ── Heading ── */}
            <section className="px-6 pt-4 pb-16 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#FF6B00]">
                        Contact
                    </p>
                    <h1 className="text-5xl font-black uppercase leading-[0.88] tracking-tight md:text-7xl lg:text-8xl">
                        Let's Talk
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-8 text-[#B0B0B0] md:text-lg">
                        Whether you need a strategic supply chain partner or have questions
                        about our services, our team is standing by.
                    </p>
                </div>
            </section>

            {/* ── Form + Info ── */}
            <section className="border-t border-white/10 px-6 py-20 lg:px-10">
                <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-[1.2fr_1fr]">
                    {/* ── Form ── */}
                    <div>
                        {status === "success" ? (
                            <div className="py-16">
                                <h3 className="text-3xl font-black uppercase tracking-tight">
                                    Message <span className="text-[#FF6B00]">Sent</span>
                                </h3>
                                <p className="mt-4 max-w-md text-base leading-7 text-[#B0B0B0]">
                                    Thank you for reaching out. We've sent a confirmation to your
                                    email and our team will respond shortly.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="group mt-8 inline-flex items-center gap-3 border border-[#FF6B00] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#FF6B00] hover:text-black"
                                >
                                    Send another message
                                    <FiArrowRight size={15} />
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Full Name *"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-[#B0B0B0]/60 outline-none transition-colors focus:border-[#FF6B00]"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email Address *"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-[#B0B0B0]/60 outline-none transition-colors focus:border-[#FF6B00]"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-[#B0B0B0]/60 outline-none transition-colors focus:border-[#FF6B00]"
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company Name"
                                        value={form.company}
                                        onChange={handleChange}
                                        className="w-full border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-[#B0B0B0]/60 outline-none transition-colors focus:border-[#FF6B00]"
                                    />
                                </div>

                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    className="w-full appearance-none border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none transition-colors focus:border-[#FF6B00]"
                                >
                                    <option value="" className="bg-[#0F0F0F]">Select a Service</option>
                                    {services.map((s) => (
                                        <option key={s} value={s} className="bg-[#0F0F0F]">{s}</option>
                                    ))}
                                </select>

                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Tell us about your logistics needs... *"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-[#B0B0B0]/60 outline-none transition-colors focus:border-[#FF6B00]"
                                />

                                {status === "error" && (
                                    <p className="text-sm text-[#FF6B00]">{errorMsg}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="group inline-flex items-center gap-4 rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F0F0F] disabled:opacity-50"
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FF6B00] transition group-hover:bg-[#0F0F0F] group-hover:text-white">
                                        <FiArrowRight size={18} />
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>

                    {/* ── Right: Info ── */}
                    <div className="md:border-l md:border-white/10 md:pl-16">
                        <h3 className="text-sm font-black uppercase">
                            Looking for support? We're standing by.
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-6 text-[#B0B0B0]">
                            Creative logistics solutions are what we do best. No matter your
                            challenge, we can help — get in touch.
                        </p>

                        <a
                            href="tel:8555623487"
                            className="mt-5 block text-2xl font-medium text-white"
                        >
                            999-999-9999
                        </a>

                        <div className="mt-8 h-px w-20 bg-white/30" />

                        <div className="mt-8 space-y-5">
                            <div className="border-l border-[#FF6B00] pl-4">
                                <p className="text-sm font-semibold text-white">Headquarters</p>
                                <p className="mt-1 text-sm text-[#B0B0B0]">XYZ, Place Here</p>
                            </div>

                            <div className="border-l border-[#FF6B00] pl-4">
                                <p className="text-sm font-semibold text-white">Email</p>
                                <a href="mailto:info@itslogistics.com" className="mt-1 block text-sm text-[#B0B0B0] hover:text-[#FF6B00] transition-colors">
                                    mail@org.com
                                </a>
                            </div>

                            <div className="border-l border-[#FF6B00] pl-4">
                                <p className="text-sm font-semibold text-white">Business Hours</p>
                                <p className="mt-1 text-sm text-[#B0B0B0]">Mon – Fri: 7 AM – 6 PM PST</p>
                                <p className="text-sm text-[#B0B0B0]">Sat: 8 AM – 12 PM PST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;