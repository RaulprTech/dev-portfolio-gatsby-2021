import React from "react"
import { Link } from "gatsby"
import illustration from "../../images/logo/logo.png"
import GitHub from "../../imgs/socialMedia/githublogo.svg"
import Linkedin from "../../imgs/socialMedia/linkedin.svg"
import Instagram from "../../imgs/socialMedia/instagram.svg"
import Twitter from "../../imgs/socialMedia/twitter.svg"

export default props => {
  return (
    <nav className="flex items-center justify-between flex-wrap md:mb-24 px-4 md:px-0 md:mx-0 py-4">
      <Link className="flex items-center flex-shrink-0 mr-4 cursor-pointer">
        <img
          src={illustration}
          alt="cuadrado azul con letras RPR de color negro"
          className="h-10 w-10"
        />
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue-300 border-blue-300 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="lg:flex-grow text-right md:text-left">
          <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-600 mr-4 font-bold">
            <Link to="/#Projects">Proyectos</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-600 mr-4 font-bold">
            <Link to="https://dev.to/raulprtech">Blog</Link>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-600 mr-4 font-bold">
            <Link to="/me">Mas de mi</Link>
          </li>
        </ul>
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
      {props.children}
    </nav>
  )
}
