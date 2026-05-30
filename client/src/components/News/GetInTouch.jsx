import React, { useState } from "react";
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";

const API_URL = "http://localhost:5000/api/contact";

const GetInTouch = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
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
            await axios.post(API_URL, {
                name: `${form.firstName} ${form.lastName}`,
                email: form.email,
                company: form.company,
                phone: "",
                service: "News Subscription",
                message: "User requested to receive news and updates.",
            });

            setStatus("success");
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
            });
        } catch (err) {
            setStatus("error");
            setErrorMsg(
                err.response?.data?.error || "Something went wrong. Please try again."
            );
        }
    };

    return (
        <section className="relative overflow-hidden bg-[#0F0F0F] px-5 py-20 text-white md:px-8 lg:px-10">
            <div className="absolute inset-0 opacity-25">
                <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
                    alt="Logistics background"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-[#0F0F0F]/80" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-12 rounded-lg border border-white/10 bg-[#1A1A1A] px-6 py-12 shadow-2xl md:grid-cols-[0.9fr_1.1fr] md:px-12 lg:px-16">
                    <div className="relative">
                        <div className="absolute -left-5 -top-3 h-10 w-10 rounded-full border-4 border-[#FF6B00]" />

                        <h1 className="relative text-5xl font-black uppercase leading-[0.86] tracking-tight text-white md:text-6xl lg:text-7xl">
                            Get News <br />
                            Delivered <br />
                            Straight To <br />
                            Your Inbox
                        </h1>

                        <p className="mt-6 max-w-sm text-sm leading-6 text-[#B0B0B0]">
                            Stay updated with logistics insights, company news, market
                            updates, and service announcements.
                        </p>
                    </div>

                    <div>
                        {status === "success" ? (
                            <div className="flex h-full flex-col justify-center">
                                <h3 className="text-3xl font-black uppercase">
                                    You&apos;re <span className="text-[#FF6B00]">Subscribed</span>
                                </h3>

                                <p className="mt-4 max-w-md text-sm leading-6 text-[#B0B0B0]">
                                    Thanks for signing up. You&apos;ll now receive our latest news
                                    and updates.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F0F0F]"
                                >
                                    Send another
                                    <FiArrowRight size={18} />
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid gap-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="mb-2 block text-xs font-semibold text-white">
                                            First Name<span className="text-[#FF6B00]">*</span>
                                        </span>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={form.firstName}
                                            onChange={handleChange}
                                            className="h-12 w-full border border-white/15 bg-[#0F0F0F] px-4 text-sm text-white outline-none transition focus:border-[#FF6B00]"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="mb-2 block text-xs font-semibold text-white">
                                            Last Name<span className="text-[#FF6B00]">*</span>
                                        </span>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={form.lastName}
                                            onChange={handleChange}
                                            className="h-12 w-full border border-white/15 bg-[#0F0F0F] px-4 text-sm text-white outline-none transition focus:border-[#FF6B00]"
                                        />
                                    </label>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="mb-2 block text-xs font-semibold text-white">
                                            Email<span className="text-[#FF6B00]">*</span>
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            className="h-12 w-full border border-white/15 bg-[#0F0F0F] px-4 text-sm text-white outline-none transition focus:border-[#FF6B00]"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="mb-2 block text-xs font-semibold text-white">
                                            Company<span className="text-[#FF6B00]">*</span>
                                        </span>
                                        <input
                                            type="text"
                                            name="company"
                                            required
                                            value={form.company}
                                            onChange={handleChange}
                                            className="h-12 w-full border border-white/15 bg-[#0F0F0F] px-4 text-sm text-white outline-none transition focus:border-[#FF6B00]"
                                        />
                                    </label>
                                </div>


                                {status === "error" && (
                                    <p className="text-sm text-[#FF6B00]">{errorMsg}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0F0F0F] disabled:opacity-50"
                                >
                                    {status === "sending" ? "Submitting..." : "Submit"}
                                    <FiArrowRight size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;