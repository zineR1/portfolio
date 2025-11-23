import styles from "./Header.module.css";
import brandLogo from "../../assets/ziner1.png";
import { Navbar } from "../../shared";

const Header = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.imagelogo}
        src={brandLogo}
        alt="logo"
        height="30px"
        width="135px"
      />
      <Navbar />
      <div className="flex flex-row items-center gap-[20px]">
        <select className={styles.select} onChange={() => {}}>
          <option value="en">English</option>
          <option value="es">Español (coming soon)</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
