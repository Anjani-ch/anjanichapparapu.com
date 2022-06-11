import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project({ img, imgAlt, name, demoUrl, codeUrl }) {
  return (
    <div className="text-center p-1.5 rounded-lg border border-slate-400 bg-white shadow-xl dark:border-0 dark:bg-gray-800">
        <img src={img} alt={imgAlt} />

        <h3 className="text-2xl mt-3 mb-4">{name}</h3>

        <a className="block w-full py-3 mb-1.5 transition-all bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg" rel="noopener noreferrer" href={demoUrl} target="_blank"><i class="fas fa-eye"></i><FontAwesomeIcon className="text-lg" icon={faEye} /> Demo</a>
        <a className="block w-full py-3 transition-all bg-fuchsia-600 text-white hover:bg-fuchsia-700 hover:shadow-lg" rel="noopener noreferrer" href={codeUrl} target="_blank"><i class="fab fa-github"></i><FontAwesomeIcon className="text-xl" icon={faGithub} /> Code</a>
    </div>
  )
}

export default Project;