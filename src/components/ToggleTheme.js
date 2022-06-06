import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faDisplay, faMoon } from '@fortawesome/free-solid-svg-icons';

import ThemeContext from '../contexts/ThemeContext';

import { STORAGE_KEY } from '../keys/localStorageKeys';

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [isDropdownToggled, setIsDropdownToggled] = useState(false);
  const [dropdownClass, setDropdownClass] = useState('');

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

    localStorage.setItem(STORAGE_KEY, result);
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

  const toggleDropdown = () => {
    const SHOW_CLASS = 'transition ease-out duration-100 transform opacity-100 scale-100 ';
    const HIDE_CLASS = 'transition ease-in duration-75 transform opacity-0 scale-95 ';

    let dropdownClassResult;

    if(isDropdownToggled) {
      dropdownClassResult = HIDE_CLASS;

      setTimeout(() => {
        dropdownClassResult = SHOW_CLASS;
        setDropdownClass(dropdownClassResult);
      }, 100);

      setDropdownClass(dropdownClassResult);
    } else {
      dropdownClassResult = HIDE_CLASS;
      
      setDropdownClass(dropdownClassResult);

      setTimeout(() => {
        setDropdownClass(dropdownClassResult + 'hidden ');
      }, 100);
    }

    setIsDropdownToggled(!isDropdownToggled);
  }

  useEffect(() => {
    const themeInStorage = localStorage.getItem(STORAGE_KEY);
    
    if(!themeInStorage) {
      setThemeByPrefered();
    } else if(themeInStorage) {
      setThemeByLocal(themeInStorage);
    }
    
    toggleDropdown();
  }, []);

  return (
    <div className="relative z-50">
      <button onClick={toggleDropdown} type="button" className="flex mr-3 text-xl rounded-md p-1.5 focus:ring-2 focus:ring-gray-300 hover:bg-gray-100 md:mr-0 dark:focus:ring-gray-600 dark:text-white dark:hover:bg-gray-700">
        <span className="sr-only">Toggle theme</span>
        {renderIcon()}
      </button>

      <div className={dropdownClass + "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700"}>
        <div className="py-1">
          <div onClick={() => setThemeByLocal('light')} className="text-gray-700 block px-4 py-2 text-md cursor-pointer dark:text-white"><FontAwesomeIcon className="mr-2" icon={faSun} /> Light</div>
          <div onClick={() => setThemeByLocal('dark')} className="text-gray-700 block px-4 py-2 text-md cursor-pointer dark:text-white"><FontAwesomeIcon className="mr-2" icon={faMoon} /> Dark</div>
          <div onClick={() => setThemeByPrefered()} className="text-gray-700 block px-4 py-2 text-md cursor-pointer dark:text-white"><FontAwesomeIcon className="mr-2" icon={faDisplay} /> System</div>
        </div>
      </div>
    </div>
  )
}

export default ToggleTheme;