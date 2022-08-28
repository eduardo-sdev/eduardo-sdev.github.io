import{Box}from'./'
export const Profile = () => (
    <Box>
        <div className="flex flex-col items-center">
            <img 
                src="./developer.png"
                alt="developer"
                className="w-24 rounded-full"
            />
            <h1 className="pt-10">Eduardo Silva</h1>
            <p className="text-xs">Desenvolvedor FrontEnd</p>
        </div>
    </Box>
)
