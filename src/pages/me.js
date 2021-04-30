import React from "react"
import Profile from "../components/Profile"
import Footer from "../components/Footer"

export default function me() {
  return <Info />
}

const Info = () => {
  return (
    <section className="text-gray-900 body-font p-5 bg-purple-100">
      <Profile />
      <Footer/>
    </section>
  )
}


