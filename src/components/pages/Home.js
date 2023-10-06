import styles from "./Home.module.css";
import imagem from "../../img/produtos-sfco.jpg";
import LinkButton from "../layout/LinkButton";

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem-vindo ao <span>Custos SFCO</span>
      </h1>
      <p>Comece a gerenciar os custos dos seus produtos!</p>
      <LinkButton to="novoCusto" text="Criar Novo Custo" />
      <img src={imagem} alt="São Francisco - Utensílios de Limpeza" />
    </section>
  );
}
