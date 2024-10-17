import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Define the possible theme types
type Theme = 'light' | 'dark';

// Define the context value type
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// ThemeProvider component to wrap the app
export const ThemeProvider:  React.FC<{ children: ReactNode }> = ({ children }) =>{
    // Function to retrieve the stored theme or fallback to 'light'
    const getStoredTheme = (): Theme => {
        const storedTheme = localStorage.getItem('theme') as Theme;
        return storedTheme || 'light'
    };

    // State to track the current theme
    const [theme, setTheme] = useState<Theme>(getStoredTheme);

    // Function to toggle the theme and save it to localStorage
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(newTheme);
        console.log(newTheme)
    };


    // Update the class on the <html> element when the theme changes
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, []);

    // Provide the theme and toggleTheme function to children
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
