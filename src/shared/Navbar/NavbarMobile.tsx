
import homeIcon from "../../assets/casa2.webp";
import projectsIcon from "../../assets/layer.webp";
import contactIcon from "../../assets/timeline.webp";
import resumeIcon from "../../assets/resume.webp";

const navItems = [
  { label: "Home", icon: homeIcon, path: "/", iconSize: { height: 22, width: 22 } },
  { label: "Projects", icon: projectsIcon, path: "/projects", iconSize: { height: 22, width: 22 } },
  { label: "Contact", icon: contactIcon, path: "/contact", iconSize: { height: 22, width: 22 } },
  { label: "Resume", icon: resumeIcon, path: "/resume", iconSize: { height: 22, width: 19 } },
];

const NavbarMobile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-[0] left-[0] w-full bg-[black] border-t border-[rgb(173,173,173)] flex justify-around items-center h-[70px] z-[9999] pointer-events-auto touch-manipulation select-none">
      {navItems.map(({ label, icon, path, iconSize }) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className="flex flex-col items-center justify-center text-xs text-[white] px-4 py-2 min-w-[70px] min-h-[55px] rounded-md pointer-events-auto"
            >
              <img
                src={icon}
                alt={label.toLowerCase()}
                height={iconSize.height}
                width={iconSize.width}
                className="mb-1"
                loading="lazy"
              />
              {location.pathname === path && label}
            </button>
      ))}
    </nav>
  );
};

export default NavbarMobile;
import { useLocation, useNavigate } from "react-router-dom";
