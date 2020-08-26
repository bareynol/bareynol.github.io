import muiThemeCreatorLogo from "src/images/mui_theme_creator_logo.webp"
import briantvOverview from "src/images/briantv_overview.webp"
import mediaServerOverview from "src/images/media-server_overview.webp"

export default [
  {
    title: "Material-UI Theme Creator",
    demo: "https://bareynol.github.io/mui-theme-creator/",
    url: "https://github.com/bareynol/mui-theme-creator",
    description:
      "Material-UI Theme Creator provides an interface to help create a Material-UI ThemeOptions object.",
    image: muiThemeCreatorLogo,
    frameworks: ["react", "typescript", "materialui", "redux"],
  },
  {
    title: "Bluebeard",
    url: "https://github.com/bareynol/bluebeard",
    description:
      "React-Native app to integrate with a Plex Server stack and provide easy access to frequently used services and commands and stats",
    image: briantvOverview,
    frameworks: ["reactnative", "redux", "typescript"],
  },
  {
    title: "Home Media Server Stack",
    url: "https://github.com/bareynol/home-media-server",
    description:
      "Plex Media Server + Services to handle content management. Includes a web server that exposes API for server stats and commands. Integrates with BrianTV",
    image: mediaServerOverview,
    frameworks: ["nodejs", "docker"],
  },
  // {
  //   title: "The Cookbook",
  //   url: null,
  //   description:
  //     "MEAN stack web server that stores recipes and presents them in an easy to read format. Includes tools to scrape content from recipe websites.",
  //   frameworks: [
  //     "nodejs",
  //     "react",
  //     "typescript",
  //     "materialui",
  //     "redux",
  //     "mongodb",
  //   ],
  //   underConstruction: true,
  // },
]
