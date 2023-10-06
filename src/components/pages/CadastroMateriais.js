import { useNavigate } from "react-router-dom";
import styles from "./CadastroMateriais.module.css";
import MateriaisForm from "../project/MateriaisForm";

export default function CadastroMateriais() {
  const navigate = useNavigate();
  function createPost(material) {
    fetch("http://localhost:5000/listaMateriais", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/listaMateriais", {
          state: { message: "Material cadastrado com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className={styles.materiaisContainer}>
        <h1>Cadastro de Matéria Prima</h1>
        <MateriaisForm handleSubmit={createPost} btnText="Cadastrar Material" />
      </div>
    </div>
  );
}
