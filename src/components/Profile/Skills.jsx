import React from "react"
import Skill from "./Skill"

export default function Skills({size, languages, title}) {
  return (
    <section className="container mx-auto pt-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-center">Mis Tecnologias Web Favoritas</h1>
      <ul className="flex items-center my-6 scroll">
        {
          languages.map((language) => (
            <li className=" flex-shrink-0 flex-col items-center text-center py-4 px-6 bg-gray-300 rounded-lg ml-2">
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