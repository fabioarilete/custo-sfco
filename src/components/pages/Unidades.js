import { useLocation } from "react-router-dom";
import styles from "./Unidades.module.css";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function Unidades() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.unidadesContainer}>
      <div className={styles.titleContainer}>
        <h1>Unidades</h1>
        <LinkButton to="/unidades" text="Cadastrar unidades" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Unidades.....</p>
      </Container>
    </div>
  );
}
