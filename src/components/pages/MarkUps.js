import { useLocation } from "react-router-dom";
import styles from "./MarkUps.module.css";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function MarkUps() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.markUpsContainer}>
      <div className={styles.titleContainer}>
        <h1>Mark Up</h1>
        <LinkButton to="/markUps" text="Cadastrar Mark Ups" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Mark Ups.....</p>
      </Container>
    </div>
  );
}
