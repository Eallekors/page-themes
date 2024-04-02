// header.js
import React from 'react';
import { useTheme } from '../App'; // Importing useTheme from App.js

const Header = () => {
    const { toggleTheme } = useTheme(); // Using the useTheme hook to access toggleTheme function

    return (
        <header>
            <h1>Demo Website</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
};

export default Header;
