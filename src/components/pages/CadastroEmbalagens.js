import { useNavigate } from "react-router-dom";
import styles from "./CadastroUnidades.module.css";
import EmbalagensForm from "../project/EmbalagensForm";

export default function CadastroUnidades() {
  const navigate = useNavigate();
  function createPost(embalagem) {
    fetch("http://localhost:5000/embalagens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(embalagem),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/listaEmbalagens", {
          state: { message: "Emabalagem cadastrada com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className={styles.embalagensContainer}>
        <h1>Cadastro de Embalagens</h1>
        <EmbalagensForm
          handleSubmit={createPost}
          btnText="Cadastrar Embalagem"
        />
      </div>
    </div>
  );
}
