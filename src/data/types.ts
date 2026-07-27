export interface NavContent {
  home: string;
  about: string;
  work: string;
  contact: string;
  cta: string;
  langSwitchLabel: string;
  menuOpen: string;
  menuClose: string;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    text: string;
    stats: { value: string; label: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  expertiseStrip: string[];
  valueSection: {
    title: string;
    intro: string;
    cta: string;
    items: { number: string; title: string; description: string; tags: string }[];
  };
  experience: {
    title: string;
    text: string;
    companies: string[];
    openSlotLabel: string;
    testimonialsTitle: string;
    testimonialsPrevLabel: string;
    testimonialsNextLabel: string;
    testimonials: { name: string; role: string; photo: "pedro" | "david" | "jaime" | "joel" | "carola"; quotes: string[] }[];
    ctaMoreAboutMe: string;
    ctaDownloadCv: string;
  };
  featuredProject: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    resultStats: { value: string; label: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    slug: string;
  };
  howIWork: {
    title: string;
    items: { title: string; description: string }[];
  };
  oneLastThing: {
    title: string;
    paragraphs: string[];
  };
  finalCta: {
    title: string;
    text: string;
    cta: string;
  };
}

export interface AboutContent {
  intro: string[];
  timeline: { title: string; body: string }[];
  resultsTitle: string;
  results: { value: string; label: string; company: string; description: string }[];
  closing: string[];
}

export interface ContactContent {
  title: string;
  intro: string;
  location: string;
  ctaLabel: string;
  email: string;
  linkedinLabel: string;
  linkedinUrl: string;
  cvLabel: string;
  cvAvailable: boolean;
  cvUrl: string;
}

export interface WorkIndexContent {
  title: string;
  intro: string;
  pendingLabel: string;
  readCase: string;
}

export interface SiteContent {
  metaTitle: string;
  metaDescription: string;
  copyright: string;
}
