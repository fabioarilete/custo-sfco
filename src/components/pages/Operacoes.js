import { useLocation } from "react-router-dom";
import styles from "./Operacoes.module.css";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function Operacoes() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.operacoesContainer}>
      <div className={styles.titleContainer}>
        <h1>Operações</h1>
        <LinkButton to="/operacoes" text="Cadastrar operações" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Operacções.....</p>
      </Container>
    </div>
  );
}
