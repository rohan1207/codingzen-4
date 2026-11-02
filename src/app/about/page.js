import AboutHero from "@/components/about/AboutHero";
import AboutIdeology from "@/components/about/AboutIdeology";
import AboutPillars from "@/components/about/AboutPillars";
import AboutPeople from "@/components/about/AboutPeople";
import AboutExplore from "@/components/about/AboutLinks";
import Pedigree from "@/components/sections/Pedigree";
import TrialCTA from "@/components/sections/TrialCTA";

export const metadata = {
  title: "About Us",
  description:
    "CodingZen is a coding academy for kids & teens (ages 6–16) — mentor-led, project-first, building future-ready thinkers since 2016.",
  alternates: {
    canonical: "https://codingzen.in/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIdeology />
      <AboutPillars />
      <Pedigree />
      <AboutPeople />
      <AboutExplore />
      <TrialCTA />
    </>
  );
}
