import React from "react"
import illustration from "../../images/avatar_laptop.png"
import Form from "./ContactForm"
import Nav from "../Navigators/Nav"

export default () => {
  return (
    <header className="bg-blue-300">
      <div className="container mx-auto p-6 max-w-4xl ">
        <Nav />
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="font-bold text-yellow text-4xl">
              ¡Hola! Soy Raul Pacheco
            </h1>
            <p className="text-xl font-light">
              Construyo soluciones web basadas en javascript
            </p>
          </div>
          <img
            src={illustration}
            alt="computadora con persona en pantalla saludando"
            style={{ height: "350px" }}
          />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </header>
  )
}
