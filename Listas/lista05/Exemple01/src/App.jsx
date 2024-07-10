import React from "react";
import Present from "./components/Present";
import ContentBox from "./components/ContentBox";
import RoundButton from "./components/RoundButton";
import "./css/main.css";

function App() {
  return (
    <div className="main-container">
      <section className="content-section">
        <Present
          title="Serviços e Informações"
          description="Selecione o assunto desejado"
        />
        <div className="box-container">
          <ContentBox title="ELEIÇÕES DO CONSELHO SUPERIOR" />
          <ContentBox title="ESTUDE NO IFTM" />
          <ContentBox title="EDITAIS" />
          <ContentBox title="CALENDÁRIOS" />
          <ContentBox title="CERTIFICAÇÕES E DIPLOMAS" />
          <ContentBox title="TRABALHE NO IFTM" />
          <ContentBox title="EDITORA IFTM" />
          <ContentBox title="CONTATOS" />
          <ContentBox title="FALE CONOSCO" />
        </div>
        <RoundButton name="Mais notícias"/>
      </section>


      <section className="content-section">
        <Present
          title="Acesso à Informação"
          description="Veja dados de transparência e governança"
        />
        <div className="box-container">
          <ContentBox title="Plano de Desenvolvimento Institucional" />
          <ContentBox title="Pesquisa Pública Processos IFTM" />
          <ContentBox title="Licitações e Contratos" />
          <ContentBox title="Receitas e Despesas" />
          <ContentBox title="Dados Abertos" />
          <ContentBox title="Transparência e Prestação de Contas" />
          <ContentBox title="Servidores" />
          <ContentBox title="Perguntas Frequentes" />
        </div>
      </section>

      
    </div>
  );
}

export default App;
