import React from "react"
import Skill from "./Skill"

export default function Skills({size, languages, title}) {
  return (
    <section className="container mx-auto pt-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center">Mis Tecnologias Web Favoritas</h1>
      <ul className="flex flex-wrap items-center justify-around my-6 overflow-x-scroll scroll">
        {
          languages.map((language) => (
            <li className=" flex-col justify-center items-center text-center py-4 px-6 bg-gray-300 rounded-lg m-2">
            <Skill 
              title={language.name}
              img={language.url}
              size={size}
              id={language}
            />
            </li>
          ))
        }
      </ul>
    </section>
  )
}