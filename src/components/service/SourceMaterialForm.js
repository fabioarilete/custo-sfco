import { useEffect, useState } from "react";
import { parse, v4 as uuidv4 } from "uuid";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import Select from "../form/Select";

import styles from "../project/CustoForm.module.css";
import formatCurrency from "../../utils/formatCurrency";

export default function SourceMaterialForm({
  handleSubmit,
  btnText,
  produtoData,
}) {
  const [listaMateriais, setListaMateriais] = useState([]);
  const [material, setMaterial] = useState({ uuid: uuidv4() });

  useEffect(() => {
    fetch("http://localhost:5000/listaMateriais", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setListaMateriais(data);
      })
      .catch((e) => console.log(e));
  }, []);

  function submit(e) {
    e.preventDefault();
    const _material = listaMateriais.find((item) => item.id === material.id);
    handleSubmit({
      ...material,
      ..._material,
      formattedPrice: formatCurrency(parseFloat(_material.price), "BRL"),
    });
  }

  function handleChange(index, value) {
    setMaterial((state) => ({
      ...state,
      [index]: value,
    }));
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Select
        name="id"
        text="Escolha o material a ser utilizado"
        options={listaMateriais}
        handleOnChange={(event) =>
          handleChange("id", parseInt(event.target.value))
        }
        value={material.id}
      />

      <Input
        type="text"
        text="Observação"
        name="obs"
        placeholder="Faça uma observção"
        handleOnChange={(event) => handleChange("obs", event.target.value)}
      />
      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Quantidade"
        name="qt"
        placeholder="Informe a quantidade"
        handleOnChange={(event) =>
          handleChange("qt", parseFloat(event.target.value))
        }
      />

      <div></div>
      <SubmitButton text={btnText} />
    </form>
  );
}
