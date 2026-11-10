import HackathonPage from "@/components/hackathon/HackathonPage";

export const metadata = {
  title: "Hackathon 2023",
  description:
    "CodingZen Cross-Country Hackathon 2023 — a 4-week competition for kids and teens across Scratch, Web, JavaScript, Python, and Unity.",
  alternates: {
    canonical: "https://codingzen.in/hackathon",
  },
};

export default function HackathonRoute() {
  return <HackathonPage />;
}
