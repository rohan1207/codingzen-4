import ConsultationPage from "@/components/consultation/ConsultationPage";

export const metadata = {
  title: "Schedule a Consultation",
  description:
    "Book a one-on-one consultation with CodingZen experts — program guidance, the right track for your child, or school partnerships.",
  alternates: {
    canonical: "https://codingzen.in/consultation",
  },
};

export default function ConsultationRoute() {
  return <ConsultationPage />;
}
