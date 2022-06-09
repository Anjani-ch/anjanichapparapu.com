import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import htmlLogo from '../assets/img/logos/html.svg';
import cssLogo from '../assets/img/logos/css3.svg';
import jsLogo from '../assets/img/logos/javascript.svg';
import reactLogo from '../assets/img/logos/react.svg';
import vueLogo from '../assets/img/logos/vue-dot-js.svg';
import nodejsLogo from '../assets/img/logos/node-js.svg';
import mongodbLogo from '../assets/img/logos/mongodb.svg';
import firebaseLogo from '../assets/img/logos/firebase.svg';
import gitLogo from '../assets/img/logos/git.svg';
import githubLogo from '../assets/img/logos/github.svg';
import linuxLogo from '../assets/img/logos/linux.svg';

function AboutPage() {
  return (
    <Fragment>
      <section className="container my-20 p-5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
        <h1 className="text-4xl text-center mb-10">About <span className="text-blue-600 dark:text-blue-500">Me</span></h1>

        <div className="grid grid-cols-1 mb-9 md:grid-cols-2 md:gap-7">
          <ul className="mb-7 md:mb-0">
            <li className="mb-6 pb-2 border-b-2 border-slate-500"><FontAwesomeIcon className="text-xl mr-3.5" icon={faUser} /> Anjani Pranav Reddy Chapparapu</li>
            <li className="mb-6 pb-2 border-b-2 border-slate-500"><FontAwesomeIcon className="text-xl mr-3" icon={faEnvelope} /> pranav.ch.12@outlook.com</li>
            <li className="mb-6 pb-2 border-b-2 border-slate-500"><FontAwesomeIcon className="text-2xl mr-3" icon={faMobileScreen} /> +47 418 41 851</li>
            <li className="mb-6 pb-2 border-b-2 border-slate-500"><FontAwesomeIcon className="text-2xl mr-2" icon={faGithub} /> <a className="underline" rel="noopener noreferrer" href="https://github.com/Anjani-ch" target="_blank">https://github.com/Anjani-ch</a></li>
          </ul>

          <p>I am a person who recently gained an interest in coding, and I was sure that I could turn this into a career. I have learned coding in school and through self-learning. My skills are shown in my work and I am willing to continue to learn and do more work.</p>
        </div>
      </section>

      <section className="container my-20 p-5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
        <h1 className="text-4xl text-center mb-6">Technical <span className="text-blue-600 dark:text-blue-500">Skills</span></h1>

          <div className="grid gap-4 grid-col-1 md:w-10/12 mx-auto sm:grid-cols-3 md:grid-cols-4">
            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">HTML</h3>
              <img src={htmlLogo} alt="html-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">CSS</h3>
              <img src={cssLogo} alt="css-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">JavaScript</h3>
              <img src={jsLogo} alt="javascript-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">React</h3>
              <img src={reactLogo} alt="react-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">Vue</h3>
              <img src={vueLogo} alt="vue-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">Node JS</h3>
              <img src={nodejsLogo} alt="node-js-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">MongoDB</h3>
              <img src={mongodbLogo} alt="mongodb-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">Firebase</h3>
              <img src={firebaseLogo} alt="firebase-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">Git</h3>
              <img src={gitLogo} alt="git-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">GitHub</h3>
              <img className="github-logo-dark" src={githubLogo} alt="github-logo" />
            </div>

            <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
              <h3 className="mb-3 font-bold text-lg">Linux</h3>
              <img src={linuxLogo} alt="linux-logo" />
            </div>
          </div>
        </section>
    </Fragment>
  )
}

export default AboutPage;