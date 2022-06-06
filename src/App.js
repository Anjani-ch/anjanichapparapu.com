import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
        <main className="grow shrink-0 basis-auto relative">
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