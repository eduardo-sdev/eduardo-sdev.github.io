import { 
  LinkedinLogo,
  GithubLogo
} from 'phosphor-react'

import './style.scss'

export function Footer() {
    return (
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <h1 className="footer__title">
                    EduardoSilva
                </h1>
                <p className="footer__description">
                    Olá, Sou EduardoSilva, E esse é meu Portifolio desenvolvedor frontend
                </p>

                <div className="footer__social">
                    <a
                        href="https://github.com/eduardo-sdev" 
                        target="_blank" rel="noopener noreferrer" 
                        className="footer__link"
                    >
                        <GithubLogo size={32} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/esi01/" 
                        target="_blank" rel="noopener noreferrer" 
                        className="footer__link"
                    >
                        <LinkedinLogo size={32} />
                    </a>
                </div>
                <p className='Footer__copy'>Todos os direitos resevado por @EduardoSilva - 2022</p>
            </div>
        </footer>
    )
}
