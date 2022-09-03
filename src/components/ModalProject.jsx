import{
    ImageSlider,
    Box
}from'./'
import{
    FaGithub,
    FaGlobe,
    FaAngleLeft,
    FaAngleRight,
}from'react-icons/fa'

import{
    IoIosClose
}from'react-icons/io'

export const ModalProject=({visible,onClose,project})=>{
    const handleOnClose=e=>{if(e.target.id=="modalContainer")onClose}
    if (!visible)return

    const {
        title,
        status,
        desc,
        img,
        stack,
        date,
        repo,
        deploy,
        tag,
        contributors,
        other_links,
    } = project

    const contributor = () => {
        const contributorsList = contributors.split(",")
        let contributorString = ''
        for(let index in contributorsList){
            const contributor = contributorsList[index].split("|")
            const contributorObject = `{"dev":"${contributor[0]}","link":"${contributor[1]}"},`
            contributorString += contributorObject
        }
        const removeLastComma = contributorString.slice(0,-1)
        const contributorsDev=JSON.parse(`[${removeLastComma}]`)
        return contributorsDev
    }

    return (
        <div 
            id='modalContainer'
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center scrollbar-thin scrollbar-thumb-gray-700 overflow-y-scroll"
        >
            <div className='relative flex flex-col md:flex-row gap-5 bg-[#22212C] w-[1000px] h-full mx-4 md:mx-20 mt-8 md:mt-36 p-5 rounded'>
                <div className='flex flex-col gap-5 w-full'>
                    <div className='relative flex flex-col gap-5 w-full'>
                        <Box title={title}/>
                        <div className='absolute -top-4 right-8'>
                            <div className="p-2 rounded-xl w-full bg-[#302F3D] shadow-lg">
                                {status}
                            </div>
                        </div>
                    </div>
                    <Box title="Descrição">{desc}</Box>
                    <Box>
                        <ImageSlider linkImage={img}/>
                    </Box>
                    <Box>
                        <ul className="flex gap-1">
                            {stack?.split(',').map((item,index)=>(
                                <li key={index}>
                                   {item}
                                </li>
                            ))}
                        </ul>
                    </Box>
                </div>
                <div className='flex flex-col gap-5 w-96'>
                    {contributors&&(
                        <Box title="Colaboradores do Projeto">
                            <div className="mt-4">
                                {
                                    contributor().map((user,index)=>(
                                        <div className="flex items-center gap-2 mb-2" key={index}>
                                            <img 
                                                src={user.link+'.png'} 
                                                className="w-8 rounded-full" 
                                            />
                                            <div className="">
                                                <h3>{user.dev}</h3>
                                                    <a 
                                                        href={user.link}
                                                        target="_blank" rel="noopener noreferrer"
                                                        className="flex text-xs gap-1 items-center underline"
                                                    >
                                                        <FaGithub />@{user.dev}
                                                    </a>
                                            </div>
                                        </div>
                                   ))
                                }
                            </div>
                        </Box>
                    )}
                    <Box title="Links do Projeto">
                        <div className="flex mt-3 gap-4">
                            {repo&&(
                                    <a 
                                        href={repo} 
                                        target="_blank" rel="noopener noreferrer"
                                        className="flex gap-1 items-center underline"
                                    >
                                        <FaGithub />repositório
                                    </a>
                            )}
                            {deploy&&(
                                <a 
                                    href={deploy} 
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex gap-1 items-center underline"
                                >
                                    <FaGlobe />Ver Site
                                </a>
                            )}
                        </div>
                    </Box>
                </div>
            <button 
                onClick={onClose}
                className="absolute -right-2 -top-5"
            >
                    <IoIosClose
                        onClick={onClose}
                        size="50"
                    />
                </button>
            </div>
        </div>
    )
}

