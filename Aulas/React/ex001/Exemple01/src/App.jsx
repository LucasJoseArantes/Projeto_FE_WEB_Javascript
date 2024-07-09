import React from 'react'
import Present from "./componets/Present";
import "./css/main.css";

function App() {
  return (
      <div className='main-container'>
        <Present title="Serviços e Informações" description="Selecione o assunto desejado" />
        <Present title="Sistemas" description="Selecione o sistema desejado" />
        <Present title="Programas e Projetos" description="Selecione o assunto desejado" />
        <Present title="Programas e Projetos" description="Selecione o assunto desejado" />
        <Present title="Conheça o IFTM" description="Conheça a história, organograma, unidades e cursos oferecidos" />
        <Present title="Acesso à Informação" description="Veja dados de transparência e governança" />
        <Present title="Centrais de Conteúdo" description="Acesse aplicativos, fotos, publicações e vídeos do IFTM" />
        <Present title="Ouvidoria" description="Você pode realizar manifestações nos seguintes canais" />
        <Present title="e-MEC" description="Consulte aqui o cadastro do IFTM no sistema e-MEC" />
      </div>

  )
}

export default App;