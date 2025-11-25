import styles from "./Loader.module.css";
import Header from "../Header";
import TopHeader from "../../shared/TopHeader/TopHeader";

const Loader = () => (
	<div className={styles.loaderOverlay}>
		<div className={styles.loaderHeader}>
			<TopHeader />
			<Header />
		</div>
		<div className={styles.loaderCenter}>
			<span className={styles.loader}></span>
		</div>
	</div>
);

export default Loader;
