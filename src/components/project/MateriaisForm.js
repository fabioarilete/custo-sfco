import { useState, useEffect } from "react";

import Input from "../form/Input";
import RadioButtons from "../form/RadioButtons";
import SubmitButton from "../form/SubmitButton";
import Select from "../form/Select";
import styles from "./MateriaisForm.module.css";

export default function MateriaisForm({ btnText, handleSubmit, materialData }) {
  const [unidades, setUnidades] = useState([]);
  const [material, setMaterial] = useState(materialData || {});

  useEffect(() => {
    fetch("http://localhost:5000/unidades", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUnidades(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit({
      ...material,
      price: parseFloat(material.price),
    });
  };

  function handleChange(e) {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  }

  function handleUnidades(e) {
    setMaterial({
      ...material,
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
        text="Descrição do Material"
        name="name"
        placeholder="Descreva o material"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Valor"
        name="price"
        placeholder="Informe o valor do material"
        handleOnChange={handleChange}
      />

      <Select
        name="unidId"
        text="Selecione a unidade"
        options={unidades}
        handleOnChange={handleUnidades}
        value={material.unit ? material.unit.id : ""}
      />

      <RadioButtons
        text="Tipo de Empresa: "
        value={material.tipoEmpresa}
        name="tipoEmpresa"
        label1="Presumido"
        label2="Simples"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="Frete"
        name="frete"
        placeholder="Informe o % de Frete"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="NF"
        name="nf"
        placeholder="Informe o % de nf"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="Aliquota de ICMS"
        name="icms"
        placeholder="Informe o % de ICMS"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="Aliquota de IPI"
        name="ipi"
        placeholder="Informe o % de IPI"
        handleOnChange={handleChange}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
