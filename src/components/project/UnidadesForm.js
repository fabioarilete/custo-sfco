import { useState } from "react";

import Input from "../form/Input.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./UnidadesForm.module.css";

export default function UnidadesForm({ handleSubmit, btnText, unitData }) {
  const [unit, setUnit] = useState(unitData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(unit);
  };

  function handleChange(e) {
    setUnit({ ...unit, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Descrição da Unidade"
        name="name"
        placeholder="Descreva a unidade"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Fator"
        name="fator"
        placeholder="Informe o fator da Unidade"
        handleOnChange={handleChange}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
