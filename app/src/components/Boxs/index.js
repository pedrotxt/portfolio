
// import {MdFlightTakeoff} from 'react-icons/md';

import './box.css';
import api from '../../services/api';

import React, { useEffect} from 'react';

import { PortfolioContext } from '../../contexts/portfolio';
import { useContext } from 'react';

export default function Box() {

  const { portfolios, setPortfolios, handleAdd } = useContext(PortfolioContext);

  useEffect(() => {
    async function loadApi(){
      const response = await api.get('projetos')

      setPortfolios(response.data);
    }

    loadApi();
  },[setPortfolios]); 

 return (
   <div className='container_box' id='portfolio'>

     <h1 className='h1_projetos'>Projetos</h1>
     <div className='box'>
       
       {portfolios.map(portfolio => (

         <li key={portfolio.id} onClick={() => handleAdd(portfolio)}>

           <img src={portfolio.image} alt={portfolio.title} />
           <div className='titulo'>{portfolio.title}</div>
           <div className='descricao'>{portfolio.codigo}</div>

         </li>

       ))}

     </div>
  
   </div>
 );
}


