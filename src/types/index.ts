export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
  theme?: {
    defaultTheme: "light" | "dark";
    storageKey: string;
  };
}

export interface PublicationProps {
  title: string;
  description?: string;
  /** ISO date string (YYYY-MM-DD) for sorting and display */
  pubDate: string;
  readingTime?: string;
  /** Where the card navigates (IEEE, DOI, publisher PDF, etc.) */
  url: string;
  /** Optional label in the meta row (e.g. IEEE Xplore) */
  venue?: string;
}

export interface OpenSourceProjectProps {
  name: string;
  /** What the library or repo is for (one short paragraph). */
  summary: string;
  /** Your role: features shipped, refactors, maintenance, etc. */
  contribution: string;
  repository: string;
  homepage?: string;
  tags?: string[];
  /** npm package name — weekly downloads and latest version are fetched at build time; links to npmjs.com. */
  npmPackage?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  openSourceProjects: OpenSourceProjectProps[];
  publications: PublicationProps[];
  achievements: AchievementProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  /** When set, overrides auto-detected link label (e.g. GitHub vs case study). */
  linkLabel?: string;
}

export interface AchievementProps {
  title: string;
  description: string;
  icon: string;
  year?: string;
  category?: string;
  type: "professional" | "academic";
  link?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
