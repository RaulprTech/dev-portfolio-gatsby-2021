import React from "react"
import Presentation from "../components/Presentation"
import Repos from "../components/Github/Repos"
import Medium from "../components/Blog/Medium"
import Devto from "../components/Blog/Devto"
import Projects from "../components/Projects"
import TopProjects from "../components/Projects/TopProjects"
import Nav from "../components/Navigators/Nav"
import Skills from "../components/Profile/Skills"
import Footer from "../components/Footer"

export default function Home() {
  const technologies = [
    {
      "name": "Javascript",
      "url": "https://iconape.com/wp-content/files/vr/353405/svg/javascript-js-seeklogo.com.svg",
    },
    {
      "name" : "React",
      "url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    },
    {
      "name" : "Gatsby",
      "url" : "https://iconape.com/wp-content/files/mc/370910/svg/370910.svg",
    },
    {
      "name" : "Next",
      "url" : "https://cdn.worldvectorlogo.com/logos/nextjs-3.svg",
    },
    {
      "name" : "Node",
      "url" : "https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png",
    },
    {
      "name": "Firebase",
      "url": "https://www.gstatic.com/devrel-devsite/prod/v1674d466be3b1154327dd11cf186e748303b1e92ae31ff35df0f5192fbd777ea/firebase/images/touchicon-180.png"
    }
  ]
  return (
    <div className="bg-blue-400 dark:bg-blue-900">
      <Presentation />
      <Skills size="h-16 w-20" languages={technologies} />
      <TopProjects />
      <Devto />
      <Footer/>
    </div>
  )
}
