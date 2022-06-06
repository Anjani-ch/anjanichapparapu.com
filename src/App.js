import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

import Header from './components/Header';
import Footer from './components/Footer';

import ThemeContext from './contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState(null);

  return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
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
      </ThemeContext.Provider>
  );
}

export default App;