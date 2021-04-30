import React from "react"
import { Link } from "gatsby"

export default ({ element }) => {
  const post = element
  return (
    <div
      className="shadow bg-white mr-4 rounded flex-shrink-0"
      style={{ width: "320px" }}
    >
      <header
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.cover_image})` }}
      ></header>
      <div className="px-6 py-4">
        <Link className="" to={post.url} target="_blank">
          <h4 className="font-bold text-xl mb-2">{post.title}</h4>
        </Link>
        <p className=" font-medium text-base">{post.description}</p>
        <div className=" text-right">
          <Link
            to={post.url}
            target="_blank"
            className="underline text-purple-600"
          >
            Leer Mas
          </Link>
        </div>
      </div>
    </div>
  )
}

/*
      <div className="px-6 py-4">
        <div className="text-center mt-8">
          <a
            className="btn-blue"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leer
          </a>
        </div>
      </div>
*/

/*

        {post.tags.map(cat => (
          <span
            key={cat}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {cat}
          </span>
        ))}

*/
