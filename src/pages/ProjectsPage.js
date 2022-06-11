import React from 'react';

import ProjectsGrid from '../components/projects/ProjectsGrid';

function ProjectsPage() {
  return (
    <section className="container my-10 md:my-16">
      <h1 className="text-4xl text-center mb-9">My <span className="text-blue-600 dark:text-blue-500">Projects</span></h1>
      <ProjectsGrid />
    </section>
  )
}

export default ProjectsPage;