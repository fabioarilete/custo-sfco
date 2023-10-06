import { useEffect, useState } from "react";

import Input from "../form/Input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./CustoForm.module.css";
import RadioButtons from "../form/RadioButtons.js";

export default function CustoForm({ handleSubmit, btnText, produtoData }) {
  const [embalagens, setEmbalagens] = useState([]);
  const [produto, setProduto] = useState(produtoData || {});

  useEffect(() => {
    fetch("http://localhost:5000/embalagens", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setEmbalagens(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(produto);
  };

  function handleChange(e) {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  }

  function handleGroup(e) {
    setProduto({
      ...produto,
      unit: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Código do produto"
        name="productId"
        placeholder="Insira o código do produto"
        handleOnChange={handleChange}
        value={produto.productId ? produto.productId : ""}
      />

      <Input
        type="text"
        text="Descrição do produto"
        name="name"
        placeholder="Insira a descrição do produto"
        handleOnChange={handleChange}
        value={produto.name ? produto.name : ""}
      />

      <Select
        name="embalagemId"
        text="Selecione a embalagem de Produto"
        options={embalagens}
        handleOnChange={handleGroup}
        value={produto.unit ? produto.unit.id : ""}
      />

      <Input
        type="number"
        text="Quantidade na embalagem"
        name="qt"
        placeholder="Insira a quantidade na embalagem Master"
        handleOnChange={handleChange}
        value={produto.qt ? produto.qt : ""}
      />

      <RadioButtons
        text="Substituição Tributária: "
        value={produto.st}
        name="st"
        label1="Sim"
        label2="Não"
        handleOnChange={handleChange}
      />

      <RadioButtons
        text="Tipo do Produto: "
        value={produto.tipo}
        name="tipo"
        label1="Produzido"
        label2="Comprado"
        handleOnChange={handleChange}
      />

      <RadioButtons
        text="São Francisco x Santa Tereza"
        value={produto.simples}
        name="simples"
        label1="Sim"
        label2="Não"
        handleOnChange={handleChange}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
