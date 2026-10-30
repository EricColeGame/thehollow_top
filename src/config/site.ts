export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
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
  name: "The Hollow",
  shortName: "The Hollow",
  logoText: "H",
  tagline: "Roblox 2026 Halloween Event Guide",
  description: "Unofficial guide to The Hollow, Roblox's 2026 Halloween survival event, with event dates, monsters, maze walkthroughs, quests, and rewards.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thehollow.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thehollow.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/116463962153167/The-Hollow",
  heroVideoId: "e50_DNxsKCc", // KAM Gats: How To Complete ALL GAMES in The Hollow (Roblox Event)
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
