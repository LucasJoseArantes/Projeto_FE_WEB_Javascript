import React from "react";
import "./css/Main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section01 from "./components/Section01";

function App() {

  const section1BoxContent = [
    { id: 1, img: "https://via.placeholder.com/150", textContent: "ELEIÇÕES DO CONSELHO SUPERIOR" },
    { id: 2, img: "https://via.placeholder.com/150", textContent: "ESTUDE NO IFTM" },
    { id: 3, img: "https://via.placeholder.com/150", textContent: "EDITAIS" },
    { id: 4, img: "https://via.placeholder.com/150", textContent: "CALENDÁRIOS" },
    { id: 5, img: "https://via.placeholder.com/150", textContent: "CERTIFICAÇÕES E DIPLOMAS" },
    { id: 6, img: "https://via.placeholder.com/150", textContent: "TRABALHE NO IFTM" },
    { id: 7, img: "https://via.placeholder.com/150", textContent: "EDITORA IFTM" },
    { id: 8, img: "https://via.placeholder.com/150", textContent: "CONTATOS" },
    { id: 9, img: "https://via.placeholder.com/150", textContent: "FALE CONOSCO" },
  ];

  const section2BoxContent = [
    { id: 1, textContent: "Plano de Desenvolvimento Institucional" },
    { id: 2, textContent: "Pesquisa Pública Processos IFTM" },
    { id: 3, textContent: "Licitações e Contratos" },
    { id: 4, textContent: "Receitas e Despesas" },
    { id: 5, textContent: "Dados Abertos" },
    { id: 6, textContent: "Transparência e Prestação de Contas" },
    { id: 7, textContent: "Servidores" },
    { id: 8, textContent: "Perguntas Frequentes" },
  ];

  return (
    <div>
      <Header />
      <Section01 title="Section Title" subtitle="Lorem Ipmsun" boxContent={section1BoxContent}>
    
      </Section01>

      <Section01 title="Section Title" subtitle="Lorem Ipmsun" boxContent={section2BoxContent}>
        
      </Section01>
      
      <Footer />
    </div>
  );
}

export default App;
