import React from 'react'
import useLocalStroage from './useLocalStroage';
import './index.css'
const Switch_mode = () => {

    const [theme, setTheme] = useLocalStroage("theme", 'dark')
    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : 'light')

    }
    console.log(theme);
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello World !</p>
                <button onClick={handleTheme}>Change Theme</button>
            </div>
        </div>
    )
}

export default Switch_mode;