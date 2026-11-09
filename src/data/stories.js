import { portfoliosPageUrl } from "@/data/site";

export const storiesHero = {
  eyebrow: "Student success stories",
  title: "Young minds.",
  accent: "Real impact.",
  lead:
    "Since 2016, CodingZen students have built apps, won awards, and started young ventures — real work the world notices.",
};

export const featuredStory = {
  name: "Shruti Kakar",
  role: "Creator of Apps “We can Express” and “Tracked”",
  body: "Shruti built apps that help people communicate and stay safe — including tools featured across leading media for their real-world impact.",
  image: "/images/stories/shruti.jpg",
  videoUrl: "https://www.youtube.com/embed/5Tg5Dr52ja4?autoplay=1&rel=0",
  tags: [
    { label: "ASD Communication App", icon: "message" },
    { label: "Real-time Bus Tracking", icon: "bus" },
    { label: "Featured in Leading Media", icon: "media" },
  ],
};

export const storyCards = [
  {
    name: "Shauryaveer Chaudhary",
    role: "Award-winning young innovator",
    body: "Recognised for building solutions that solve everyday problems — proof that curiosity plus mentors can turn ideas into awards.",
    image: "/images/stories/shauryaveer.jpg",
    badge: "trophy",
    href: portfoliosPageUrl,
  },
  {
    name: "Hemkesh Agrawal",
    role: "Young entrepreneur & builder",
    body: "Shipped projects with real users in mind — from first prototype to a demo parents and peers can actually use.",
    image: "/images/stories/hemkesh.jpg",
    badge: "rocket",
    href: portfoliosPageUrl,
  },
  {
    name: "Vaibhav Mehra",
    role: "App developer & problem solver",
    body: "Turns classroom concepts into working apps — clean logic, thoughtful UX, and the confidence to present his work.",
    image: "/images/stories/vaibhav.jpg",
    badge: "code",
    href: portfoliosPageUrl,
  },
];

export const storyProjects = [
  {
    title: "Scratch Game",
    student: "Hriday Sangar",
    age: "12",
    thumb: "/images/portfolio/scratch.jpg",
  },
  {
    title: "COVID Care Repo",
    student: "Aaryan Jaiswal",
    age: "14",
    thumb: "/images/portfolio/covid.jpg",
  },
  {
    title: "Tracked App",
    student: "Shruti Kakar",
    age: "14",
    thumb: "/images/portfolio/tracked.jpg",
  },
  {
    title: "Spincy Website",
    student: "Reyansh Juneja",
    age: "14",
    thumb: "/images/portfolio/spincy.jpg",
  },
];

export { portfoliosPageUrl };
