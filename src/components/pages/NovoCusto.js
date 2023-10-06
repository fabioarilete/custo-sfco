import { useNavigate } from "react-router-dom";
import styles from "./NovoCusto.module.css";
import CustoForm from "../project/CustoForm";

export default function NovoCusto() {
  const navigate = useNavigate();
  function createPost(produto) {
    produto.custoMaster = 0;
    produto.custoUnitario = produto.custoMaster / produto.qt;
    produto.materiais = [];
    produto.subTotalMateriais = 0;
    produto.operacoes = [];
    produto.injectOperacao = [];

    fetch("http://localhost:5000/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/custos", {
          state: { message: "Produto criado com sucesso!" },
        });
      })
      .catch((e) => console.log(e));


  }

  return (
    <div className={styles.novoCustoContainer}>
      <h1>Criar Custo do Produto</h1>
      <p>Crie seu produto para depois adicionar seus componentes.</p>
      <CustoForm handleSubmit={createPost} btnText="Criar Custo" />
    </div>
  );
}
