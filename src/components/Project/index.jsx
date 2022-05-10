import {
    CalendarCheck,
    HourglassHigh,
    Terminal,
    CheckSquare,
    Rocket,
    FlagBanner,
    Stack,
} from "phosphor-react";

import uniqid from 'uniqid'

import "./style.scss";

export const Project = ({ project }) => {
    return (
        <div key={uniqid()} className="project__data">
            <div className="project__header">
                <div className="box">
                    <div className="project__image">
                        <img src={project.imgurl} alt="" />
                    </div>
                    <div>
                        <div className="project__title">{project.title}</div>

                        <div className="project__subtitle">
                            {project.subtitle}
                        </div>
                    </div>
                </div>

                <div className="project__date">
                    <CalendarCheck />: {project.date}
                </div>
            </div>

            <ul className="project__list">
                <li className="project__list-item">
                    <HourglassHigh />
                    <span>Status: </span>
                    {project.status}
                </li>

                <li className="project__list-item">
                    <CheckSquare />
                    <span>Task: </span>
                    {project.task}
                </li>

                <li className="project__list-item">
                    <FlagBanner />
                    <span>Skills: </span>
                    {project.skills}
                </li>
                <li className="project__list-item">
                    <Stack />
                    <span>Stacks: </span>
                    <ul className="stack__list">
                        {project.stacks.map(stak => (
                            <li className="stack__list-item" key={uniqid()}>{stak}</li>
                        ))}
                    </ul>
                </li>
                <li className="project__list-item">
                    <Rocket />
                    <span >Deploy: </span>
                    <a className="link" href={project.deploy}>Deploy</a>
                </li>
                <li className="project__list-item">
                    <Terminal />
                    <span>Código: </span>
                    <a className="link" href={project.repo}>Ver Código</a>
                </li>
            </ul>
        </div>
    );
};
