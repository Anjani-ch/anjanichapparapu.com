import React from 'react';

function Skill({ img, imgAlt, name, useGithubFill }) {
  return (
    <div className="bg-neutral-100 text-center rounded-lg p-5 border border-slate-500 dark:border-0 dark:bg-gray-900 dark:text-white">
        <h3 className="mb-3 font-bold text-lg">{name}</h3>
        <img className={useGithubFill ? 'github-logo-dark' : ''} src={img} alt={imgAlt} />
    </div>
  )
}

export default Skill;