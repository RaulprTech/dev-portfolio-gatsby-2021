import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby';
import illustration from "../../imgs/peoples/char2.svg"
import Nav from "../Navigators/Nav"

import GitHub from "../../imgs/socialMedia/githublogo.svg"
import Linkedin from "../../imgs/socialMedia/linkedin.svg"
import Instagram from "../../imgs/socialMedia/instagram.svg"
import Twitter from "../../imgs/socialMedia/twitter.svg"


export default (props) => {
  const data = useStaticQuery(graphql`
        {
            allProyectsJson {
                edges {
                  node {
                    slug
                    title
                    description
                  }
                }
            }
        }
    `)
  return (
    <header className="bg-gray-300">
      <div className="container mx-auto pt-5 md:pt-0 max-w-4xl">
        <Nav />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <article className="flex flex-col items-center md:items-start">
            <h2 className="text-xl">¡Hola! Soy</h2>
            <h1 className="text-5xl font-extrabold text-center">Raul Pacheco</h1>
            <h3 className="text-2xl">Frontend Developer</h3>
            <Link to="/me">
              <button className="btn-blue mt-8 inline-block hover:border-blue-600 hover:bg-blue-400">
                Más sobre mi
              </button>
            </Link>
            <div className="mt-24">
              <ul className="flex items-center flex-shrink-0 invisible md:visible">
                <li className="block mr-4 cursor-pointer">
                  <Link to="https://twitter.com/RaulprTech">
                    <img
                      src={Twitter}
                      alt="cuadrado azul con letras RPR de color negro"
                      className="h-6 w-6"
                    />
                  </Link>
                </li>
                <li className="block mr-4 cursor-pointer">
                  <Link to="https://www.instagram.com/raulprtech/?hl=es-la">
                    <img
                      src={Instagram}
                      alt="cuadrado azul con letras RPR de color negro"
                      className="h-6 w-6"
                    />
                  </Link>
                </li>
                <li className="block mr-4 cursor-pointer">
                  <Link to="https://github.com/RaulprTech">
                    <img
                      src={GitHub}
                      alt="Logo de Github: gato blanco en fondo negro"
                      className="h-6 w-6"
                    />
                  </Link>
                </li>
                <li className="block mr-4 cursor-pointer">
                  <Link to="https://www.linkedin.com/in/raulprtech/">
                    <img
                      src={Linkedin}
                      alt="Logo de Linkedin: Letra L y letra I"
                      className="h-6 w-6"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </article>
          <img
            src={illustration}
            alt="Persona sentada programando en su laptop"
            className="pt-12 md:pt-0 max-w-lg"
          />
        </div>
      </div>
    </header>
  )
}
