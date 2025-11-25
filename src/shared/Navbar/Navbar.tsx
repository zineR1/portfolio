import { useAppStore } from "../../store";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import homeIcon from "../../assets/casa2.webp";
import projectsIcon from "../../assets/layer.webp";
import contactIcon from "../../assets/timeline.webp";
import resumeIcon from "../../assets/resume.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isProfileEdited } = useAppStore();

  const buttons = [
    {
      to: "/",
      label: "Home",
      icon: homeIcon,
      iconSize: { height: 22, width: 22 },
    },
    {
      to: "/projects",
      label: "Projects",
      icon: projectsIcon,
      iconSize: { height: 22, width: 22 },
    },
    {
      to: "/contact",
      label: "Contact",
      icon: contactIcon,
      iconSize: { height: 22, width: 22 },
    },
    {
      to: "/resume",
      label: "Resume",
      icon: resumeIcon,
      iconSize: { height: 22, width: 19 },
    },
  ];

  return (
    <div className={styles.container}>
      {!isProfileEdited && (
        <>
          {buttons.map(({ to, label, icon, iconSize }) => (
            <>
              <button
              key={to}
                className={`${styles.btn} ${
                  location.pathname === to ? styles.active : ""
                }`}
                type="button"
                onClick={() => navigate(to)}
              >
                <img
                  src={icon}
                  alt={label.toLowerCase()}
                  height={iconSize.height + "px"}
                  width={iconSize.width + "px"}
                  loading="lazy"
                />
                <p>{label}</p>
              </button>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default Navbar;
