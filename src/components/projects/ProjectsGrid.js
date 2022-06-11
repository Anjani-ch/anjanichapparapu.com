import React from 'react';

import Project from './Project';

import vueMovieAppImage from '../../assets/img/projects/vue_movie_app.png';
import numberGuessingGameImage from '../../assets/img/projects/number_guessing_game.png';
import countriesFactSiteImage from '../../assets/img/projects/countries_fact_site.png';
import snakeImage from '../../assets/img/projects/snake.png';
import typingGameWordsImage from '../../assets/img/projects/typing_game_words.png';
import rockPaperScissorsImage from '../../assets/img/projects/rock_paper_scissors.png';
import simonGameImage from '../../assets/img/projects/simon_game.png';

function ProjectsGrid() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Project img={vueMovieAppImage} imgAlt="movie-app" name="MOVIE APP" demoUrl="https://vue-movie-app-node-proxy-tmdb.herokuapp.com/" codeUrl="https://github.com/Anjani-ch/Vue_Movie_App" />
        <Project img={numberGuessingGameImage} imgAlt="number-guessing-game" name="NUMBER GUESSING GAME" demoUrl="https://anjani-ch.github.io/Number_Guessing_Game/" codeUrl="https://github.com/Anjani-ch/Number_Guessing_Game/tree/master/dist" />
        <Project img={countriesFactSiteImage} imgAlt="countries-fact-site" name="COUNTRIES FACT SITE" demoUrl="https://anjani-ch.github.io/Countries_Fact_Site/" codeUrl="https://github.com/Anjani-ch/Countries_Fact_Site/tree/master/dist" />
        <Project img={snakeImage} imgAlt="snake" name="SNAKE" demoUrl="https://anjani-ch.github.io/Snake/" codeUrl="https://github.com/Anjani-ch/Snake/tree/master/dist" />
        <Project img={typingGameWordsImage} imgAlt="typing-game-words" name="TYPING GAME WORDS" demoUrl="https://anjani-ch.github.io/Typing-Game-Words/" codeUrl="https://github.com/Anjani-ch/Typing-Game-Words/tree/master/dist" />
        <Project img={rockPaperScissorsImage} imgAlt="rock-paper-scissors" name="ROCK PAPER SCISSORS" demoUrl="https://anjani-ch.github.io/Skole_Stein_Saks_Papir/" codeUrl="https://github.com/Anjani-ch/Skole_Stein_Saks_Papir" />
        <Project img={simonGameImage} imgAlt="simon-game" name="SIMON GAME" demoUrl="https://anjani-ch.github.io/Simon_Game/" codeUrl="https://github.com/Anjani-ch/Simon_Game" />
    </div>
  )
}

export default ProjectsGrid;