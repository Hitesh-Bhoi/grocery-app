"use client";
import { useState } from "react";
import {
  ClockHours, InstagramIcon, LocationPin, MailEnvelope,
  PhoneCall, SendPlane, TwitterIcon, WhatsAppIcon,
} from "../../../icons";
import { cn } from "@/lib/utils";

const TOPICS = ["Order Issue", "Delivery", "Refund", "Partnership", "General"];

const ContactUs = () => {
  const [activeTopic, setActiveTopic] = useState("Order Issue");

  return (
    <section className="relative mx-auto mb-16 w-[calc(100%-40px)] overflow-hidden rounded-[20px] border border-green-600/20 bg-gradient-to-br from-[#f0faf0] via-white to-[#f7fef7] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[radial-gradient(circle,rgba(25,155,25,0.07)_0%,transparent_70%)]" />

      {/* ── header ────────────────────────────────────────────────────── */}
      <div className="border-b border-green-600/15 px-6 py-9 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Get in <span className="text-[#199b19]">Touch</span> with Us
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
          Have a question or feedback? We&apos;re here to help and would love to hear from you.
        </p>
      </div>

      {/* ── body ──────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
        {/* left: info + social */}
        <div className="flex flex-col justify-between border-b border-green-600/15 bg-[#f0faf0]/40 p-6 sm:p-8 md:border-b-0 md:border-r">
          <div className="space-y-0">
            {[
              { icon: <PhoneCall />, title: "Call Us", text: "+91 98765 43210" },
              { icon: <MailEnvelope />, title: "Email", text: "support@ecobazar.com" },
              { icon: <LocationPin />, title: "Address", text: "Mumbai, Maharashtra, India" },
              { icon: <ClockHours />, title: "Hours", text: "Mon – Sat · 9 am – 8 pm" },
            ].map((row, idx, arr) => (
              <div
                key={row.title}
                className={cn(
                  "flex items-center gap-4 py-4 transition-colors",
                  idx !== arr.length - 1 && "border-b border-green-600/15"
                )}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-green-600/20 bg-gradient-to-br from-[#e8f8e8] to-[#d1f0d1] text-[#199b19] transition-transform hover:scale-105">
                  {row.icon}
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {row.title}
                  </h4>
                  <p className="text-sm font-semibold text-slate-900">{row.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-6">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 min-w-[80px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-[#199b19] hover:bg-[#199b19] hover:text-white"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 min-w-[80px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-[#199b19] hover:bg-[#199b19] hover:text-white"
            >
              <TwitterIcon /> Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 min-w-[80px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-[#199b19] hover:bg-[#199b19] hover:text-white"
            >
              <InstagramIcon /> Instagram
            </a>
          </div>
        </div>

        {/* right: message form */}
        <div className="flex flex-col justify-start p-6 sm:p-9 lg:p-10">
          <h3 className="text-xl font-extrabold tracking-tight text-slate-900">
            Send us a Message
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            We typically reply within 2–4 hours on business days.
          </p>

          <p className="mb-2.5 mt-5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            What is it about?
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <button
                type="button"
                key={topic}
                aria-pressed={activeTopic === topic}
                onClick={() => setActiveTopic(topic)}
                className={cn(
                  "cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all",
                  activeTopic === topic
                    ? "border border-[#199b19] bg-[#199b19] text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#199b19] hover:text-[#199b19]"
                )}
              >
                {topic}
              </button>
            ))}
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative">
                <input
                  type="text"
                  id="ct-fn"
                  placeholder=" "
                  className="peer w-full rounded-xl border border-slate-200 bg-white px-3.5 pb-2 pt-5 text-sm font-medium text-slate-900 outline-none transition-all focus:border-[#199b19] focus:ring-3 focus:ring-[#199b19]/10"
                />
                <label
                  htmlFor="ct-fn"
                  className="pointer-events-none absolute left-3.5 top-3.5 text-xs font-medium text-slate-400 transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-[#199b19] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  First Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="ct-ln"
                  placeholder=" "
                  className="peer w-full rounded-xl border border-slate-200 bg-white px-3.5 pb-2 pt-5 text-sm font-medium text-slate-900 outline-none transition-all focus:border-[#199b19] focus:ring-3 focus:ring-[#199b19]/10"
                />
                <label
                  htmlFor="ct-ln"
                  className="pointer-events-none absolute left-3.5 top-3.5 text-xs font-medium text-slate-400 transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-[#199b19] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Last Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="ct-em"
                  placeholder=" "
                  className="peer w-full rounded-xl border border-slate-200 bg-white px-3.5 pb-2 pt-5 text-sm font-medium text-slate-900 outline-none transition-all focus:border-[#199b19] focus:ring-3 focus:ring-[#199b19]/10"
                />
                <label
                  htmlFor="ct-em"
                  className="pointer-events-none absolute left-3.5 top-3.5 text-xs font-medium text-slate-400 transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-[#199b19] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  id="ct-ph"
                  placeholder=" "
                  className="peer w-full rounded-xl border border-slate-200 bg-white px-3.5 pb-2 pt-5 text-sm font-medium text-slate-900 outline-none transition-all focus:border-[#199b19] focus:ring-3 focus:ring-[#199b19]/10"
                />
                <label
                  htmlFor="ct-ph"
                  className="pointer-events-none absolute left-3.5 top-3.5 text-xs font-medium text-slate-400 transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-[#199b19] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-slate-500"
                >
                  Phone (Optional)
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="ct-msg"
                rows={4}
                placeholder=" "
                className="peer w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 pb-2 pt-5 text-sm font-medium text-slate-900 outline-none transition-all focus:border-[#199b19] focus:ring-3 focus:ring-[#199b19]/10"
              />
              <label
                htmlFor="ct-msg"
                className="pointer-events-none absolute left-3.5 top-3.5 text-xs font-medium text-slate-400 transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:text-[#199b19] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-slate-500"
              >
                Your Message
              </label>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs text-slate-400">
                By submitting, you agree to our{" "}
                <a href="#" className="font-semibold text-[#199b19] hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-[#1db81d] to-[#199b19] px-7 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(25,155,25,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(25,155,25,0.36)]"
              >
                <SendPlane /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

