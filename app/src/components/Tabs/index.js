
import "./tabs.css";

import About from "../About";

import { PortfolioContext } from '../../contexts/portfolio';
import { useContext } from 'react';

function Tabs() {

  const { toggleState, setToggleState } = useContext(PortfolioContext);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (

    
    <div className="container-tabs" >



      <div className="wave_fundo">
        
      <h1 className="title-tabs" >Sobre mim</h1>
      <div className="bloc-tabs">
        <div className="style_cima">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Resumo
        </button>

        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Skills
        </button>

        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Faculdade
        </button>
        </div>
        </div>

        <div className="bloc-tabs">
        <div className="style_baixo">
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Certificados
        </button>

        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Experiencia
        </button>

        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Interesse
        </button>
        </div>
        
        </div>
        
        </div>
        
      <div className="content-tabs">
        
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
      
         <About />      
        </div>


        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <About /> 
        </div>
        
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         <About /> 
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
         <About /> 

          <div className='resumo'>
            <strong className="resumo_title" > Resumo de aprendizado nos cursos/bootcamp:</strong>
            <p className='resumo_strong'> 
      ▪ Desenvolvendo aplicações de alto nível do básico ao avançado; <br/> <br/>
      ▪ Projetos com React.JS utilizando e trabalhando em cima de conceitos de componente, jsx, fragment, hooks, 
requisições http, rotas, styled-component, context api, redux, redux-saga; <br/> <br/>
      ▪ Utilização do firebase para integrar aplicação ao banco de dados; <br/> <br/>
      ▪ Uso de Javascript para o back-end das aplicações. <br/> <br/>
      ▪ Utilização do Typescript para acesso a recursos do Javascript + recursos adicionais próprios. <br/> <br/>
            </p>
          </div>
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
         <About /> 
        </div>

        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
         <About /> 
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#233464" d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,213.3C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    

    </div>
  );
}

export default Tabs;