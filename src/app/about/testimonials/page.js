import AboutTestimonials from "@/components/about/AboutTestimonials";
import TrialCTA from "@/components/sections/TrialCTA";

export const metadata = {
  title: "Parent Testimonials | About Us",
  description:
    "Hear from CodingZen parents and families — video and written testimonials about mentor-led coding classes for kids and teens.",
  alternates: {
    canonical: "https://codingzen.in/about/testimonials",
  },
};

export default function AboutTestimonialsPage() {
  return (
    <>
      <AboutTestimonials />
      <TrialCTA />
    </>
  );
}
