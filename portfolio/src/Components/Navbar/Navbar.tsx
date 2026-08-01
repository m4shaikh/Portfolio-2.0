import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faHome, faScrewdriverWrench, faDiagramProject, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom" // 1. Imported Link from react-router-dom
import NavIcons from "./NavIcons"

const Navbar = () => {
    return (
        <div className="fixed left-0 bottom-0 w-[60px] h-full bg-black z-50"> {/* Added z-50 to ensure navbar stays on top */}
            <div className="flex flex-col h-full w-full items-center justify-between text-secondary-600 text-xs">
                
                {/* Logo - Also linked to Home */}
                <div className="p-4 mt-2">
                    <Link to="/">
                        <img src="logo.png" alt="logo" className="w-[20px] h-[20px] hover:scale-110 transition-transform cursor-pointer" />
                    </Link>
                </div>

                {/* Main Navigation Links */}
                <div className="flex flex-col items-center gap-4">
                    <Link to="/">
                        <NavIcons
                            icon={faHome}
                            label="Home"
                        />    
                    </Link>
                    
                    <Link to="/skills">
                        <NavIcons
                            icon={faScrewdriverWrench}
                            label="Skills"
                        />    
                    </Link>

                    <Link to="/projects">
                        <NavIcons
                            icon={faDiagramProject}
                            label="Projects"
                        />    
                    </Link>

                    <Link to="/contact">
                        <NavIcons
                            icon={faEnvelope}
                            label="Contact"
                        />    
                    </Link>
                </div>

                {/* Social Links */}
                <div className="flex flex-col text-gray-300 items-center gap-4 pb-6 text-[24px]">
                    {/* Replaced divs with anchor tags for external routing */}
                    <a 
                        href="https://github.com/yourusername" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hover:scale-110 hover:text-white cursor-pointer transition-all duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a 
                        href="https://linkedin.com/in/yourusername" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hover:scale-110 hover:text-blue-500 cursor-pointer transition-all duration-200"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar