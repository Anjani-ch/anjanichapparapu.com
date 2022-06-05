import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ContactPage from './pages/ContactPage.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Fragment>
      <Header />
        <main className="container grow shrink-0 basis-auto my-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      <Footer />
    </Fragment>
  );
}

export default App;