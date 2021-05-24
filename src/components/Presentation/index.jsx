import React from "react"
import illustration from "../../imgs/peoples/char2.svg"
import Form from "./ContactForm"
import Nav from "../Navigators/Nav"

export default () => {
  return (
    <header className="bg-gray-300">
      <div className="container mx-auto pt-5 md:pt-0 max-w-4xl">
        <Nav />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <article className="flex flex-col items-center md:items-start">
            <h2 className="text-xl">¡Hola! Soy</h2>
            <h1 className="text-5xl font-extrabold text-center">Raul Pacheco</h1>
            <h3 className="text-2xl">Frontend Developer</h3>
            <button className="btn-blue mt-8 inline-block hover:border-blue-600 hover:bg-blue-400">
              Más sobre mi
            </button>
          </article>
          <img
            src={illustration}
            alt="computadora con persona en pantalla saludando"
            className="pt-12 md:pt-0 max-w-lg"
          />
        </div>
      </div>
    </header>
  )
}
