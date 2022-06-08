import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function AboutPage() {
  return (
    <section className="container my-20 p-5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
      <h1 className="text-4xl text-center mb-10">About <span className="text-blue-600 dark:text-blue-500">Me</span></h1>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7">
        <ul className="mb-7 md:mb-0">
          <li className="mb-6 pb-2 border-b-2 border-slate-500"><FontAwesomeIcon className="text-xl mr-3.5" icon={faUser} /> Anjani Pranav Reddy Chapparapu</li>
          <li className="mb-6 pb-2 border-b-2 border-slate-500"><FontAwesomeIcon className="text-xl mr-3" icon={faEnvelope} /> pranav.ch.12@outlook.com</li>
          <li className="mb-6 pb-2 border-b-2 border-slate-500"><FontAwesomeIcon className="text-2xl mr-3" icon={faMobileScreen} /> +47 418 41 851</li>
          <li className="mb-6 pb-2 border-b-2 border-slate-500"><FontAwesomeIcon className="text-2xl mr-2" icon={faGithub} /> <a className="underline" rel="noopener noreferrer" href="https://github.com/Anjani-ch" target="_blank">https://github.com/Anjani-ch</a></li>
        </ul>

        <p>I am a person who recently gained an interest in coding, and I was sure that I could turn this into a career. I have learned coding in school and through self-learning. My skills are shown in my work and I am willing to continue to learn and do more work.</p>
      </div>
    </section>
  )
}

export default AboutPage;