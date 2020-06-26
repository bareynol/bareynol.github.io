import React from "react"
import Responsibilities from "./Responsibilities"

export default {
  component: Responsibilities,
  title: "Responsibilities",
  excludeStories: /.*Data$/,
}

export const responsibilitiesData = [
  {
    title: "Web Development",
    specifics: [
      "Tempor fugiat cillum id fugiat nulla minim aliquip proident est adipisicing labore nisi adipisicing sunt.",
      "Ullamco laborum adipisicing nulla laborum.",
      "Irure aliqua nisi adipisicing labore aute exercitation sit.",
      "Anim dolore dolore culpa ipsum quis labore ea sunt sit qui excepteur.",
    ],
  },
  {
    title: "Mobile App Development",
    specifics: [
      "Enim velit cillum quis duis deserunt ea aliquip reprehenderit est elit culpa do nulla. Ipsum proident reprehenderit ut ut nulla excepteur sunt ea adipisicing. Dolore eiusmod et deserunt culpa quis irure eiusmod ex. Irure fugiat est minim officia mollit ad anim. Velit dolor ullamco amet Lorem velit.",
      "Laboris veniam nulla dolore minim adipisicing quis Lorem id tempor qui tempor. Labore in dolore irure sunt magna id incididunt aliqua esse cillum. Ea nostrud amet in ipsum cupidatat. Quis cupidatat sunt eiusmod tempor mollit minim adipisicing anim. Culpa anim qui amet qui ullamco sint ut consequat irure elit sit anim ea sint. Reprehenderit fugiat tempor eiusmod adipisicing.",
      "Voluptate aute dolore laboris adipisicing cupidatat.",
    ],
  },
  {
    title: "Firmware Development",
    specifics: [
      "Proident esse aliqua ullamco mollit laborum nulla consequat reprehenderit esse tempor id cupidatat non eu.",
      "Laborum mollit ea tempor irure ex nisi. Nostrud tempor et aliquip commodo minim tempor ad proident in voluptate ipsum esse. Cillum qui voluptate anim voluptate ipsum fugiat. Voluptate voluptate cupidatat velit laboris commodo nulla ea sint anim nisi.",
      "Sit reprehenderit do in enim.",
      "Nisi sunt eiusmod fugiat laboris ad. Est Lorem elit culpa mollit eiusmod labore incididunt consectetur voluptate ullamco exercitation quis aliqua. Voluptate sunt et labore laborum et esse ex quis.",
    ],
  },
]

export const Default = () => (
  <Responsibilities responsibilities={responsibilitiesData} />
)
