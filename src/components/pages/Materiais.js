import { useLocation } from "react-router-dom";
import styles from "./Materiais.module.css";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function Materiais() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.materiaisContainer}>
      <div className={styles.titleContainer}>
        <h1>Matéria-Prima</h1>
        <LinkButton to="/materiais" text="Cadastrar matérias-primas" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Materiais.....</p>
      </Container>
    </div>
  );
}
