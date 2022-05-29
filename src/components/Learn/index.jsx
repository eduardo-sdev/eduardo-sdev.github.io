import { useEffect, useState } from 'react'

import { LearnContainer } from './LearnContainer'
import uniqid from 'uniqid'

import './style.scss'

export const Learn = () => {
    const [learn, setLearn] = useState()

    useEffect(() => {
        fetch('https://graphql.datocms.com/', {
          method: 'POST',
          headers: {
            'Authorization': process.env.REACT_APP_DATO_API_TOKEN,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ "query": `query {
            allLearns {
                title
                id
                data
                statusdev
                task
                stacks
                skill
                deploy
                repo
                initpage
                certificate
                imageurl {
                  url
                }
              }
            }
          ` })
        })
      .then((resp) => resp.json())
      .then((respComp) => {

        const all_learn = respComp.data.allLearns;
        setLearn(all_learn);
      });
    },[])

  return (
    <section id="learn" className="section section-learn">
      <h2 className="section__title">
        Estudos
      </h2>
      <div className="learn__container">
          {
            learn ? (
             learn.map(item => {
               return (
                 <LearnContainer key={uniqid()} learn={item} />
               )
             })
            ) : (<h3>Carregando Projetos...</h3>)
          }
      </div>
    </section>
  )
}

