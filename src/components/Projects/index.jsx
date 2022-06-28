import { useEffect, useState } from 'react'

import uniqid from 'uniqid'

import {Project} from '../Project'

export const Projects = () => {
    const [projects, setProjects] = useState()

    useEffect(() => {
        fetch('https://graphql.datocms.com/', {
          method: 'POST',
          headers: {
            'Authorization': process.env.REACT_APP_DATO_API_TOKEN,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ "query": `query {
            allProjects(filter: {public: {eq: true}}) {
                title
                id
                data
                statusdev
                task
                stacks
                skill
                deploy
                repo
                imageurl {
                  url
                }
              }
            }
          ` })
        })
      .then((resp) => resp.json())
      .then((respComp) => {

        const all_projects = respComp.data.allProjects;
          setProjects(all_projects);
      });
    },[])

  return (
    <>
      <section id="projects" className="projects">
        <h2 className="section__title">
          Projetos
        </h2>
        <div className="projects__container">
          {
            projects ? (
             projects.map(proj => {
               return (
                 <Project key={uniqid()} project={proj} />
               )
             })
            ) : (<h3>Carregando Projetos...</h3>)
          }
        </div>
      </section>
    </>
  )
}
