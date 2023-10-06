import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../img/logo São Francisco.png";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Custos São Francisco" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>

          <li className={styles.item}>
            <Link to="/custos">Custos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cadastros">Cadastros</Link>
          </li>
          <li className={styles.item}>
            <Link to="/gestao">Gestão</Link>
          </li>
          <li className={styles.item}>
            <Link to="/relatorios">Relatórios</Link>
          </li>
          <li className={styles.item}>
            <Link to="/configuracao">Configuração</Link>
          </li>
          <li className={styles.item}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
