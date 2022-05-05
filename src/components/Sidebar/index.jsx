import { useState} from 'react'

import { List } from 'phosphor-react'

import './style.scss'

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <>
        <div style={{left: showSidebar ? '0': null}} id="nav-menu" className="nav__menu">

          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">Sobre</a></li>
            <li className="nav__item"><a href="#project" className="nav__link">Projetos</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#learn" className="nav__link">Estudos</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link"></a></li>
          </ul>
        </div>
        <div 
          onClick={() => toggleSidebar()}
          className="nav__toggle" id="nav-toggle"
        >
          <List size={32} />
        </div>
    </>
  )
}

