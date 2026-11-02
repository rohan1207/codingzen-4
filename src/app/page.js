import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Pedigree from "@/components/sections/Pedigree";
import WordRibbon from "@/components/sections/WordRibbon";
import AIFocus from "@/components/sections/AIFocus";
import StackGallery from "@/components/sections/StackGallery";
import BrilliantMinds from "@/components/sections/BrilliantMinds";
import Programs from "@/components/sections/Programs";
import PlaySection from "@/components/sections/PlaySection";
import ClassroomGlimpse from "@/components/sections/ClassroomGlimpse";
import StudentProcess from "@/components/sections/StudentProcess";
import Stats from "@/components/sections/Stats";
import FeaturesUnique from "@/components/sections/FeaturesUnique";
import Pricing from "@/components/sections/Pricing";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import TrialCTA from "@/components/sections/TrialCTA";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CodingZen",
    url: "https://codingzen.in",
    description:
      "Online and offline coding classes for kids and teens with mentor-led live sessions.",
    areaServed: "IN",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A19, Ramesh Nagar",
      addressLocality: "New Delhi",
      postalCode: "110015",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.youtube.com/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Pedigree />
      <WordRibbon />
      <AIFocus />

      <div id="our-story" className="scroll-mt-28">
        <Philosophy />
      </div>

      <StackGallery />
      <BrilliantMinds />
      <Programs />
      <PlaySection />
      <ClassroomGlimpse />
      <StudentProcess />
      <Stats />
      <FeaturesUnique />
      <Pricing />
      <Portfolio />
      <Testimonials />

      <FAQ />
      <TrialCTA />
    </>
  );
}
