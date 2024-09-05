import React from 'react';
import SectionOne from './SectionOne/SectionOne';
import Image from './Image/Image';
import Form from './Form/Form';
import Faq from './Faq/Faq';
import './App.css';
import img1 from './assets/img/image 1.png';
import img2 from './assets/img/image 2.png';

function App() {
  return (
    <div className='mainContainer'>
      
      <section className='PortSection' >
        <div className='PortContainer'>
          <SectionOne
            Htext="Crie Landing Pages que realmente convertem os seus usuários"
            Ptext="Utilize o nosso criador automático de Landing Pages. Basta criar uma conta gratuita e escolher o melhor template para o seu negócio."
          >
          </SectionOne>
          <button className='button'>Quero Começar</button>
        </div>
        <Image ImagePath={img1} ImageText="Template criado com a nossa ferramenta" />
      </section>

      <section className='PortSection'>
        <Image ImagePath={img2} ImageText="Portfólio criado com a nossa ferramenta" />
        <div className='PortContainer'>
          <SectionOne
            Htext="Modelos de páginas de destino que irão surpreender os clientes mais exigentes"
            Ptext="Teste os seus produtos, mensagens e outras ideias antes do lançamento para rastrear futuros clientes, otimizar as taxas de conversão e transformar as pessoas engajadas com sua marca."
          />
          <Form />
        </div>
      </section>

      <section>
      <Faq></Faq>
      </section>
    </div>
  );
}

export default App;
