import "./index.css"

import {
    Siderbar,
    Projects
}from './components'

export const App = () => {
    return(
        <div className="text-gray-100 p-10 h-screen bg-[#22212C]">
            <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-5">
                <div className="xl:w-80 w-full">
                    <Siderbar/>
                </div>
        <div className="col-span-2">
                <Projects/>
        </div>
            </div>
        </div>
    )
}

