import { useState } from "react";

import Input from "../form/Input.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./EmbalagensForm.module.css";

export default function EmbalagensForm({ handleSubmit, btnText, data }) {
  const [embalagem, setEmbalagem] = useState(data || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(embalagem);
  };

  function handleChange(e) {
    setEmbalagem({ ...embalagem, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Tipo de embalagem"
        name="name"
        placeholder="Descreva o tipo da embalagem"
        handleOnChange={handleChange}
      />

      <p>Exemplos: CX - UN - PCT - FX - FD </p>

      <SubmitButton text={btnText} />
    </form>
  );
}
