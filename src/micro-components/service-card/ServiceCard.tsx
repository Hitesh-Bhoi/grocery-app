import { FiTruck, FiAward, FiHeart } from "react-icons/fi";
import { RiLeafLine } from "react-icons/ri";
import { Card, CardContent } from "@/components/ui/card";

const ServiceCard = () => {
  const features = [
    { title: "100% Organic", description: "All our products are certified organic, grown without harmful pesticides or chemicals.", icon: <RiLeafLine />, bgColor: "#E8F8EE", iconColor: "#22C55E" },
    { title: "Fast Delivery", description: "Same-day delivery available for all orders placed before noon in your area.", icon: <FiTruck />, bgColor: "#EEF2FF", iconColor: "#4F46E5" },
    { title: "Premium Quality", description: "Hand-picked produce that meets the highest standards of freshness and taste.", icon: <FiAward />, bgColor: "#FFFBEB", iconColor: "#F59E0B" },
    { title: "Sustainable", description: "Supporting local farmers and eco-friendly farming practices for a better tomorrow.", icon: <FiHeart />, bgColor: "#FEF2F2", iconColor: "#EF4444" },
  ];

  return (
    <section className="mx-auto my-12 w-[calc(100%-40px)] px-2 md:px-5">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-slate-900">
          Why People <span className="text-primary">Choose Farmiva</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-500">
          Discover why thousands of customers trust us for their daily organic needs. We prioritize quality, speed, and sustainability.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="border-black/5 text-center shadow-sm">
            <CardContent className="flex flex-col items-center gap-3 pt-6">
              <div
                className="flex size-14 items-center justify-center rounded-2xl text-2xl"
                style={{ backgroundColor: feature.bgColor, color: feature.iconColor }}
              >
                {feature.icon}
              </div>
              <h3 className="font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
