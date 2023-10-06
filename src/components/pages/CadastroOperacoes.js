import { useNavigate } from "react-router-dom";
import styles from "./CadastroOperacoes.module.css";
import OperacoesForm from "../project/OperacoesForm";

export default function CadastroOperacoes() {
  const navigate = useNavigate();
  function createPost(operacao) {
    fetch("http://localhost:5000/listaOperacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(operacao),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/listaOperacoes", {
          state: { message: "Operação cadastrada com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className={styles.operacoesContainer}>
        <h1>Cadastro de Operações</h1>
        <OperacoesForm handleSubmit={createPost} btnText="Cadastrar Operação" />
      </div>
    </div>
  );
}
