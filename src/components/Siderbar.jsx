import{Profile,Links,Technology}from'./'

export const Siderbar = () => (
    <div className="flex flex-col w-full gap-5 ">
        <div className="flex xl:flex-col gap-5 ">
            <Profile/> 
            <Links/>
        </div>
        <Technology/>
    </div>
)

