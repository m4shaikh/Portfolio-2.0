import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NavIconProps {
    icon:IconDefinition;
    label:string;
    onClick ?: () => void;
}

const NavIcons = ({icon,label,onClick}:NavIconProps) => {
    return (

        <div onClick={onClick} className="group p-4 relative flex h-6 w-16 items-center justify-center cursor-pointer">
            <FontAwesomeIcon
                icon={icon}
                className="absolute text-[20px] transition-opacity duration-200 group-hover:opacity-0"
            />

            <span className="absolute opacity-0 font-label transition-opacity duration-200 group-hover:opacity-100 text-xs text-orange-600">
                {label}
            </span>
        </div>

    )
}

export default NavIcons