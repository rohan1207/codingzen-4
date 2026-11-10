import EventsPage from "@/components/events/EventsPage";

export const metadata = {
  title: "Events & Competitions",
  description:
    "Explore CodingZen hackathons, workshops, showcases, and competitions for young coders.",
  alternates: {
    canonical: "https://codingzen.in/events",
  },
};

export default function EventsRoute() {
  return <EventsPage />;
}
