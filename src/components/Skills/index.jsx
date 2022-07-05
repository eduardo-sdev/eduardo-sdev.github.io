import { AiFillHtml5 } from 'react-icons/ai';

import { DiCss3, DiJavascript1, DiReact} from 'react-icons/di';
import { AiFillGithub } from 'react-icons/ai';
import { FaFigma } from 'react-icons/fa';

import './style.scss'

export function Skills() {
    return (
        <>
            <section id="skills" className="section skills__container">
                <h2 className='section__title'>
                    Tecnologias
                </h2>

                <div className="skills__data">
                    <AiFillHtml5 />
                    <DiCss3 />
                    <DiJavascript1 />
                    <AiFillGithub />
                    <FaFigma />
                    <DiReact />
                </div>
            </section>
        </>
    )
}
