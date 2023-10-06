import { useMemo } from "react";
import formatCurrency from "../../utils/formatCurrency";
import styles from "../service/MaterialCard.module.css";
import { BsFillTrashFill } from "react-icons/bs";

export default function MaterialCard({ id, material, handleRemove }) {
  const formatterdValue = useMemo(
    () => formatCurrency(material.price * material.qt, "BRL"),
    [material]
  );

  const remove = (uuid) => {
    handleRemove(uuid);
  };

  return (
    <div className={styles.materialCardContainer}>
      <div className={styles.materialCardTitle}>
        <h4>{material.name.toUpperCase()}</h4>
      </div>

      <div className={styles.materialCardItems}>
        <div className={styles.materialCardObs}>
          <p>
            <span>Obs:</span> {material.obs.toUpperCase()}
          </p>
        </div>

        <div className={styles.materialCardQt}>
          <p>
            <span>Quantidade:</span> {material.qt} {material.unit.name}
          </p>
        </div>

        <div className={styles.materialCardUnitPrice}>
          <p>
            <span>Preço do {material.unit.name}:</span>{" "}
            {material.formattedPrice}
          </p>
        </div>

        <div className={styles.materialCardTotalPrice}>
          <p>
            <span>Valor total:</span> {formatterdValue}
          </p>
        </div>

        <div className={styles.materialCardActions}>
          <button onClick={() => remove(material.uuid)}>
            <BsFillTrashFill />
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
