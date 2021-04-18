import React from "react"
import Header from "../components/Header"
import Repos from "../components/Repos"
import Skills from "../components/Skills"
import Medium from "../components/Medium"
import EduNav from "../components/Education-nav"
import Proyects from "../components/Proyects"
import TopProyects from "../components/TopProyects"

export default function Home() {
  return (
    <div>
      <Header />
      <TopProyects />
      <Repos />
      <EduNav />
      <Medium />
    </div>
  )
}
