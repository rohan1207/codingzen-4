import FaqPage from "@/components/faq/FaqPage";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about CodingZen programs, classes, curriculum, sessions, and enrollment.",
  alternates: {
    canonical: "https://codingzen.in/faq",
  },
};

export default function FaqRoute() {
  return <FaqPage />;
}
