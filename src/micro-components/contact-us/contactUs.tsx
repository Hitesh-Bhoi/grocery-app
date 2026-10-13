"use client";
import { useState } from "react";
import {
  ClockHours, InstagramIcon, LocationPin, MailEnvelope,
  PhoneCall, SendPlane, TwitterIcon, WhatsAppIcon,
} from "../../../icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const TOPICS = ["Order Issue", "Delivery", "Refund", "Partnership", "General"];

const ContactUs = () => {
  const [activeTopic, setActiveTopic] = useState("Order Issue");

  return (
    <section className="mx-auto my-12 max-w-6xl px-5">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900">
          Get in <span className="text-primary">Touch</span> with Us
        </h2>
        <p className="mt-2 text-slate-500">Have a question or feedback? We're here to help.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.2fr]">
        <div className="space-y-5">
          {[
            { icon: <PhoneCall />, title: "Call Us", text: "+91 98765 43210" },
            { icon: <MailEnvelope />, title: "Email", text: "support@ecobazar.com" },
            { icon: <LocationPin />, title: "Address", text: "Mumbai, Maharashtra, India" },
            { icon: <ClockHours />, title: "Hours", text: "Mon – Sat · 9 am – 8 pm" },
          ].map((row) => (
            <div key={row.title} className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-green-50 text-primary">{row.icon}</div>
              <div>
                <h4 className="font-bold text-slate-900">{row.title}</h4>
                <p className="text-sm text-slate-500">{row.text}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            <Button asChild variant="outline" size="sm">
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon /> Twitter
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon /> Instagram
              </a>
            </Button>
          </div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg font-bold">Send us a Message</p>
            <p className="mb-4 text-sm text-slate-500">We typically reply within 2–4 hours on business days.</p>
            <p className="mb-2 text-sm font-medium">What is it about?</p>
            <div className="mb-5 flex flex-wrap gap-2">
              {TOPICS.map((topic) => (
                <button
                  type="button"
                  key={topic}
                  aria-pressed={activeTopic === topic}
                  onClick={() => setActiveTopic(topic)}
                  className={cn(
                    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    activeTopic === topic
                      ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-slate-200 text-slate-900 hover:bg-slate-100"
                  )}
                >
                  {topic}
                </button>
              ))}
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="ct-fn">First Name</Label>
                  <Input id="ct-fn" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ct-ln">Last Name</Label>
                  <Input id="ct-ln" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ct-em">Email Address</Label>
                  <Input id="ct-em" type="email" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ct-ph">Phone (Optional)</Label>
                  <Input id="ct-ph" type="tel" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ct-msg">Your Message</Label>
                <Textarea id="ct-msg" rows={5} />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  By submitting, you agree to our <a href="#" className="text-primary">Privacy Policy</a>.
                </p>
                <Button type="submit"><SendPlane /> Send Message</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactUs;
