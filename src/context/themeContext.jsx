import {
  createContext,
  useState
} from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('dark')

  const toggleTheme = () => {
    const name = themeName === 'dark' ? '' : 'dark'
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }

