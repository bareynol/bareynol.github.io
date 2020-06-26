import React from "react"
import Docker from "mdi-material-ui/Docker"
import Nodejs from "mdi-material-ui/Nodejs"
import LanguageJavascript from "mdi-material-ui/LanguageJavascript"
import LanguageTypescript from "mdi-material-ui/LanguageTypescript"
import ReactIcon from "mdi-material-ui/React"
import MaterialUi from "mdi-material-ui/MaterialUi"
import Python from "mdi-material-ui/LanguagePython"
import ReduxIcon from "src/components/CustomIcons/Redux"
import FluxIcon from "src/components/CustomIcons/Flux"
import MongoDbIcon from "src/components/CustomIcons/MongoDb"
import FirebaseIcon from "mdi-material-ui/Firebase"

export default {
  docker: { title: "Docker", icon: <Docker /> },
  nodejs: { title: "NodeJS", icon: <Nodejs /> },
  javascript: { title: "Javascript", icon: <LanguageJavascript /> },
  typescript: { title: "Typescript", icon: <LanguageTypescript /> },
  materialui: { title: "MaterialUI", icon: <MaterialUi /> },
  react: { title: "React", icon: <ReactIcon /> },
  reactnative: { title: "React Native", icon: <ReactIcon /> },
  redux: { title: "Redux", icon: <ReduxIcon /> },
  flux: { title: "Flux", icon: <FluxIcon /> },
  mongodb: { title: "MongoDB", icon: <MongoDbIcon /> },
  python: { title: "Python", icon: <Python /> },
  django: { title: "Django", icon: <Python /> },
  firebase: { title: "Firebase", icon: <FirebaseIcon /> },
}
