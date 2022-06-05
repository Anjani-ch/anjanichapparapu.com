import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faDisplay, faMoon } from '@fortawesome/free-solid-svg-icons';

function ToggleTheme() {
  const [theme, setTheme] = useState(null);
  const [isDropdownToggled, setIsDropdownToggled] = useState(false);

  const STORAGE_KEY = 'theme';

  const updateThemeInDocument = (value) => {
    if(value === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
  }

  const setThemeByPrefered = () => {
    let result;

    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        result = 'dark';
    } else {
        result = 'light';
    }

    localStorage.removeItem(STORAGE_KEY);
    setTheme(result);

    updateThemeInDocument(result);
  }

  const setThemeByLocal = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    setTheme(value);

    updateThemeInDocument(value);
  }

  const renderIcon = () => {
    let result;

    switch(theme) {
        case 'light':
            result = faSun;
            break;
        case 'dark':
            result = faMoon;
            break;
        default:
            result = faDisplay;
    }

    return <FontAwesomeIcon icon={result} />;
  }

  const dropdownClass = () => {
    let result;

    if(isDropdownToggled) {
        result = 'transition ease-out duration-100 transform opacity-100 scale-100 ';
    } else {
        result = 'transition ease-in duration-75 transform opacity-0 scale-95 ';
    }

    return result;
  }

  useEffect(() => {
    const themeInStorage = localStorage.getItem(STORAGE_KEY);
    
    if(!themeInStorage) {
        setThemeByPrefered();
    } else if(themeInStorage) {
        setThemeByLocal(themeInStorage);
    }
  }, []);

  return (
    <div className="relative">
        <button onClick={() => setIsDropdownToggled(!isDropdownToggled)} type="button" className="flex mr-3 text-xl rounded-md p-1.5 md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 dark:text-white">
            <span className="sr-only">Toggle theme</span>
            {renderIcon()}
        </button>

        <div className={dropdownClass() + "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"}>
            <div className="py-1">
                <Link onClick={() => setThemeByLocal('light')} to="/" className="text-gray-700 block px-4 py-2 text-sm"><FontAwesomeIcon className="mr-2" icon={faSun} /> Light</Link>
                <Link onClick={() => setThemeByLocal('dark')} to="/" className="text-gray-700 block px-4 py-2 text-sm"><FontAwesomeIcon className="mr-2" icon={faMoon} /> Dark</Link>
                <Link onClick={() => setThemeByPrefered()} to="/" className="text-gray-700 block px-4 py-2 text-sm"><FontAwesomeIcon className="mr-2" icon={faDisplay} /> System</Link>
            </div>
        </div>
    </div>
  )
}

export default ToggleTheme;