import { useNavigate } from "react-router-dom";
import styles from "./CadastroUnidades.module.css";
import UnidadesForm from "../project/UnidadesForm";

export default function CadastroUnidades() {
  const navigate = useNavigate();
  function createPost(unit) {
    fetch("http://localhost:5000/unidades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unit),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/listaUnidades", {
          state: { message: "Unidade cadastrada com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className={styles.unidadesContainer}>
        <h1>Cadastro de Unidades</h1>
        <UnidadesForm handleSubmit={createPost} btnText="Cadastrar Unidade" />
      </div>
    </div>
  );
}
