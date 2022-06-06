import React, { createContext, useState, useContext } from 'react';

import { STORAGE_KEY } from '../keys/localStorageKeys';

const ThemeContext = createContext();
const ThemeSetPrefferedContext = createContext();
const ThemeSetLocalContext = createContext();

function useTheme() {
    return useContext(ThemeContext);
}

function useThemeSetPreffered() {
    return useContext(ThemeSetPrefferedContext);
}

function useThemeSetLocal() {
    return useContext(ThemeSetLocalContext);
}

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(null);

    const updateThemeInDocument = (value) => {
        if(value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
    
    const setThemeByPreffered = () => {
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

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeSetPrefferedContext.Provider value={setThemeByPreffered}>
                <ThemeSetLocalContext.Provider value={setThemeByLocal}>
                    {children}
                </ThemeSetLocalContext.Provider>
            </ThemeSetPrefferedContext.Provider>
        </ThemeContext.Provider>
    );
}

export {
    ThemeProvider,
    useTheme,
    useThemeSetLocal,
    useThemeSetPreffered
}