export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  eventUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "The Hollow Wiki",
  shortName: "The Hollow",
  logoText: "H",
  tagline: "Roblox 2026 Halloween Survival Event Guide",
  description: "Unofficial guide to The Hollow, Roblox's 2026 Halloween survival event, with event dates, all nine horror games, daily monsters, maze walkthroughs, quests, and rewards.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thehollow.top",
  supportEmail: "support@thehollow.top",
  gameUrl: "https://www.roblox.com/games/116463962153167/The-Hollow",
  eventUrl: "https://about.roblox.com/newsroom/2026/10/the-hollow-halloween-survival-event",
  heroVideoId: "e50_DNxsKCc", // KAM Gats: How To Complete ALL GAMES in The Hollow! (Roblox Event), published 2026-10-24
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
