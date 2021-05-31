import React from 'react'
import { Link } from 'gatsby'

export default () => (
    <main className="bg-blue-300 flex justify-center items-center m-auto">
        <Link to="/me">
            <h1 className="text-center text-5xl font-extrabold">Parece que estas perdido</h1>
            <button className="btn-blue mt-8 inline-block hover:border-blue-600 hover:bg-blue-400">
                Ir a Inicio
            </button>
        </Link>
    </main>
)