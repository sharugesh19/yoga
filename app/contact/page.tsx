import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Mokshaa Yoga | Neelankarai Chennai | 996 2090 996",
  description:
    "Contact Mokshaa Yoga in Neelankarai, Chennai. Call 996 2090 996 or 996 2080 996. Book a free trial yoga class. Studio at 122 Sri Kapaleeswarar Nagar North, Neelankarai 600115.",
};

export default function ContactPage() {
  return <ContactClient />;
}
