export const site = {
  name: "CodingZen",
  tagline: "Think · Create · Apply",
  url: "https://codingzen.in",
  description:
    "Live coding classes for kids and teens — mentor-led, project-first, and built to grow entrepreneurial thinkers.",
  phone: "",
  email: "hello@codingzen.in",
  address: "A19, Ramesh Nagar, New Delhi - 110015",
  centers: [
    "Greater Kailash I",
    "Netaji Subhash Place",
    "Raja Garden",
    "Online Classes",
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/#our-story" },
      { label: "Student Portfolios / Stories", href: "/#portfolio" },
      { label: "Testimonials", href: "/#stories" },
    ],
  },
  {
    label: "Programs",
    href: "#programs",
    children: [
      { label: "CZ Juniors", href: "#programs" },
      { label: "CZ Learners", href: "#programs" },
      { label: "CZ Explorers", href: "#programs" },
      { label: "CZ Creators", href: "#programs" },
    ],
  },
  { label: "Blog", href: "#blog" },
  {
    label: "Contact",
    href: "#contact",
    children: [
      { label: "Contact Us", href: "#contact" },
      { label: "Schedule Consultation", href: "#trial" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    label: "Events",
    href: "#events",
    children: [
      { label: "Past Events", href: "#events" },
      { label: "Past Hackathons", href: "#events" },
    ],
  },
];

export const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years shaping young builders",
    detail: "Classroom craft refined every cohort",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Happy students & parents",
    detail: "Families who stayed — not just signed up",
  },
  {
    value: 1,
    suffix: ":1",
    label: "Private mentoring available",
    detail: "Dedicated attention when they need it",
  },
  {
    value: 48,
    suffix: "hrs",
    label: "Structured learning packs",
    detail: "Clear hours, clear outcomes",
  },
];

export const audiences = [
  {
    id: "kids",
    title: "Kids",
    ages: "Ages 6–10",
    blurb: "Scratch worlds, games, and playful logic that feel like recess — with real computer science underneath.",
    code: "while (curious) { create(); }",
  },
  {
    id: "teens",
    title: "Teens",
    ages: "Ages 11–16",
    blurb: "Web, apps, Python, and Unity — ship portfolio projects that look sharp on school applications.",
    code: "ship(project).with(mentors)",
  },
  {
    id: "parents",
    title: "Parents",
    ages: "For families",
    blurb: "Transparent progress, fitment assessments, and mentors who code alongside your child — not just lecture.",
    code: "progress.visible = true",
  },
];

export const programs = [
  {
    id: "junior",
    name: "CZ Juniors",
    ages: "6–8 years",
    focus: "Scratch & creative logic",
    outcome: "First games, stories & animations",
    stack: ["Scratch", "Logic", "Creativity"],
    body: "Playful first computer science — sprites, stories, and clickable games that teach sequences, loops, and events without intimidation.",
    highlights: [
      "Build a playable game in the first weeks",
      "Think in sequences, conditions & loops",
      "Present work parents can open and try",
    ],
    loop: [
      "Ideate a story or game idea",
      "Block-build with mentor pairing",
      "Playtest & polish",
      "Show & celebrate",
    ],
    metric: { value: "6–8 years", label: "Age band" },
    next: "Leads into CZ Learners",
  },
  {
    id: "learner",
    name: "CZ Learners",
    ages: "8–11 years",
    focus: "Block to text bridge",
    outcome: "Problem-solving through projects",
    stack: ["Scratch", "Python intro", "Apps"],
    body: "The gentle jump from blocks to typed code — Python puzzles and small tools that feel like progress, not a wall.",
    highlights: [
      "Bridge Scratch instincts to Python syntax",
      "Ship tiny tools kids are proud of",
      "Logic drills wrapped inside real builds",
    ],
    loop: [
      "Map the problem in blocks",
      "Rewrite key parts in Python",
      "Debug with mentor cues",
      "Level up the stack",
    ],
    metric: { value: "8–11 years", label: "Age band" },
    next: "Leads into CZ Explorers",
  },
  {
    id: "explorer",
    name: "CZ Explorers",
    ages: "11–14 years",
    focus: "Web & product thinking",
    outcome: "Live sites & interactive builds",
    stack: ["HTML/CSS", "JS", "Design"],
    body: "Interactive websites and product thinking — from first click handlers to demos parents screenshot and share.",
    highlights: [
      "Pages that react to real user input",
      "Layout, style, and DOM fluency",
      "Ship tiny products, not slide decks",
    ],
    loop: [
      "Sketch the product flow",
      "Build HTML/CSS structure",
      "Add JS interactivity",
      "Host & share live",
    ],
    metric: { value: "11–14 years", label: "Age band" },
    next: "Leads into CZ Creators",
  },
  {
    id: "creator",
    name: "CZ Creators",
    ages: "14–16 years",
    focus: "Apps, Node & Unity",
    outcome: "Portfolio-ready products",
    stack: ["Python", "Node", "Unity 3D"],
    body: "Serious builds for teens — apps, backends, and game worlds that belong in a portfolio colleges and peers notice.",
    highlights: [
      "Unity scenes with real physics feel",
      "Node foundations for tools & APIs",
      "Export something friends can try",
    ],
    loop: [
      "Scope a portfolio piece",
      "Architect with mentors",
      "Build, test, iterate",
      "Ship & present",
    ],
    metric: { value: "14–16 years", label: "Age band" },
    next: "Ready for advanced tracks",
  },
];

