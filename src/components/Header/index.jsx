import { useContext } from 'react'

import { 
  FaMoon, 
  FaSun
} from 'react-icons/fa'

import './style.scss'

import { ThemeContext } from '../../context/themeContext'

export const Header = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
    <>
      <header className='header'>
        <nav className='nav bg-grid'>
          <div className="nav__logo">
            <a href="#" >EduardoSilva</a>
          </div>
          <div onClick={toggleTheme} className="nav__toggle--theme">
              {themeName === 'dark' ? <FaSun /> : <FaMoon />}
            </div>
        </nav>
      </header>
    </>
  )
}

