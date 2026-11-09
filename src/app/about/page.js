import AboutHero from "@/components/about/AboutHero";
import AboutWho from "@/components/about/AboutWho";
import AboutIdeology from "@/components/about/AboutIdeology";
import AboutVision from "@/components/about/AboutVision";
import AboutPeople from "@/components/about/AboutPeople";
import AboutStories from "@/components/about/AboutStories";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import Pedigree from "@/components/sections/Pedigree";
import TrialCTA from "@/components/sections/TrialCTA";

export const metadata = {
  title: "Our Story | About Us",
  description:
    "CodingZen is an online coding academy for kids & teens — building young tech leaders since 2016 with mentor-led, project-first learning.",
  alternates: {
    canonical: "https://codingzen.in/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWho />
      <AboutIdeology />
      <AboutVision />
      <AboutPeople />
      <AboutStories />
      <AboutTestimonials />
      <Pedigree />
      <TrialCTA />
    </>
  );
}
