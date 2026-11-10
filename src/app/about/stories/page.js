import AboutStories from "@/components/about/AboutStories";
import TrialCTA from "@/components/sections/TrialCTA";

export const metadata = {
  title: "Student Portfolios & Stories | About Us",
  description:
    "Real CodingZen student projects, portfolios, and stories — games, apps, and builds shipped by kids and teens.",
  alternates: {
    canonical: "https://codingzen.in/about/stories",
  },
};

export default function AboutStoriesPage() {
  return (
    <>
      <AboutStories />
      <TrialCTA />
    </>
  );
}
