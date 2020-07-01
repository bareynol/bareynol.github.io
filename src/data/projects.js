import frameworks from "src/data/frameworks"
import briantvScreenshot from "src/images/briantv_screenshot.jpg"

export default [
  {
    title: "BrianTV",
    url: "https://gitlab.com/bareynol/briantv-app",
    description:
      "React-Native app to integrate with a Plex Server stack and provide easy access to frequently used services and commands and stats",
    image: briantvScreenshot,
    frameworks: [
      frameworks.reactnative,
      frameworks.redux,
      frameworks.typescript,
    ],
  },
  {
    title: "Home Media Server Stack",
    url: "https://gitlab.com/bareynol/home-media-server",
    description:
      "Plex Media Server + Services to handle content management. Includes a web server that exposes API for server stats and commands. Integrates with BrianTV",
    image: null,
    frameworks: [frameworks.nodejs, frameworks.docker],
  },
  {
    title: "The Cookbook",
    url: "#",
    description:
      "Web server that stores recipes and presents them in an easy to read format. Includes tools to scrape content from recipe websites.",
    frameworks: [
      frameworks.nodejs,
      frameworks.react,
      frameworks.typescript,
      frameworks.materialui,
      frameworks.redux,
    ],
    underConstruction: true,
  },
]
