import { useState, useEffect } from 'react'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark')
        }
        return false
    })

    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains('dark'))
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        localStorage.setItem('color-theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode)
    }

    return [darkMode, toggleDarkMode]
}

export default useDarkMode
