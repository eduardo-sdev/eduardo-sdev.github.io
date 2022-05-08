import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiReact} from 'react-icons/di';

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
                    <DiReact />
                </div>
            </section>
        </>
    )
}

