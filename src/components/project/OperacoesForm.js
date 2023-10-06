import { useState } from "react";

import Input from "../form/Input.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./OperacoesForm.module.css";

export default function OperacoesForm({ handleSubmit, btnText, unitData }) {
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
        text="Descrição da Operação"
        name="name"
        placeholder="Descreva a operação"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Valor da Hora"
        name="valor"
        placeholder="Informe o valor da hora"
        handleOnChange={handleChange}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
