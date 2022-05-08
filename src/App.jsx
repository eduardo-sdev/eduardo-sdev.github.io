import { useContext } from 'react'

import { 
  Header,
  Sidebar,
  Home,
  Projects,
  Skills,
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
        <Footer />
      </main>
    </div>
  )
}

