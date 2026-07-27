import { nav as navEs } from "./es/nav";
import { nav as navEn } from "./en/nav";
import { home as homeEs } from "./es/home";
import { home as homeEn } from "./en/home";
import { about as aboutEs } from "./es/about";
import { about as aboutEn } from "./en/about";
import { contact as contactEs } from "./es/contact";
import { contact as contactEn } from "./en/contact";
import { work as workEs } from "./es/work";
import { work as workEn } from "./en/work";
import { site as siteEs } from "./es/site";
import { site as siteEn } from "./en/site";

export type Lang = "es" | "en";

export const SUPPORTED_LANGS: Lang[] = ["es", "en"];

export function getNav(lang: Lang) {
  return lang === "es" ? navEs : navEn;
}

export function getHome(lang: Lang) {
  return lang === "es" ? homeEs : homeEn;
}

export function getAbout(lang: Lang) {
  return lang === "es" ? aboutEs : aboutEn;
}

export function getContact(lang: Lang) {
  return lang === "es" ? contactEs : contactEn;
}

export function getWork(lang: Lang) {
  return lang === "es" ? workEs : workEn;
}

export function getSite(lang: Lang) {
  return lang === "es" ? siteEs : siteEn;
}

/** Localized URL slugs for each section, used for nav links and routing. */
export const paths = {
  es: {
    home: "/es/",
    about: "/es/sobre-mi/",
    work: "/es/trabajo/",
    contact: "/es/contacto/",
  },
  en: {
    home: "/en/",
    about: "/en/about/",
    work: "/en/work/",
    contact: "/en/contact/",
  },
} as const;
