import { useState} from 'react'

import { List } from 'phosphor-react'

import './style.scss'

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <>
        <div style={{left: showSidebar ? '0': null}} id="sidebar-menu" className="sidebar__menu">

          <ul className="sidebar__list">
            <li className="sidebar__item">
              <a href="#home" className="sidebar__link active">
                <div className="sidebar__profile">
                  <img src="https://avatars.githubusercontent.com/u/79378029?v=4" alt="EduardoSilva"/>
                </div>
              </a></li>
            <li className="sidebar__item"><a href="#home" className="sidebar__link">Sobre</a></li>
            <li className="sidebar__item"><a href="#projects" className="sidebar__link">Projetos</a></li>
            <li className="sidebar__item"><a href="#skills" className="sidebar__link">Skills</a></li>
            <li className="sidebar__item"><a href="#learn" className="sidebar__link">Estudos</a></li>
            <li className="sidebar__item"><a href="#contact" className="sidebar__link"></a></li>
          </ul>
        </div>
        <div
          onClick={() => toggleSidebar()}
          className="sidebar__toggle" id="nav-toggle"
        >
          <List size={32} />
        </div>
    </>
  )
}

