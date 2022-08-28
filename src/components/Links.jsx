import{Box}from'./'
export const Links = () => (
    <Box>
        <div className="flex flex-col gap-5 p-5">
            <div>
                <a href="http://" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex"
                >
                    <img className="mr-5"
                        src="../public/icons/github.png" alt="github"/>
                        Github
                </a>
            </div>
            <div>
                <a href="http://" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex"
                >
                    <img className="mr-5"
                        src="../public/icons/linkedin.png" alt="linkedin"
                    />
                    Linkedin
                </a>
            </div>
            <div>
                <a href="http://" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex"
                >
                    <img 
                        className="mr-5"
                        src="../public/icons/mail.png" alt="email"
                    />
                    Email
                </a>
            </div>
            <div>
                <a href="http://" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex"
                >
                    <img className="mr-5"
                        src="../public/icons/globe.png" alt="webSite"
                    />
                    Website
                </a>
            </div>
        </div>
    </Box>
)

