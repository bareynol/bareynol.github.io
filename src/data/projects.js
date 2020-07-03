import briantvScreenshot from "src/images/briantv_screenshot.jpg"

export default [
  {
    title: "BrianTV",
    url: "https://gitlab.com/bareynol/briantv-app",
    description:
      "React-Native app to integrate with a Plex Server stack and provide easy access to frequently used services and commands and stats",
    image: briantvScreenshot,
    frameworks: ["reactnative", "redux", "typescript"],
  },
  {
    title: "Home Media Server Stack",
    url: "https://gitlab.com/bareynol/home-media-server",
    description:
      "Plex Media Server + Services to handle content management. Includes a web server that exposes API for server stats and commands. Integrates with BrianTV",
    image: null,
    frameworks: ["nodejs", "docker"],
  },
  {
    title: "The Cookbook",
    url: "#",
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
