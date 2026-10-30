export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "events", path: "/events", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "monsters", path: "/monsters", isContentType: true },
] as const satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.slice(1));
