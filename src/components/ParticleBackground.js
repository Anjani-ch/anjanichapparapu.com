import React, { useRef, useEffect, useContext } from 'react';

import ThemeContext from '../contexts/ThemeContext';

import ParticleSystem from '../classes/ParticleSystem';
import Particle from '../classes/Particle';

function ParticleBackground() {
  const { theme } = useContext(ThemeContext);

  const canvasRef = useRef(null);

  const initParticleBackground = () => {
    const NUMBER_OF_PARTICLES = 80;

    const canvas = canvasRef.current;

    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;

    const particles = [];

    const particleColor = theme === 'dark' ? 'white' : '#2563EB';

    let particleSystem;

    for(let i = 0; i < NUMBER_OF_PARTICLES; i++) {
        const PARTICLE_RADIUS = 2;

        const x = Math.round(Math.random() * canvasWidth);
        const y = Math.round(Math.random() * canvasHeight);

        const particle = new Particle(x, y, PARTICLE_RADIUS, particleColor);

        particles.push(particle);
    }

    particleSystem = new ParticleSystem(canvasWidth, canvasHeight, particles, canvas);

    particleSystem.run();
  }

  useEffect(initParticleBackground, [theme]);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full hidden md:block"></canvas>
  )
}

export default ParticleBackground;

// https://stackoverflow.com/questions/14684393/is-there-a-way-to-get-the-hexadecimal-value-of-any-css-coloryoutube.com