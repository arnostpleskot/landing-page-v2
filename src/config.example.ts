export type App = {
  title: string;
  description: string;
  icon: string;
  url: string;
};

export type Bookmark = {
  title: string;
  url: string;
};

export type BookmarkGroup = {
  title: string;
  bookmarks: Bookmark[];
};

export const apps: App[] = [
  {
    title: "SearXNG",
    icon: "screen-search-desktop",
    url: "127.0.0.1:8080/",
    description: "Seach engine",
  },
];

export const bookmarks: BookmarkGroup[] = [
  {
    title: "Social",
    bookmarks: [
      {
        title: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/",
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        title: "Reddit",
        url: "https://www.reddit.com/",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/",
      },
    ],
  },
];
