import React from "react"
import Docker from "mdi-material-ui/Docker"
import Nodejs from "mdi-material-ui/Nodejs"
import LanguageJavascript from "mdi-material-ui/LanguageJavascript"
import LanguageTypescript from "mdi-material-ui/LanguageTypescript"
import GatsbyIcon from "mdi-material-ui/Gatsby"
import ReactIcon from "mdi-material-ui/React"
import MaterialUi from "mdi-material-ui/MaterialUi"
import VSCode from "mdi-material-ui/MicrosoftVisualStudioCode"
import Python from "mdi-material-ui/LanguagePython"
import ReduxIcon from "src/components/CustomIcons/Redux"
import FluxIcon from "src/components/CustomIcons/Flux"
import StorybookIcon from "src/components/CustomIcons/Storybook"
import ReactNativePaperIcon from "src/components/CustomIcons/ReactNativePaper"
import DjangoIcon from "src/components/CustomIcons/Django"
import PostgreSQLIcon from "src/components/CustomIcons/PostgreSQL"
import MongoDbIcon from "src/components/CustomIcons/MongoDb"
import FirebaseIcon from "mdi-material-ui/Firebase"
import CodeIcon from "@material-ui/icons/Code"

export default {
  docker: {
    title: "Docker",
    icon: <Docker />,
    link: "https://www.docker.com/",
  },
  gatsby: {
    title: "Gatsby",
    icon: <GatsbyIcon />,
    link: "https://www.gatsbyjs.org/",
  },
  storybook: {
    title: "Storybook",
    icon: <StorybookIcon />,
    link: "https://storybook.js.org/",
  },
  vscode: {
    title: "VS Code",
    icon: <VSCode />,
    link: "https://code.visualstudio.com/",
  },
  reactnativepaper: {
    title: "React Native Paper",
    icon: <ReactNativePaperIcon />,
    link: "https://callstack.github.io/react-native-paper/",
  },
  nativebase: {
    title: "Native Base",
    icon: <CodeIcon />,
    link: "https://nativebase.io/",
  },
  postgresql: {
    title: "PostgreSQL",
    icon: <PostgreSQLIcon />,
    link: "https://www.postgresql.org/",
  },
  nodejs: { title: "NodeJS", icon: <Nodejs />, link: "https://nodejs.org/" },
  javascript: { title: "Javascript", icon: <LanguageJavascript /> },
  typescript: {
    title: "Typescript",
    icon: <LanguageTypescript />,
    link: "https://www.typescriptlang.org/",
  },
  materialui: {
    title: "MaterialUI",
    icon: <MaterialUi />,
    link: "https://material-ui.com/",
  },
  react: { title: "React", icon: <ReactIcon />, link: "https://reactjs.org/" },
  reactnative: {
    title: "React Native",
    icon: <ReactIcon />,
    link: "https://reactnative.dev/",
  },
  redux: { title: "Redux", icon: <ReduxIcon />, link: "https://redux.js.org/" },
  flux: {
    title: "Flux",
    icon: <FluxIcon />,
    link: "https://facebook.github.io/flux/",
  },
  mongodb: {
    title: "MongoDB",
    icon: <MongoDbIcon />,
    link: "https://www.mongodb.com/",
  },
  python: {
    title: "Python",
    icon: <Python />,
    link: "https://www.python.org/",
  },
  django: {
    title: "Django",
    icon: <DjangoIcon />,
    link: "https://www.djangoproject.com/",
  },
  firebase: {
    title: "Firebase",
    icon: <FirebaseIcon />,
    link: "https://firebase.google.com/",
  },
}
