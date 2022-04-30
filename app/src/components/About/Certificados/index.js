import './certificados.css'

import api from '../../../services/api';

import React, {useEffect} from 'react';

import { PortfolioContext } from '../../../contexts/portfolio';
import { useContext } from 'react';

export default function Certificados(){

  const { certificados, setCertificados } = useContext(PortfolioContext);

  useEffect(() => {
    async function loadApi(){
      const response = await api.get('certificados')

      setCertificados(response.data);
    }

    loadApi();
  },[]); 

  return(
    <div>
      <h1 align='center'>Certificados</h1> 
      <div className="container_certificados" >
    
    {certificados.map(certificado => ( 
      <li key={certificado.id}>
        <strong>{certificado.title}</strong>
        <img src={certificado.image} alt={certificado.title} href={certificado.site} />
      </li>
    ))}

    

 
  </div>
    </div>
  

  )
}