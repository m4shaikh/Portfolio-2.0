import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
    faEnvelope,
    faHome,
    faScrewdriverWrench,
    faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavIcons from "./NavIcons";

const Navbar = () => {
    return (
        <>
            {/* Desktop Sidebar */}

            <aside className="hidden lg:flex fixed left-0 top-0 w-[60px] h-screen bg-black z-50 flex-col items-center justify-between">

                <div className="py-6">
                    <Link to="/">
                        <img
                            src="/logo.png"
                            alt="logo"
                            className="w-6 h-6 hover:scale-110 transition"
                        />
                    </Link>
                </div>

                <nav className="flex flex-col gap-5">
                    <Link to="/">
                        <NavIcons mobile={false} icon={faHome} label="Home" />
                    </Link>

                    <Link to="/skills">
                        <NavIcons mobile={false} icon={faScrewdriverWrench} label="Skills" />
                    </Link>

                    <Link to="/projects">
                        <NavIcons mobile={false} icon={faDiagramProject} label="Projects" />
                    </Link>

                    <Link to="/contact">
                        <NavIcons mobile={false} icon={faEnvelope} label="Contact" />
                    </Link>
                </nav>

                <div className="flex flex-col gap-5 text-xl text-gray-400 pb-6">

                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-500 transition"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                </div>

            </aside>

            {/* Mobile Bottom Navigation */}
 
            <nav className="lg:hidden fixed bottom-0 left-0 w-full h-[60px] h-16 bg-black border-t border-neutral-800 z-50">

                <div className="grid grid-cols-4 h-full">

                    <Link to="/">
                        <NavIcons mobile={true}  icon={faHome} label="Home" />
                    </Link>

                    <Link to="/skills">
                        <NavIcons mobile={true} icon={faScrewdriverWrench} label="Skills" />
                    </Link>

                    <Link to="/projects">
                        <NavIcons mobile={true} icon={faDiagramProject} label="Projects" />
                    </Link>

                    <Link to="/contact">
                        <NavIcons mobile={true} icon={faEnvelope} label="Contact" />
                    </Link>

                </div>

            </nav>
        </>
    );
};

export default Navbar;