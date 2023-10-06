import { useLocation } from "react-router-dom";
import styles from "./Embalagens.module.css";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function Embalagens() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.embalagensContainer}>
      <div className={styles.titleContainer}>
        <h1>Embalagens</h1>
        <LinkButton to="/embalagens" text="Cadastrar embalagens" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Embalagens.....</p>
      </Container>
    </div>
  );
}
