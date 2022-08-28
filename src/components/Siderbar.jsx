import{Profile,Links,Technology}from'./'

export const Siderbar = () => (
    <div className="flex flex-col gap-5 w-80">
        <Profile/> 
        <Links/>
        <Technology/>
    </div>
)

