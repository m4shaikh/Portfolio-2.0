import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NavIconProps {
  icon: IconDefinition;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}

const NavIcons = ({
  icon,
  label,
  mobile ,
  onClick,
}: NavIconProps) => {
  if (mobile) {
    return (
      <div
        onClick={onClick}
        className="flex h-full flex-col items-center justify-center gap-1 text-gray-400 transition hover:text-white"
      >
        <FontAwesomeIcon icon={icon} className="text-lg" />
        <span className="font-label text-[10px]">{label}</span>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="group relative text-gray-300 flex h-12 w-[60px] cursor-pointer items-center justify-center"
    >
      <FontAwesomeIcon
        icon={icon}
        className="absolute text-xl transition-all duration-200 group-hover:opacity-0"
      />
      <span className="font-label absolute text-xs text-orange-500 opacity-0 transition-all duration-200 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
};

export default NavIcons;