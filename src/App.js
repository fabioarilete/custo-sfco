import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NovoCusto from "./components/pages/NovoCusto";
import Cadastros from "./components/pages/Cadastros";
import Gestao from "./components/pages/Gestao";
import Relatorios from "./components/pages/Relatorios";
import Configuracao from "./components/pages/Configuracao";
import Login from "./components/pages/Login";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Custos from "./components/pages/Custos";
import Materiais from "./components/pages/Materiais";
import Unidades from "./components/pages/Unidades";
import CadastroUnidades from "./components/pages/CadastroUnidades";
import CadastroMarkUps from "./components/pages/CadastroMarkUps";
import MarkUps from "./components/pages/MarkUps";
import Operacoes from "./components/pages/Operacoes";
import CadastroOperacoes from "./components/pages/CadastroOperacoes";
import CadastroMateriais from "./components/pages/CadastroMateriais";
import CadastroEmbalagens from "./components/pages/CadastroEmbalagens";
import Embalagens from "./components/pages/Embalagens";
import CustoProduto from "./components/pages/CustoProduto";
import Provider from "./context/Provider";

export default function App() {
  return (
    <Provider>
<Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/custos" element={<Custos />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="/materiais" element={<CadastroMateriais />} />
          <Route path="/listaMateriais" element={<Materiais />} />
          <Route path="/unidades" element={<CadastroUnidades />} />
          <Route path="/listaUnidades" element={<Unidades />} />
          <Route path="/embalagens" element={<CadastroEmbalagens />} />
          <Route path="/listaEmbalagens" element={<Embalagens />} />
          <Route path="/operacoes" element={<CadastroOperacoes />} />
          <Route path="/listaOperacoes" element={<Operacoes />} />
          <Route path="/markUps" element={<CadastroMarkUps />} />
          <Route path="/listaMarkUps" element={<MarkUps />} />
          <Route path="/gestao" element={<Gestao />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracao" element={<Configuracao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/novoCusto" element={<NovoCusto />} />
          <Route path="/custoProduto/:id" element={<CustoProduto />} />
        </Routes>
      </Container>

      <Footer />
      
    </Router>
    </Provider>
    
  );
}
