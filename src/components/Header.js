import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ToggleTheme from './ToggleTheme';

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const routes = [
    {
      to: '/',
      name: 'Home'
    },
    {
      to: '/about',
      name: 'About'
    },
    {
      to: '/projects',
      name: 'Projects'
    },
    {
      to: '/contact',
      name: 'Contact'
    }
  ];

  const toggleNav = () => {
    setIsToggled(!isToggled);
  }

  const renderToggleButton = () => {
    let result;

    if(isToggled) {
      result = (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      );
    } else {
      result = (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      );
    }

    return result;
  }

  return (
    <header>
      <nav className="bg-white px-2 sm:px-4 py-4 border-b border-slate-400 dark:border-0 dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex items-center text-2xl">AC</NavLink>

          <div className="flex items-center md:order-2">
            <ToggleTheme />

            <button onClick={toggleNav} data-collapse-toggle="mobile-nav" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Toggle mobile menu</span>
              {renderToggleButton()}
            </button>
          </div>

          <div className={`${!isToggled ? 'hidden ' : ''} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="mobile-nav">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              {routes.map((route, index) => {
                const setNavLinkClasses = ({ isActive }) => {
                  let result = 'block py-2 pr-4 pl-3 ';
              
                  if(isActive) {
                    result += 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white dark:bg-gray-900 dark:md:bg-transparent';
                  } else {
                    result += 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';
                  }
              
                  return result;
                }

                return (
                  <li key={index}>
                    <NavLink to={route.to} className={setNavLinkClasses}>{route.name}</NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;