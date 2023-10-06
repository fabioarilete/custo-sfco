import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import CustoCard from "../project/CustoCard";

import styles from "./Custos.module.css";

export default function Custos() {
  const [custos, setCustos] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [custoMessage, setCustoMessage] = useState("");

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/produtos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCustos(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removerCusto(id) {
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setCustos(custos.filter((custo) => custo.id !== id));
        setCustoMessage("Custo removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.custoContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus custos</h1>
        <LinkButton to="/novoCusto" text="Criar Novo Custo" />
      </div>
      {message && <Message type="success" msg={message} />}
      {custoMessage && <Message type="success" msg={custoMessage} />}
      <Container customClass="start">
        {custos.length > 0 &&
          custos.map((custo) => (
            <CustoCard
              productId={custo.productId}
              name={custo.name}
              unit={custo.unit.name}
              qt={custo.qt}
              id={custo.id}
              custoMaster={custo.custoMaster}
              custoUnitario={custo.custoUnitario}
              key={custo.id}
              handleRemove={removerCusto}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && custos.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </div>
  );
}
