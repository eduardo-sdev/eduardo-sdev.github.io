import { BsLink45Deg, BsImage } from 'react-icons/bs';

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
                        {learn.imageurl ? (
                            <img src={learn.imageurl.url} alt={learn.title} />
                            ) : (<BsImage size={100} />)
                        }
                    </div>
                    <div>
                        <div className="learn__title">{learn.title}</div>

                        <div className="learn__subtitle">
                            {learn.subtitle}
                        </div>
                    </div>
                </div>

                <div className="learn__date">
                    <CalendarCheck />: {learn.data}
                </div>
            </div>

            <ul className="learn__list">
                <li className="learn__list-item">
                    <HourglassHigh />
                    <span>Status: </span>
                    {learn.statusdev}
                </li>

                {learn.task && (
                    <li className="learn__list-item">
                        <CheckSquare />
                        <span>Task: </span>
                        {learn.task}
                    </li>
                    )
                }

                {learn.skill && (
                    <li className="learn__list-item">
                        <FlagBanner />
                        <span>Skills: </span>
                        {learn.skill}
                    </li>
                )}
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
                { learn.initpage || learn.certificate ? (
                        <li className="learn__list-item">
                            <BsLink45Deg/>
                                <span>Links:</span>
                            {
                                learn.initpage && (
                                    <a
                                        href={learn.initpage} className="link learn__links-item"
                                        target="_blank" rel="noopener noreferrer"
                                    >Página Inicial</a>
                                )
                            }
                            {
                                learn.certificate && (
                                    <a
                                        href={learn.certificate} className="link learn__links-item"
                                        target="_blank" rel="noopener noreferrer"
                                    >Certificado</a>
                                )
                            }
                        </li>
                ) : ('')
                }
            </ul>
        </div>
    );
}

