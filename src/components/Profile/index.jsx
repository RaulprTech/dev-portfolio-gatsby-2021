import React from "react"
import photo from "../../images/raul.jpg"
import { graphql, Link } from "gatsby"
import EduNav from "../Navigators/Education-nav"
import Github from "../Github/Repos"
import Skills from "./Skills"
import Web from "../../imgs/otherSocialMedia/web.svg"

export default function index() {
  return (
    <>
      <div className="container p-6">
        <Link to="/" className="uppercase underline text-purple-600 block">
          Regresar al inicio
        </Link>
      </div>
      <div className="container mx-auto flex-col px-4 items-center bg-blue-300 my-0 py-4">
        <Info />
        <Timeline />
        <EduNav />
      </div>
    </>
  )
}

const Info = () => {
  return (
    <>
      <header className=" w-screen h-32">
        <h1 className="text-4xl font-bold">Acerca de Mi</h1>
        <h2 className=" text-xl font-light">
          Informacion sobre mi y sobre lo que amo hacer
        </h2>
      </header>
      <div className="flex">
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 sm:block hidden">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={photo}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <figure className="visible">
            <div className="">
              <div className="pt-10 px-2 sm:px-6">
                {/* <span className="inline-block py-1 px-2 rounded-full bg-green-600 text-white  text-xs font-bold tracking-widest mb-2">
                Frontend Developer
              </span> */}
                <h1 className=" font-bold sm:text-xl text-2xl mb-4 text-gray-900">
                  ¡Hola! Soy Raul Pacheco Rodriguez
                  <br className="hidden lg:inline-block" />
                </h1>
                <p className="text-gray-800 text-base pb-4">
                  Soy un desarrollador al que le encantan los retos y aprender
                  como funciona todo. Siempre busco maneras de mejorar mis
                  conocimientos y su aplicacion.
                </p>
                <p className="text-gray-800 text-base pb-4">
                  Me gusta compartir lo que se y aprender muchas cosas mas.
                </p>
                <p className="text-gray-800 text-base pb-8">
                  Algo que me gusta mucho a la hora de desarrollar sitios web es
                  buscar un equilibrio entre la funcionalidad y una vista
                  agradable. Creo que ambas partes son muy importantes a tener
                  en cuenta cuando se desarrolla.
                </p>
                <a href="/" className=" cursor-pointer">
                <button className="btn-blue flex items-center justify-between">
                  <img
                    src={Web}
                    alt="Planeta de lineas, representando a internet"
                    className="h-4 w-4 mr-2"
                  />
                  Descargar Curriculum
                </button>
                </a>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </>
  )
}

const Timeline = () => {
  return (
    <div className="container mx-auto py-4 bg-blue-100 shadow rounded my-6">
      <h2 className="text-3xl font-bold text-center p-4">
        Talleres y Ponencias
      </h2>
      <section className="container mx-auto">
        <ul className="m-4 px-4">
          <li className="p-3 m-3">
            <header className="flex">
              <h3 className="text-xl font-bold">Introduccion a Processing</h3>
              <span className="rounded-full px-4 bg-blue-200 text-normal font-bold ml-12">
                Junio 2016
              </span>
            </header>
            <p>
              Taller introductorio de programacion orientada a objetos con
              Processing
            </p>
          </li>
          <li className="p-3 m-3">
            <div className="flex">
              <h3 className="text-xl font-bold">
                Programacion Basica con Arduino
              </h3>
              <span className="rounded-full px-4 bg-blue-200 text-normal font-bold ml-12">
                Diciembre 2016
              </span>
            </div>
            <p>
              Taller de principios basicos de la programacion de placas Arduino
              UNO
            </p>
          </li>
          <li className="p-3 m-3">
            <div className="flex">
              <h3 className="text-xl font-bold">
                Programacion de Arduino con Javascript
              </h3>
              <span className="rounded-full px-4 bg-blue-200 text-normal font-bold ml-12">
                Diciembre 2019
              </span>
            </div>
            <p>
              Taller sobre el uso de Node y Johnny Five para programar Arduinos
              con Javascript
            </p>
          </li>
        </ul>
      </section>
    </div>
  )
}
