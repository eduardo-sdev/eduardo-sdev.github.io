export const ModalProject=({visible,onClose,project}) => {
    const handleOnClose=e=>{if(e.target.id=="modalContainer")onClose}
    if (!visible)return

    return (
        <div 
            id='modalContainer'
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
        >
            <div className='bg-white w-full h-full mx-4 md:mx-20 mt-8 md:mt-36 text-black p-2 rounded'>
                    <h1 className='text-black'>
                    {project.title}
                    </h1>
                    <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}

