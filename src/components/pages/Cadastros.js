import styles from "./Cadastros.module.css";
import LinkButton from "../layout/LinkButton";

export default function Cadastros() {
  return (
    <>
      <div className={styles.cadastroContainer}>
        <div className={styles.title}>
          <h1>Cadastrar</h1>
        </div>

        <div className={styles.cadastros}>
          <div>
            <LinkButton to="/materiais" text="Materiais" />
          </div>
          <div>
            <LinkButton to="/operacoes" text="Operações" />
          </div>
          <div>
            <LinkButton to="/markUps" text="Mark Up" />
          </div>
          <div>
            <LinkButton to="/unidades" text="Unidades" />
          </div>
          <div>
            <LinkButton to="/embalagens" text="Embalagens" />
          </div>
        </div>
      </div>

      <div className={styles.cadastroContainer2}>
        <div className={styles.title2}>
          <h1>Editar Cadastros</h1>
        </div>

        <div className={styles.cadastros2}>
          <div>
            <LinkButton to="/listaMateriais" text="Materiais" />
          </div>
          <div>
            <LinkButton to="/listaOperacoes" text="Operações" />
          </div>
          <div>
            <LinkButton to="/listaMarkUps" text="Mark Up" />
          </div>
          <div>
            <LinkButton to="/listaUnidades" text="Unidades" />
          </div>
          <div>
            <LinkButton to="/listaEmbalagens" text="Embalagens" />
          </div>
        </div>
      </div>
    </>
  );
}
