// App.js
import React, { createContext, useContext, useState } from 'react';
import Page from './components/Page';

const ThemeContext = createContext();

const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id="app" className={theme}>
                <Page />
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};

export default App;