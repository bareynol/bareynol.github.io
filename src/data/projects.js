import briantvOverview from "src/images/briantv_overview.webp"
import mediaServerOverview from "src/images/media-server_overview.webp"

export default [
  {
    title: "BrianTV",
    url: "https://gitlab.com/bareynol/briantv-app",
    description:
      "React-Native app to integrate with a Plex Server stack and provide easy access to frequently used services and commands and stats",
    image: briantvOverview,
    frameworks: ["reactnative", "redux", "typescript"],
  },
  {
    title: "Home Media Server Stack",
    url: "https://gitlab.com/bareynol/home-media-server",
    description:
      "Plex Media Server + Services to handle content management. Includes a web server that exposes API for server stats and commands. Integrates with BrianTV",
    image: mediaServerOverview,
    frameworks: ["nodejs", "docker"],
  },
  {
    title: "The Cookbook",
    url: null,
    description:
      "MEAN stack web server that stores recipes and presents them in an easy to read format. Includes tools to scrape content from recipe websites.",
    frameworks: [
      "nodejs",
      "react",
      "typescript",
      "materialui",
      "redux",
      "mongodb",
    ],
    underConstruction: true,
  },
]
