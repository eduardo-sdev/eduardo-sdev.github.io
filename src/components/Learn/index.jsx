import {
  LinkedinLogo,
  WhatsappLogo,
  GithubLogo
} from 'phosphor-react'

import { db } from './db'

import { LearnContainer } from './LearnContainer'
import uniqid from 'uniqid'

import './style.scss'

export function Learn() {
  return (
    <section id="learn" className="section section-learn">
      <h2 className="section__title">
        Estudos
      </h2>
      <div className="learn__container">
        {
          db.map(item => (
            <LearnContainer key={uniqid()} learn={item}/>
          ))
        }
      </div>
    </section>
  )
}

