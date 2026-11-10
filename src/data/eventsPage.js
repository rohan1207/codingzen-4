/** Events & Competitions page — images under /images/events/ are placeholders until real PNGs land. */

export const eventsHero = {
  eyebrow: "Events at CodingZen",
  titleBefore: "Explore Our Events &",
  titleAccent: "Competitions",
  blurb:
    "Hackathons, workshops, showcases and more — exciting opportunities for young coders to learn, create and shine.",
  image: "/images/events/hero.svg",
};

export const eventCategories = [
  {
    id: "hackathons",
    title: "Hackathons",
    detail: "Build real projects",
    tint: "#F3E8FF",
    ink: "#7C3AED",
    icon: "calendar",
  },
  {
    id: "workshops",
    title: "Workshops",
    detail: "Learn new skills",
    tint: "#F9D3CF",
    ink: "#e84438",
    icon: "users",
  },
  {
    id: "competitions",
    title: "Competitions",
    detail: "Showcase your talent",
    tint: "#F3E8FF",
    ink: "#7C3AED",
    icon: "award",
  },
  {
    id: "live",
    title: "Live Sessions",
    detail: "Interact with experts",
    tint: "#F9D3CF",
    ink: "#e84438",
    icon: "radio",
  },
];

export const upcomingEvents = [
  {
    id: "hackathon-2024",
    featured: true,
    title: "CodingZen Hackathon 2024",
    blurb:
      "A 4-week coding challenge where kids & teens ship real projects across Scratch to Unity.",
    date: "Apr 2024",
    ages: "Ages 6–18",
    href: "/hackathon",
    art: "/images/events/upcoming-hackathon.svg",
    tint: "from-[#6D28D9] to-[#9B4DCA]",
  },
  {
    id: "ai-workshop",
    featured: false,
    title: "AI for Young Innovators Workshop",
    blurb:
      "Hands-on workshop introducing prompting, generative tools, and safe AI habits for builders.",
    date: "May 2024",
    ages: "Ages 9–18",
    href: "/consultation",
    art: "/images/events/upcoming-ai.svg",
    tint: "from-[#FFE8D6] to-[#F9D3CF]",
  },
  {
    id: "game-bootcamp",
    featured: false,
    title: "Game Development Bootcamp",
    blurb:
      "Learn to design, code, and polish a playable game — from first sprite to final showcase.",
    date: "Jun 2024",
    ages: "Ages 10–18",
    href: "/programs",
    art: "/images/events/upcoming-game.svg",
    tint: "from-[#D1FAE5] to-[#A7F3D0]",
  },
];

export const highlightEvent = {
  eyebrow: "Highlight Event",
  title: "Annual CodingZen Hackathon",
  blurb:
    "Our flagship event — build with mentors, compete with peers, and take home prizes that celebrate craft.",
  art: "/images/events/highlight-trophy.svg",
  href: "/hackathon",
  points: [
    "Build real-world projects",
    "Get expert mentorship",
    "Win exciting prizes",
  ],
};

export const pastEvents = [
  {
    id: "hackathon-2023",
    title: "Hackathon 2023",
    blurb: "Cross-country builders shipped games, apps, and stories.",
    image: "/images/events/past-1.svg",
    href: "/hackathon",
  },
  {
    id: "ai-robotics",
    title: "AI & Robotics Workshop",
    blurb: "Kids explored sensors, logic, and first AI builds.",
    image: "/images/events/past-2.svg",
    href: "/events#past",
  },
  {
    id: "innovators",
    title: "Young Innovators Showcase",
    blurb: "Students presented projects parents could try live.",
    image: "/images/events/past-3.svg",
    href: "/events#past",
  },
  {
    id: "codefest",
    title: "CodeFest Challenge",
    blurb: "Teams raced deadlines and celebrated certificates.",
    image: "/images/events/past-4.svg",
    href: "/events#past",
  },
];

export const eventsCta = {
  title: "Never Miss an Event!",
  blurb:
    "Be the first to know about our upcoming hackathons, workshops and special events.",
  cta: "Get Event Updates",
  href: "/#trial",
  art: "/images/events/megaphone.svg",
};
