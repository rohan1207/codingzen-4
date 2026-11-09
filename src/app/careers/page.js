import CareersPage from "@/components/careers/CareersPage";

export const metadata = {
  title: "Careers",
  description:
    "Coding faculty jobs at CodingZen — join our teaching team, mentor young builders, and grow with in-house training.",
  alternates: {
    canonical: "https://codingzen.in/careers",
  },
};

export default function CareersRoute() {
  return <CareersPage />;
}
