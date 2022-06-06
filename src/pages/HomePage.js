import React from 'react';
import { Link } from 'react-router-dom';

import personalPicture from '../assets/anjani.jpg';

function HomePage() {
  return (
    <section className="my-40 flex items-center justify-between">
      <div>
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-9">Anjani <span className="text-blue-600 dark:text-blue-500">Chapparapu</span></h1>

        <Link to="/projects" className="inline-block px-7 py-3 mr-2 bg-blue-600 border-2 border-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Projects</Link>

        <Link to="/about" className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase transition duration-150 ease-in-out rounded border-2 border-blue-600 hover:text-white hover:border-blue-700 hover:shadow-lg hover:bg-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 dark:text-white">About</Link>
      </div>
      <img className="rounded-full drop-shadow-xl" src={personalPicture} />
    </section>
  )
}

export default HomePage;