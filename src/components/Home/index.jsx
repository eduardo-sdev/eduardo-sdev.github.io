import {
  LinkedinLogo,
  WhatsappLogo,
  GithubLogo
} from 'phosphor-react'

import './style.scss'

export function Home() {
  return (
    <>
      <section id="home" className="home">
        <div className="home__container gb-grid">
          <div className="home__data">
            <h1 className="home__title">EduardoSilva</h1>
            <span className="home__profession">Frontend Developer</span>

            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/esi01/"
                target="_blank" rel="noopener noreferrer"
                className="home__social-link"
              >
                <LinkedinLogo size={32} />
              </a>
              <a
                href="https://github.com/eduardo-sdev"
                target="_blank" rel="noopener noreferrer"
                className="home__social-link"
              >
                <GithubLogo size={32} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5581993504951"
                target="_blank" rel="noopener noreferrer"
                className="home__social-link"
              >
                <WhatsappLogo size={32} />
              </a>
            </div>

            <a href="#" className="button home__button">Currículo</a>
          </div>

        </div>

      </section>
    </>
  )
}
