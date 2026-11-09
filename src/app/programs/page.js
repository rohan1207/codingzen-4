import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramsBenefits from "@/components/programs/ProgramsBenefits";
import ProgramsGrid from "@/components/programs/ProgramsGrid";
import ProgramsCta from "@/components/programs/ProgramsCta";
import TrialCTA from "@/components/sections/TrialCTA";

export const metadata = {
  title: "Programs",
  description:
    "Online coding programs for kids and teenagers — CZ Junior, Learner, Explorer, and Creator tracks at CodingZen.",
  alternates: {
    canonical: "https://codingzen.in/programs",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramsBenefits />
      <ProgramsGrid />
      <ProgramsCta />
      <TrialCTA />
    </>
  );
}
