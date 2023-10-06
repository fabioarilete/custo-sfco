import { FaFacebook, FaInstagram } from "react-icons/fa";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <a href="https://www.facebook.com/sigasaofrancisco" target="blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sigasaofrancisco/" target="blank">
            <FaInstagram />
          </a>
        </li>
      </ul>
      <p className={styles.copyRight}>
        <span>Custos - São Francisco </span>&copy; 2023
      </p>
    </footer>
  );
}
