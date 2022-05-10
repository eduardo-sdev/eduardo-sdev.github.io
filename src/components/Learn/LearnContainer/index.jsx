import {
    CalendarCheck,
    HourglassHigh,
    CheckSquare,
    FlagBanner,
    Stack,
} from "phosphor-react";

import uniqid from 'uniqid'

import "./style.scss";

export const LearnContainer = ({learn}) => {
    return (
        <div key={uniqid()} className="learn__data">
            <div className="learn__header">
                <div className="box">
                    <div className="learn__image">
                        <img src={learn.imgurl} alt="" />
                    </div>
                    <div>
                        <div className="learn__title">{learn.title}</div>

                        <div className="learn__subtitle">
                            {learn.subtitle}
                        </div>
                    </div>
                </div>

                <div className="learn__date">
                    <CalendarCheck />: {learn.date}
                </div>
            </div>

            <ul className="learn__list">
                <li className="learn__list-item">
                    <HourglassHigh />
                    <span>Status: </span>
                    {learn.status}
                </li>

                <li className="learn__list-item">
                    <CheckSquare />
                    <span>Task: </span>
                    {learn.task}
                </li>

                <li className="learn__list-item">
                    <FlagBanner />
                    <span>Skills: </span>
                    {learn.skills}
                </li>
                <li className="learn__list-item">
                    <Stack />
                    <span>Stacks: </span>
                    <ul className="learn__stacks">
                        {learn.stacks.map(item => (
                            <li key={uniqid()} className="learn__stacks-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="learn__list-item link">
                    <a href={learn.certificate}>Ver certificado</a>
                </li>
            </ul>
        </div>
    );
}
