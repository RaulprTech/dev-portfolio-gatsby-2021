import React from 'react'

export default function Skill ({ title, img, size }) {
    return (
      <>
        <img className={size} src={img} />
        <h3 className="text-gray-700 font-bold overflow-hidden">{`${title}`}</h3>
      </>
    )
  }
  