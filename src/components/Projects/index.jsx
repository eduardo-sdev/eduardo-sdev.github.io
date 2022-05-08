import { db } from './db'

import uniqid from 'uniqid'

import {Project} from '../Project' 

export const Projects = () => {
  return (
    <>
      <section className="projects">
        <div className="projects__container">
          {
            db.map(proj => {
              return (
                <Project key={uniqid()} project={proj} />
              )
            })
          }
        </div>
      </section>
    </>
  )
}
