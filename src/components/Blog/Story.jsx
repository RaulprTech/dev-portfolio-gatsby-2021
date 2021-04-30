import React from "react"

export default ({ element }) => {
  const post = element
  return (
    <div
      className="shadow bg-white mr-4 rounded flex-shrink-0"
      style={{ width: "300px" }}
    >
      <header
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.thumbnail})` }}
      ></header>
      <div className="px-6 py-4">
        <a
          className=""
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 className="font-bold text-xl mb-2">{post.title}</h4>
        </a>
      </div>
      <div className="px-6 py-4">
        {/* {post.categories.map(cat => (
          <span
            key={cat}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {cat}
          </span>
        ))} */}
        {/* <div className="text-center mt-8">
          <a
            className="btn-blue"
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leer
          </a>
        </div> */}
      </div>
    </div>
  )
}
