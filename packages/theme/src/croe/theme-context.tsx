import * as React from 'react'

export const ThemeContext = React.createContext(null)

if (process.env.NODE_ENV !== 'production') {
    ThemeContext.displayName = 'ThemeContext'
}

export default ThemeContext
