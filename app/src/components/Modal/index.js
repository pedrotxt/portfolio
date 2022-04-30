import React, {useEffect} from 'react';

import { PortfolioContext } from '../../contexts/portfolio';
import { useContext } from 'react';

import './modal.css'

import {IoClose} from 'react-icons/io5';
import ProjetoChamados from './ProjetoChamados';
import ProjetoPortfolio from './ProjetoPortfolio';
import ProjetoViagens from './ProjetoViagens';
import ProjetoRepos from './ProjetoRepos';

export default function Modal(){

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
  return () =>{
    document.body.style.overflowY = 'auto';
    
  }
}, []);

  const { portfolioTitle, portfolioLink ,handleClose} = useContext(PortfolioContext);

  function infos(){
    if(portfolioTitle === 'Sistema de Chamados'){
      return <ProjetoChamados />
    }else if(portfolioTitle === 'Portfolio'){
      return <ProjetoPortfolio />
    }else if(portfolioTitle === 'Reserva de Viagens'){
      return <ProjetoViagens />
    } else {
      return <ProjetoRepos />
    }
  }

 

  return (
    <div className='blur'>
    <div className="overlay">
      <div className="modal-container">
      
        <header>
          <strong>{portfolioTitle}</strong>
          <span className='cursor'>
          <IoClose onClick={handleClose}/>
          </span>
        </header>
        
        <div className="overview-container">
          
          <div className="overview-main">

              {infos()}
              
          </div>
          <div className="botao">
          <a target="_blank" href={portfolioLink} >
            <button className="link">
              
             Ir para o site 😺
            
           </button>
           </a>
          </div>
          
        </div>
        
      </div>
      
    </div>
    </div>
    
  );
}