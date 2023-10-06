import styles from "./CustoProduto.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import CustoForm from "../project/CustoForm";
import Message from "../layout/Message";
import SourceMaterialForm from "../service/SourceMaterialForm";
import MaterialCard from "../service/MaterialCard";
import formatCurrency from "../../utils/formatCurrency";

export default function CustoProduto() {
  const { id } = useParams();

  const [produto, setProduto] = useState({ materiais: [] });
  const [materiais, setMateriais] = useState([]);
  const [materiaisCadastrados, setMateriaisCadastrados] = useState([]);
  const [showCustoForm, setShowCustoForm] = useState(false);
  const [showSourceMaterialForm, setShowSourceMaterialForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  const totalMateriaPrima = useMemo(() => {
    if (!produto.materiais.length) {
      return formatCurrency(0, "BRL");
    }

    const total = produto.materiais.reduce((carry, item) => {
      const subTotal = item.price * item.qt;
      return carry + subTotal;
    }, 0);
    return formatCurrency(total, "BRL");
  }, [produto.materiais]);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/listaMateriais/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMateriais(data);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/produtos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProduto({
            ...data,
            materiais: data.materiais.map((item) => ({
              ...item,
              formattedPrice: formatCurrency(parseFloat(item.price), "BRL"),
            })),
          });
          setMateriaisCadastrados(data.materiais);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, [id]);

  function editPost(produto) {
    setMessage("");

    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduto(data);
        setShowCustoForm(false);
        setMessage("Custo Atualizado!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function AddMaterial(material) {
    setMessage("");

    console.log(material);

    const lastCustoMaterial =
      parseFloat(material.price) * parseFloat(material.qt);

    const _produto = {
      ...produto,
      materiais: [...produto.materiais, material],
      subTotalMateriais: produto.subTotalMateriais + lastCustoMaterial,
      custoMaster: produto.custoMaster + lastCustoMaterial,
    };

    fetch(`http://localhost:5000/produtos/${produto.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_produto),
    })
      .then((res) => {
        res.json();
        setProduto(_produto);
      })
      .then((data) => {
        setShowSourceMaterialForm(false);
        setMessage("Material adicionado com sucesso!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function removeMaterial(uuid) {
    const _produto = {
      ...produto,
      materiais: produto.materiais.filter((item) => item.uuid !== uuid),
    };

    fetch(`http://localhost:5000/produtos/${produto.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_produto),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduto(_produto);
        setMessage("Material removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  function toggleCustoForm() {
    setShowCustoForm(!showCustoForm);
  }

  function toggleSourceMaterialForm() {
    setShowSourceMaterialForm(!showSourceMaterialForm);
  }

  return (
    <>
      {produto.name ? (
        <div className={styles.custoDetails}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.detailsContainer}>
              <h1>
                Produto: {produto.productId} - {produto.name}
              </h1>
              <button className={styles.btn} onClick={toggleCustoForm}>
                {!showCustoForm ? "Editar Custo" : "Fechar"}
              </button>
              {!showCustoForm ? (
                <div className={styles.custoInfo}>
                  <p>
                    <span>Custo Embalagem Master:</span> R${" "}
                    {formatCurrency(produto.custoMaster, "BRL")}
                  </p>
                  <p>
                    <span>Custo Unitário:</span> R${" "}
                    {formatCurrency(produto.custoMaster / produto.qt, "BRL")}
                  </p>
                </div>
              ) : (
                <div className={styles.custoInfo}>
                  <CustoForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    produtoData={produto}
                  />
                </div>
              )}
            </div>

            <div className={styles.serviceFormContainer}>
              <h2>Adicione matéria-prima à seu produto:</h2>
              <button className={styles.btn} onClick={toggleSourceMaterialForm}>
                {!showSourceMaterialForm ? "Adicionar matéria-prima" : "Fechar"}
              </button>
              <div className={styles.custoInfo}>
                {showSourceMaterialForm && (
                  <SourceMaterialForm
                    handleSubmit={AddMaterial}
                    btnText="Adicionar material"
                    produtoData={produto}
                  />
                )}
              </div>
            </div>
            <h2>Matérias-Primas</h2>
            <Container customClass="start">
              {produto.materiais.map((material) => (
                <MaterialCard
                  material={material}
                  handleRemove={removeMaterial}
                />
              ))}
              {produto.materiais.length === 0 && (
                <p>Não há materiais cadastrados!</p>
              )}
            </Container>
            <div className={styles.materialCardTotal}>
              <p>
                <span>Valor total matéria-prima ... {totalMateriaPrima}</span>
              </p>
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
