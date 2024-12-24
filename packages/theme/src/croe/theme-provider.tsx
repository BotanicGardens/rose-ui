import React from 'react'
import ThemeContext from './theme-context'

interface ThemeProviderProps {
    children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return (
        <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider
