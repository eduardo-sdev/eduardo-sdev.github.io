import { useContext } from 'react'

import { 
  Header,
  Sidebar,
  Home,
  Projects,
  Skills,
  Learn,
  Footer
} from './components'

import { ThemeContext } from './context/themeContext'

export const App = () => {
  const [{themeName}] = useContext(ThemeContext)

  return (
    <div className={themeName}>
      <Header />
      <Sidebar />
      <main className='app'>
        <Home />
        <Projects />
        <Skills />
        <Learn />
        <Footer />
      </main>
    </div>
  )
}

