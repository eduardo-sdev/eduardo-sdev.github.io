import {
  CalendarCheck,
  HourglassHigh,
  Terminal,
  CheckSquare,
  Rocket,
  FlagBanner,
  Stack
} from 'phosphor-react'

import './style.scss'

export const Project = ({project , id}) => {
  return (
    <div key={id} className="project__data">
      <div className="project__header">

        <div className='box'>
          <div className="project__image">
            <img src={project.imgurl} alt="" />
          </div>
          <div>
            <div className="project__title">
              {project.title}
            </div>

            <div className="project__subtitle">
              {project.subtitle}
            </div>
          </div>
        </div>

        <div className="project__date">
          <CalendarCheck />
          : {project.date}
        </div>

      </div>
      
      <div className="project__status">
        <HourglassHigh />
        : {project.status}
      </div>

      <div className="project__task">
        <CheckSquare />
        : {project.task}
      </div>

      <div className="project__skills">
        <FlagBanner />
        : {project.skills}
      </div>
      <div className="project__stacks">
        <Stack />
        : {project.stacks}
      </div>

      <div className="project__deploy">
        <Rocket />
        : <a href={project.deploy}>Deploy</a>
      </div>

      <div className="project__deploy">
        <Terminal />
        : <a href={project.repo}>Ver Código</a>
      </div>

    </div>
  )
}
