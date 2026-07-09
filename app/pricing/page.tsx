import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Yoga Class Fees Chennai | Group Pricing Plans | Mokshaa Yoga",
  description:
    "Transparent yoga class pricing at Mokshaa Yoga, Neelankarai Chennai. Group plans from ₹2,500/month. Free trial class. 3, 6 & 12-month packages with free gifts.",
};

export default function PricingPage() {
  return <PricingClient />;
}