export const benefits = [
  {
    id: "fitment",
    title: "Pre-class assessment",
    body: "Every student gets a logical-thinking fitment check by course faculty — so they start on the right track.",
    cue: "fit.check()",
    art: "/images/benefit-fitment.png",
    artAlt: "Student reviewing a coding aptitude quiz on a tablet",
  },
  {
    id: "cognitive",
    title: "Cognitive stretch",
    body: "Computational thinking that strengthens both analytical and creative sides of the brain.",
    cue: "brain.both()",
    art: "/images/benefit-cognitive.png",
    artAlt: "Teen thinking through a creative coding challenge",
  },
  {
    id: "founder",
    title: "Entrepreneurial skills",
    body: "More than coding — problem framing, shipping ideas, and presenting like young founders.",
    cue: "build.ship()",
    art: "/images/benefit-founder.png",
    artAlt: "Young founder pitching a project from a laptop",
  },
];

/** Class-pack sizes for the pricing toggle */
export const classPacks = [12, 24, 48];

/**
 * Two ways to learn — Private 1:1 vs Group.
 * listPerClass = sticker rate; packRates = effective ₹ / class by pack size.
 */
export const learnWays = [
  {
    id: "private",
    name: "Private 1:1",
    blurb: "One mentor. One child. Their pace.",
    badge: "MOST CHOSEN",
    highlight: true,
    listPerClass: 1200,
    packRates: { 12: 1150, 24: 1100, 48: 1000 },
    features: [
      "Fully personalised curriculum",
      "Any track — Scratch to AI",
      "Flexible scheduling, weekends too",
      "Weekly parent updates",
      "CodingZen completion certificate",
    ],
  },
  {
    id: "group",
    name: "Group classes",
    blurb: "Small batches of up to 6, matched by level.",
    badge: "MAX 6 KIDS",
    highlight: false,
    listPerClass: 650,
    packRates: { 12: 625, 24: 600, 48: 550 },
    features: [
      "Fixed weekly batch timings",
      "Levelled by fitment assessment",
      "Peer projects & showcases",
      "Monthly parent report",
      "CodingZen completion certificate",
    ],
  },
];

/** @deprecated kept for any legacy imports — prefer learnWays */
export const plans = learnWays;

