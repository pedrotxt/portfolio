import './about.css';

import { useContext, useEffect } from 'react';
import { PortfolioContext } from '../../contexts/portfolio';

import api from '../../services/api';


import Certificados from './Certificados';
import Skills from './Skills';
import Faculdade from './Faculdade';
import Experiencia from './Experiencia';
import Resumo from './Resumo';
import Interesses from './Interesses';



export default function About(){

  const { toggleState, sobre, setSobre } = useContext(PortfolioContext);

  

  useEffect(() => {

    async function loadApi(){
     

      const response = await (await api.get('certificados'));

      setSobre(response.data);
      
    }

    loadApi();
  },[]);

  function conteudo(){
    if (toggleState === 1) {
      return <Resumo />
    } else if (toggleState === 2){
      return <Skills />
    } else if (toggleState === 3){
      return <Faculdade />
    } else if (toggleState === 4){
      return <Certificados />
    } else if (toggleState === 5){
      return <Experiencia />
    } else if (toggleState === 6){
      return <Interesses />
    }
  }

  return(
    <div className="container_about">

    

      <li >
        
        {conteudo()}
        
    
      </li>
      
    </div>
  )
}