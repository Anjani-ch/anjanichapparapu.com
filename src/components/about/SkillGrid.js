import React from 'react';

import Skill from './Skill';

import htmlLogo from '../../assets/img/logos/html.svg';
import cssLogo from '../../assets/img/logos/css3.svg';
import jsLogo from '../../assets/img/logos/javascript.svg';
import reactLogo from '../../assets/img/logos/react.svg';
import vueLogo from '../../assets/img/logos/vue-dot-js.svg';
import nodejsLogo from '../../assets/img/logos/node-js.svg';
import mongodbLogo from '../../assets/img/logos/mongodb.svg';
import firebaseLogo from '../../assets/img/logos/firebase.svg';
import gitLogo from '../../assets/img/logos/git.svg';
import githubLogo from '../../assets/img/logos/github.svg';
import linuxLogo from '../../assets/img/logos/linux.svg';

function SkillGrid() {
  return (
    <div className="grid gap-4 grid-col-1 md:w-10/12 mx-auto sm:grid-cols-3 md:grid-cols-4">
        <Skill name="HTML" img={htmlLogo} imgAlt="html-logo" />
        <Skill name="CSS" img={cssLogo} imgAlt="css-logo" />
        <Skill name="JavaScript" img={jsLogo} imgAlt="javascript-logo" />
        <Skill name="React" img={reactLogo} imgAlt="react-logo" />
        <Skill name="Vue" img={vueLogo} imgAlt="vue-logo" />
        <Skill name="Node JS" img={nodejsLogo} imgAlt="node-js-logo" />
        <Skill name="MongoDB" img={mongodbLogo} imgAlt="mongodb-logo" />
        <Skill name="Firebase" img={firebaseLogo} imgAlt="firebase-logo" />
        <Skill name="Git" img={gitLogo} imgAlt="git-logo" />
        <Skill name="GitHub" img={githubLogo} imgAlt="github-logo" useGithubFill />
        <Skill name="Linux" img={linuxLogo} imgAlt="linux-logo" />
    </div>
  )
}

export default SkillGrid;