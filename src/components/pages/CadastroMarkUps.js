import { useNavigate } from "react-router-dom";
import styles from "./CadastroMarkUps.module.css";
import MarkUpsForm from "../project/MarkUpsForm";

export default function CadastroMarkUps() {
  const navigate = useNavigate();
  function createPost(markUp) {
    fetch("http://localhost:5000/markUps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(markUp),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/listaMarkUps", {
          state: { message: "Mark Up cadastrado com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className={styles.markUpsContainer}>
        <h1>Cadastro de Mark Up</h1>
        <MarkUpsForm handleSubmit={createPost} btnText="Cadastrar Mark Up" />
      </div>
    </div>
  );
}