/** Homepage shows first 6; rest live on the full Student Portfolios page. */
export const portfolio = [
  {
    title: "Spincy Website",
    student: "Reyansh Juneja",
    age: "14",
    school: "Sanskriti School",
    blurb:
      "A full restaurant website for foodies — menus, atmosphere, and digital hospitality. Reyansh designed the pages end to end and shipped a live Netlify build parents can open.",
    tag: "WEB",
    tint: "#DBC4A5",
    thumb: "/images/portfolio/spincy.jpg",
    mediaType: "site",
    mediaUrl: "https://dapper-daifuku-d54d0e.netlify.app/",
  },
  {
    title: "COVID Care Repo",
    student: "Aaryan Jaiswal",
    age: "14",
    school: "Sanskriti School",
    blurb:
      "A Node.js directory for ambulances, doctors, and medicines — built when reliable information mattered most. Practical backend thinking with a public-service purpose.",
    tag: "NODE.JS",
    tint: "#B9D4CF",
    thumb: "/images/portfolio/covid.jpg",
    mediaType: "youtube",
    mediaUrl: "https://www.youtube.com/embed/uBAbAJ9QsIA?autoplay=1&rel=0",
  },
  {
    title: "Scratch Game",
    student: "Hriday Sangar",
    age: "12",
    school: "St Mary’s School",
    blurb:
      "A four-level shooting game about restoring humanity — levels, characters, and win conditions all crafted in Scratch by an MIT Scratch enthusiast.",
    tag: "SCRATCH",
    tint: "#CBB9E4",
    thumb: "/images/portfolio/scratch.jpg",
    mediaType: "youtube",
    mediaUrl: "https://www.youtube.com/embed/q9YbaOKYVMA?autoplay=1&rel=0",
  },
  {
    title: "Prompt Studio",
    student: "CodingZen learner",
    age: "15",
    school: "Live cohort",
    blurb:
      "An AI prompt playground where students test ideas, refine outputs, and ship a tool classmates can actually use — prompting as a creative craft, not a gimmick.",
    tag: "AI",
    tint: "#F2B5AF",
    thumb: "/images/ai-courses/prompt.jpg",
    mediaType: "youtube",
    mediaUrl: "https://www.youtube.com/embed/q9YbaOKYVMA?autoplay=1&rel=0",
  },
  {
    title: "Tracked App",
    student: "Shruti Kakar",
    age: "14",
    school: "Springdales School",
    blurb:
      "Real-time school bus tracking so parents and students know exactly where the bus is. An Android project that turns live location into peace of mind.",
    tag: "ANDROID",
    tint: "#DBC4A5",
    thumb: "/images/portfolio/tracked.jpg",
    mediaType: "youtube",
    mediaUrl: "https://www.youtube.com/embed/5Tg5Dr52ja4?autoplay=1&rel=0",
  },
  {
    title: "Python Lab",
    student: "CodingZen teen",
    age: "13",
    school: "Live cohort",
    blurb:
      "Data and logic projects in Python — from first scripts to small tools classmates actually use. Clean thinking, readable code, and a project they can demo.",
    tag: "PYTHON",
    tint: "#B9D4CF",
    thumb: "/images/stack-python.png",
    mediaType: "youtube",
    mediaUrl: "https://www.youtube.com/embed/5Tg5Dr52ja4?autoplay=1&rel=0",
  },
];

/** Full portfolios page (About Us → Student Portfolios / Stories) */
export const portfoliosPageUrl =
  "https://codingzen.in/glimpse-of-our-students-portfolio/";

export const testimonials = [
  {
    quote:
      "This is one class my son looks forward to — mentors make it interactive and genuinely interesting.",
    name: "Khushi Chopra",
    role: "Mother of Ayaan Chopra",
  },
  {
    quote:
      "CodingZen helped our kids build entrepreneurial skills through live projects and excellent mentors.",
    name: "Parent community",
    role: "Delhi NCR families",
  },
  {
    quote:
      "Seeing is believing — the classroom energy and structure finally made coding click for our teen.",
    name: "Workshop parent",
    role: "Trial class attendee",
  },
];

/** Parent video testimonials — from codingzen.in/parents-and-kids-trust-us-too/ */
export const parentVideos = [
  {
    name: "Prachi Gupta",
    role: "Mother of Yudant Gupta, Age 13",
    youtubeId: "JZypf713wig",
  },
  {
    name: "Anjali Sharma",
    role: "Mother of Namya Sharma, Age 10",
    youtubeId: "20Pei0YaLZo",
  },
  {
    name: "Abraham",
    role: "Father of Ben",
    youtubeId: "lEMEM7tE5cc",
  },
  {
    name: "Abhay Jaiswal",
    role: "Father of Siddharth and Vasundhra",
    youtubeId: "QOFgJ3Wz23Q",
  },
  {
    name: "Vinay Saran Mehra",
    role: "Parent",
    youtubeId: "VN8epWzcFBs",
  },
  {
    name: "T S Sampath",
    role: "Father of T S Jaikrishna, Age 11",
    youtubeId: "ffypFSqIDNg",
  },
  {
    name: "Gopinath",
    role: "Father of Gautham, Age 15",
    youtubeId: "a2cFauS42Is",
  },
  {
    name: "Dr Shalini Chawla Khanna",
    role: "Mother of Nabhay Khanna",
    youtubeId: "M1fXKojWR_8",
  },
  {
    name: "Richa Madhukar",
    role: "Mother of Mann Madhukar, Age 15",
    youtubeId: "vyIoNjo80D8",
  },
  {
    name: "Yogesh Gajwani",
    role: "Father of Ankita Gajwani, Age 13",
    youtubeId: "4ZsE44u6nCk",
  },
  {
    name: "Vriti Arun",
    role: "Mother of Ruhani",
    youtubeId: "pK1i9PWFnW8",
  },
];
