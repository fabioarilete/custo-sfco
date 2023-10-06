import styles from "./CustoCard.module.css";
import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

export default function CustoCard({
  id,
  productId,
  name,
  unit,
  qt,
  custoMaster,
  custoUnitario,
  handleRemove,
}) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };


  return (
    <div className={styles.custoCard}>
      <h4>
        {productId} - {name}
      </h4>
      <p>
        <span>Embalagem:</span> {unit}
      </p>
      <p>
        <span>Quant.Embalagem:</span> {qt}
      </p>
      <p>
        <span>Custo Embalagem:</span> R$ {custoMaster}
      </p>
      <p>
        <span>Custo Unitário:</span> R$ {custoMaster / qt}
      </p>
      <div className={styles.custoCardActions}>
        <Link to={`/custoProduto/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}
