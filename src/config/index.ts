import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Bilal Naeem — Mobile App Developer & Co-Founder at INFILP",
  author: "Bilal Naeem",
  description:
    "Co-Founder & Lead Engineer at INFILP, one of the Fiverr top development agency. Expert mobile app developer crafting innovative solutions with React Native, React, TypeScript, and AI-powered technologies. Delivering exceptional user experiences for clients worldwide.",
  lang: "en",
  siteLogo: "/bilal-small.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Achievements", href: "#achievements" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:bilalnaeem166@gmail.com" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/bilal~naeem/" },
    { text: "Github", href: "https://github.com/bilal1031" },
  ],
  socialImage: "/bilal-small.jpeg",
  canonicalURL: "https://bilalnaeem.web.app/",
  theme: {
    defaultTheme: "dark",
    storageKey: "theme-preference",
  },
};

export const SECTION_SUBTITLES = {
  experience: "My professional journey and career highlights",
  projects: "Innovative solutions I've built for clients worldwide",
  achievements: "Key milestones and accomplishments in my journey",
  about: "Get to know me beyond the code",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Bilal Naeem",
    specialty: "Co-Founder & Lead Engineer at INFILP",
    summary:
      "Building mobile apps that make a difference. Transforming ideas into exceptional digital experiences with React Native, TypeScript, and AI-powered solutions.",
    email: "bilalnaeem166@gmail.com",
  },
  experience: [
    {
      company: "INFILP",
      position: "Co-Founder & Lead Engineer",
      startDate: "Mar 2023",
      endDate: "Present",
      summary: [
        "Co-founded INFILP, a premier software development agency ranked as a top agency on Fiverr, transforming complex business requirements into intuitive mobile and web applications for clients worldwide.",
        "Led cross-functional development teams in creating scalable React Native and React applications, implementing architectures that support rapid user growth while achieving 100% client satisfaction.",
        "Specialized in AI-powered mobile solutions, Stripe payment integrations, and OAuth authentication systems, delivering solutions that consistently exceed client expectations and drive business results.",
      ],
    },
    {
      company: "Fiverr",
      position: "Senior Mobile App Developer",
      startDate: "Aug 2021",
      endDate: "Mar 2023",
      summary: [
        "Solved complex technical challenges across diverse industries, delivering high-quality mobile applications using React Native, React, and TypeScript for fintech, healthcare, and e-commerce clients.",
        "Built applications that handle real-time data processing and secure transactions, implementing complex features including real-time payment processing, secure authentication systems, and AI-powered user interfaces.",
        "Maintained perfect 100% on-time delivery record while ensuring optimal performance, code quality, and comprehensive testing protocols that consistently exceed client expectations.",
      ],
    },
  ],
  projects: [
    {
      name: "Wobo",
      summary:
        "Fitness app connecting athletes with private gyms, boxing rings, and courts. Features secure Stripe payments, motivational audio (DRIPS), venue management, and real-time communication.",
      linkPreview: "https://infilp.com/portfolio/wobo",
      image:
        "https://firebasestorage.googleapis.com/v0/b/infilp.appspot.com/o/WOBO%2Fsolution.webp?alt=media&token=4da5ed20-ef0d-4e47-86f8-716a46940456",
    },
    {
      name: "ServiceHub",
      summary:
        "Platform connecting users with trusted service providers across industries. Features real-time notifications, smart calendar, seamless booking, and communication tools.",
      linkPreview: "https://infilp.com/portfolio/servicehub",
      image:
        "https://firebasestorage.googleapis.com/v0/b/infilp.appspot.com/o/ServiceHub%2Fsolution.webp?alt=media&token=60116336-7261-4c58-9182-cccbd561353a",
    },
    {
      name: "Heurica",
      summary:
        "App connecting PhD candidates with research collaborators worldwide. Features project profiles, community engagement, in-app messaging, and AI content moderation.",
      linkPreview: "https://infilp.com/portfolio/heurica",
      image:
        "https://firebasestorage.googleapis.com/v0/b/infilp.appspot.com/o/Heurica%2Fsolution.webp?alt=media&token=d3aff4a6-b6ab-4415-9e14-147598f9b39f",
    },
    {
      name: "VetEye",
      summary:
        "Educational app for veterinary ophthalmology students featuring eye disease library, interactive board exam quizzes, expert video lectures with certificates.",
      linkPreview: "https://infilp.com/portfolio/veteye",
      image:
        "https://firebasestorage.googleapis.com/v0/b/infilp.appspot.com/o/VetEye%2Fsolution.webp?alt=media&token=466ee2f1-63f7-4e55-9b58-cbf32e540b6a",
    },
    {
      name: "Easy As Pie Budget",
      summary:
        "Expense management app for individuals, couples, and families. Features budget tracking, customizable categories, recurring expenses, and savings goals.",
      linkPreview: "https://infilp.com/portfolio/easy-as-pie-budget",
      image:
        "https://firebasestorage.googleapis.com/v0/b/infilp.appspot.com/o/Easy%20As%20Pie%20Budget%2Fsolution.webp?alt=media&token=065567ca-32d3-40d1-8405-d9608eea55dd",
    },
  ],
  achievements: [
    {
      title: "SOFTEC'22 App Development Winner",
      description:
        "1st place among 15 teams at Pakistan's largest university-led IT event (FAST NUCES Lahore)",
      icon: "🏆",
      year: "Apr 2022",
      type: "academic",
      link: "https://www.facebook.com/100064405400830/posts/7549117855105937/",
    },
    {
      title: "Coding Guru 5.0 Winner",
      description:
        "Top performer in IEEE LUMS's Web & App competition, organized with S&P Global",
      icon: "🥇",
      year: "Jan 2023",
      type: "academic",
      link: "https://www.facebook.com/watch/?v=3362394294043986",
    },
    {
      title: "COMSATS Honorary Alumni",
      description:
        "Recognized for co-founding INFILP, a mobile app development startup, within one year of graduation",
      icon: "🎓",
      year: "Dec 2024",
      type: "academic",
      link: "https://www.comsats.edu.pk/alumni",
    },
  ],
  about: {
    description: `I'm passionate about creating technology that solves real problems and makes a tangible impact. When I'm not coding, I'm constantly learning, experimenting with new frameworks, and staying ahead of the curve in mobile development. I believe great software comes from understanding both the technical and human sides of a problem. Whether it's helping a startup bring their vision to life or consulting on complex technical challenges, I'm always excited to collaborate on projects that push boundaries and create value.`,
    image: "/bilal-big.jpeg",
  },
};

// #5755ff
