import{Box}from'./'

import{ImProfile}from'react-icons/im'
import{
    FaGithub,
    FaLinkedin,
    FaGlobe,
    FaEnvelope
}from'react-icons/fa'

export const Links = () => (
    <Box>
        <div className="flex flex-col gap-5 p-5">
            <div>
                <a 
                    href="https://github.com/eduardo-sdev" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex gap-5 items-center hover:underline"
                >
                    <FaGithub color="#887c9c"/>
                    eduardo-sdev
                </a>
            </div>
            <div>
                <a 
                    href="https://www.linkedin.com/in/esi01" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex gap-5 items-center hover:underline"
                >
                    <FaLinkedin color="#887c9c"/>
                    Eduardo silva
                </a>
            </div>
            <div>
                <a 
                    href="http://" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex gap-5 items-center hover:underline"
                >
                    <ImProfile color="#887c9c"/>
                    Currículo
                </a>
            </div>
            <div>
                <a 
                    href="mailto:eduardosilvaprogramador@gmail.com" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex gap-5 items-center hover:underline"
                >
                    <FaEnvelope color="#887c9c"/>
                        email
                </a>
            </div>
            <div>
                <a
                    href="http://" 
                    target="_blank" rel="noopener noreferrer"
                    className="flex gap-5 items-center hover:underline"
                >
                    <FaGlobe color="#887c9c"/>
                    eduardo-sdev.github.io
                </a>
            </div>
        </div>
    </Box>
)

