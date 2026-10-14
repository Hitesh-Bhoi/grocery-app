"use client";
import { AiFillStar } from "react-icons/ai";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Sarah Johnson", role: "Home Chef", quote: "The quality of produce from Farmiva is exceptional. My family loves the fresh taste and I feel good knowing it's all organic.", stars: 5 },
    { name: "Michael Chen", role: "Restaurant Owner", quote: "We've been sourcing from Farmiva for over a year. The consistency and quality have helped elevate our dishes significantly.", stars: 5 },
    { name: "Emily Rodriguez", role: "Fitness Enthusiast", quote: "As someone who cares about nutrition, Farmiva's organic produce fits perfectly into my healthy lifestyle. Highly recommend!", stars: 5 },
  ];

  return (
    <section className="mx-auto my-12 w-[calc(100%-40px)] px-2 md:px-5">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-slate-900">
          What Our <span className="text-primary">Customers Say</span>
        </h2>
        <p className="mt-2 text-slate-500">Don't just take our word for it</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name} className="border-black/5 shadow-sm">
            <CardContent className="pt-6">
              <div className="mb-3 flex gap-0.5 text-amber-400">
                {[...Array(item.stars)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">"{item.quote}"</p>
              <p className="font-bold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-400">{item.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
