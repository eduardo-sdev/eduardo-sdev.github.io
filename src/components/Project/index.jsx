import {
    CalendarCheck,
    HourglassHigh,
    Terminal,
    CheckSquare,
    Rocket,
    FlagBanner,
    Stack,
} from "phosphor-react";

import "./style.scss";

export const Project = ({ project, id }) => {
    return (
        <div key={id} className="project__data">
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
                    {project.stacks}
                </li>
                <li className="project__list-item">
                    <Rocket />
                    <span>Deploy: </span>
                    <a href={project.deploy}>Deploy</a>
                </li>
                <li className="project__list-item">
                    <Terminal />
                    <span>Código: </span>
                    <a href={project.repo}>Ver Código</a>
                </li>
            </ul>
        </div>
    );
};
