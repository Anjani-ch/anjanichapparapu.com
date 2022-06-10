import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import vueMovieAppImage from '../assets/img/projects/vue_movie_app.png';
import numberGuessingGameImage from '../assets/img/projects/number_guessing_game.png';
import countriesFactSiteImage from '../assets/img/projects/countries_fact_site.png';
import snakeImage from '../assets/img/projects/snake.png';
import typeingGameWordsImage from '../assets/img/projects/typing_game_words.png';
import rockPaperScissorsImage from '../assets/img/projects/rock_paper_scissors.png';
import simonGameImage from '../assets/img/projects/simon_game.png';

function ProjectsPage() {
  return (
    <section className="container my-10 md:my-16">
      <h1 className="text-4xl text-center mb-9">My <span className="text-blue-600 dark:text-blue-500">Projects</span></h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center p-1.5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
          <img src={vueMovieAppImage} />

          <h3 className="text-2xl mt-3 mb-4">MOVIE APP</h3>

          <a className="block w-full py-3 mb-1.5 transition-all bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" href="https://vue-movie-app-node-proxy-tmdb.herokuapp.com/" target="_blank"><i class="fas fa-eye"></i><FontAwesomeIcon className="text-lg" icon={faEye} /> Demo</a>
          <a className="block w-full py-3 transition-all bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:shadow-lg" href="https://github.com/Anjani-ch/Vue_Movie_App" target="_blank"><i class="fab fa-github"></i><FontAwesomeIcon className="text-xl" icon={faGithub} /> Code</a>
        </div>

        <div className="text-center p-1.5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
          <img src={numberGuessingGameImage} />

          <h3 className="text-2xl mt-3 mb-4">NUMBER GUESSING GAME</h3>

          <a className="block w-full py-3 mb-1.5 transition-all bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" href="https://anjani-ch.github.io/Number_Guessing_Game/" target="_blank"><i class="fas fa-eye"></i><FontAwesomeIcon className="text-lg" icon={faEye} /> Demo</a>
          <a className="block w-full py-3 transition-all bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:shadow-lg" href="https://github.com/Anjani-ch/Number_Guessing_Game/tree/master/dist" target="_blank"><i class="fab fa-github"></i><FontAwesomeIcon className="text-xl" icon={faGithub} /> Code</a>
        </div>

        <div className="text-center p-1.5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
          <img src={countriesFactSiteImage} />

          <h3 className="text-2xl mt-3 mb-4">COUNTRIES FACT SITE</h3>

          <a className="block w-full py-3 mb-1.5 transition-all bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" href="https://anjani-ch.github.io/Countries_Fact_Site/" target="_blank"><i class="fas fa-eye"></i><FontAwesomeIcon className="text-lg" icon={faEye} /> Demo</a>
          <a className="block w-full py-3 transition-all bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:shadow-lg" href="https://github.com/Anjani-ch/Countries_Fact_Site/tree/master/dist" target="_blank"><i class="fab fa-github"></i><FontAwesomeIcon className="text-xl" icon={faGithub} /> Code</a>
        </div>

        <div className="text-center p-1.5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
          <img src={snakeImage} />

          <h3 className="text-2xl mt-3 mb-4">SNAKE</h3>

          <a className="block w-full py-3 mb-1.5 transition-all bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" href="https://anjani-ch.github.io/Snake/" target="_blank"><i class="fas fa-eye"></i><FontAwesomeIcon className="text-lg" icon={faEye} /> Demo</a>
          <a className="block w-full py-3 transition-all bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:shadow-lg" href="https://github.com/Anjani-ch/Snake/tree/master/dist" target="_blank"><i class="fab fa-github"></i><FontAwesomeIcon className="text-xl" icon={faGithub} /> Code</a>
        </div>

        <div className="text-center p-1.5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
          <img src={typeingGameWordsImage} />

          <h3 className="text-2xl mt-3 mb-4">TYPING GAME WORDS</h3>

          <a className="block w-full py-3 mb-1.5 transition-all bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" href="https://anjani-ch.github.io/Typing-Game-Words/" target="_blank"><i class="fas fa-eye"></i><FontAwesomeIcon className="text-lg" icon={faEye} /> Demo</a>
          <a className="block w-full py-3 transition-all bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:shadow-lg" href="https://github.com/Anjani-ch/Typing-Game-Words/tree/master/dist" target="_blank"><i class="fab fa-github"></i><FontAwesomeIcon className="text-xl" icon={faGithub} /> Code</a>
        </div>

        <div className="text-center p-1.5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
          <img src={rockPaperScissorsImage} />

          <h3 className="text-2xl mt-3 mb-4">ROCK PAPER SCISSORS</h3>

          <a className="block w-full py-3 mb-1.5 transition-all bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" href="https://anjani-ch.github.io/Skole_Stein_Saks_Papir/" target="_blank"><i class="fas fa-eye"></i><FontAwesomeIcon className="text-lg" icon={faEye} /> Demo</a>
          <a className="block w-full py-3 transition-all bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:shadow-lg" href="https://github.com/Anjani-ch/Skole_Stein_Saks_Papir" target="_blank"><i class="fab fa-github"></i><FontAwesomeIcon className="text-xl" icon={faGithub} /> Code</a>
        </div>

        <div className="text-center p-1.5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
          <img src={simonGameImage} />

          <h3 className="text-2xl mt-3 mb-4">SIMON GAME</h3>

          <a className="block w-full py-3 mb-1.5 transition-all bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" href="https://anjani-ch.github.io/Simon_Game/" target="_blank"><i class="fas fa-eye"></i><FontAwesomeIcon className="text-lg" icon={faEye} /> Demo</a>
          <a className="block w-full py-3 transition-all bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:shadow-lg" href="https://github.com/Anjani-ch/Simon_Game" target="_blank"><i class="fab fa-github"></i><FontAwesomeIcon className="text-xl" icon={faGithub} /> Code</a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage;