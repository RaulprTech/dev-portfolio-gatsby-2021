import React from "react"
import photo from "../../images/raul.jpg"
import { graphql, Link } from "gatsby"
import EduNav from "../Navigators/Education-nav"
import Github from "../Github/Repos"

export default function index() {
  return (
    <>
      <div className="container m-10">
        <Link to="/" className="uppercase underline text-purple-600 block">
          Regresar al inicio
        </Link>
      </div>
      <div className="container mx-auto flex-col px-4 items-center bg-blue-300 my-0 py-4">
        <Info />
        <Timeline />
        <EduNav/>
      </div>
    </>
  )
}

const Info = () => {
  return (
    <div className="flex">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
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
              <span className="inline-block py-1 px-2 rounded-full bg-green-600 text-white  text-xs font-bold tracking-widest mb-2">
                Frontend Developer
              </span>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Raúl Alberto Pacheco Rodriguez
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="text-gray-800 text-base pb-4">
                Soy un desarrollador al que le encantan los retos y aprender
                como funciona todo. Siempre busco maneras de mejorar mis
                conocimientos y su aplicacion.
              </p>
              <p className="text-gray-800 text-base pb-4">
                Me gusta compartir lo que se y aprender muchas
                cosas mas.
              </p>
              <p className="text-gray-800 text-base pb-8">
                Algo que me gusta mucho a la hora de desarrollar sitios web 
                es buscar un equilibrio entre la funcionalidad y una vista agradable.
                Creo que ambas partes son muy importantes a tener en cuenta cuando se desarrolla.
              </p>
              <article className="flex flex-wrap items-center justify-between">
                <Skill title="Javascript" />
                <Skill title="React" />
                <Skill title="Next" />
                <Skill title="Firebase" />
                <Skill title="Node" />
              </article>
            </div>
          </div>
        </figure>
        <Others />
      </div>
    </div>
  )
}

const Others = () => {
  return (
    <>
      <div className="container bg-blue-300 mx-auto py-4">
        <div className="grid col-span-1 md:flex items-center justify-center">
          <div className="flex items-center justify-center md:ml-12 pt-10 md:pt-0">
            <div className="md:flex">
              <div className="flex items-center md:ml-10">
                <p className="font-bold mr-2 p-2 border rounded-full">ES</p>
                <p>NATIVO</p>
              </div>
              <div className="flex items-center md:ml-10">
                <p className="font-bold mr-2 p-2 border rounded-full">EN</p>
                <p>BÁSICO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Skill = ({ title }) => {
  return (
    <div className="flex items-center pb-12">
      {/* <div className="h-12 w-12">
        <img
          src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png"
          alt
          className="h-full w-full object-cover overflow-hidden rounded-full"
        />
      </div> */}
      <p className="text-gray-700 font-bold ml-3">{`#${title}`}</p>
    </div>
  )
}


const Timeline = () => {
  return (
      <div className="container mx-auto rounded py-4 bg-blue-100 shadow rounded my-6">
            <h2 className="text-3xl font-bold text-center p-4">Talleres y Ponencias</h2>
            <section className="container mx-auto">
              <ul className="m-4 px-4">
                <li className="p-3 m-3">
                  <header className="flex">
                    <h3 className="text-xl font-bold">Introduccion a Processing</h3>
                    <span className="rounded-full px-4 bg-blue-200 text-normal font-bold ml-12">Junio 2016</span>
                  </header>
                  <p>Taller introductorio de programacion orientada a objetos con Processing</p>
                </li>
                <li className="p-3 m-3">
                  <div className="flex">
                    <h3 className="text-xl font-bold">Programacion Basica con Arduino</h3>
                    <span className="rounded-full px-4 bg-blue-200 text-normal font-bold ml-12">Diciembre 2016</span>
                  </div>
                  <p>Taller de principios basicos de la programacion de placas Arduino UNO</p>
                </li>
                <li className="p-3 m-3">
                  <div className="flex">
                    <h3 className="text-xl font-bold">Programacion de Arduino con Javascript</h3>
                    <span className="rounded-full px-4 bg-blue-200 text-normal font-bold ml-12">Diciembre 2019</span>
                  </div>
                  <p>Taller sobre el uso de Node y Johnny Five para programar Arduinos con Javascript</p>
                </li>
              </ul>
            </section>
        {/* <div className="flex-1 left bg-green-400"> Hola </div> */}
      </div>
  )
}