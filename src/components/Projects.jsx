import { useFetch }from'../hooks/useFetch'

import {FaRegFolder} from 'react-icons/fa'

import{Box}from'./'

const Project=({project})=>(
        <div>
            <div className="flex mb-3">
                <img 
                    className="w-20 h-fit mr-5 rounded-lg"
                    src={project.img ? project.img : "./project.png"} 
                    alt={project.title}
                />
                <div>
                    <div className="flex items-center gap-5">
                        <FaRegFolder color="#887c9c" size='20px'/>
                        <h2>{project.title}</h2>
                    </div>
                    <p>{project.desc}</p>
                </div>
            </div>
            <div>
                <ul className="flex gap-1">
                    {project.stack.split(',').map((item,index)=>(
                        <li key={index} className="">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

export const Projects = () => {
    const {data: projects, isFerching} = useFetch(import.meta.env.VITE_URL_SHEETIO)  

    return (
        <div className="flex flex-col w-full gap-5">
            <Box title="Projetos"/>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
                {isFerching&&<p>Carregando!</p>}
                {projects?.map((project, index)=>(
                    project.public === "TRUE" && (
                        <Box key={index}>
                            <Project project={project} />
                        </Box>
                    )
                ))}
            </div>
        </div>
    )
}

