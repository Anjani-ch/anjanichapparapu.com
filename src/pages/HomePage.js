import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ParticleBackground from '../components/ParticleBackground';

import personalPicture from '../assets/img/anjani.jpg';

function HomePage() {
  return (
    <Fragment>
      <ParticleBackground />
      <section className="container my-10 flex items-center justify-between flex-col-reverse sm:my-20 md:flex-row lg:my-30">
        <div>
          <h1 className="text-5xl text-center font-bold tracking-tight mt-4 md:mt-0 md:text-left md:text-6xl xl:text-7xl">Anjani <span className="text-blue-600 dark:text-blue-500">Chapparapu</span></h1>
          <h3 className="text-3xl text-center mt-3 mb-5 md:mb-7 md:text-left">Web Development</h3>
          <div className="text-center md:text-left">
            <Link to="/projects" className="block w-full px-7 py-3 mr-2 mb-2 bg-blue-600 border-2 border-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out sm:inline-block sm:w-auto sm:mb-0">Projects</Link>

            <Link to="/about" className="block w-full px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase transition duration-150 ease-in-out rounded shadow-md border-2 border-blue-600 hover:text-white hover:border-blue-700 hover:shadow-lg hover:bg-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 dark:text-white sm:inline-block sm:w-auto">About</Link>
          </div>
        </div>
        <img className="rounded-full drop-shadow-xl" src={personalPicture} alt="personal" />
      </section>
    </Fragment>
  )
}

export default HomePage;