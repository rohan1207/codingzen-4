import ContactPage from "@/components/contact/ContactPage";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CodingZen — enrollments, support, B2B partnerships, and center locations across Delhi NCR & online.",
  alternates: {
    canonical: "https://codingzen.in/contact",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
