import React from "react"
import Profile from "../components/Profile"
import Footer from "../components/Footer"

export default function me() {
  return <Info />
}

const Info = () => {
  return (
    <section className="">
      <Profile />
      <Footer/>
    </section>
  )
}


