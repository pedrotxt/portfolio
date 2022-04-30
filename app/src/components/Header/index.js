import './header.css';
import {Link} from 'react-scroll'

import React from 'react';

export default function Header(){

  return(
    <div className='container_title'>
      <div className='style_title'>
        
      <h1 className='header_name'>Pedro H Pinheiro</h1>
      <h2 className='style_occupation purple'>Dev Front-End</h2>

 
        <div className="header_btn">
        <Link activeClass="active" to="sobre" spy={true} smooth={true} offset={0} duration={500}><button >Sobre mim</button></Link>
        <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration={500}><button >Portfolio</button></Link>
        <Link activeClass="active" to="contato" spy={true} smooth={true} offset={50} duration={500}><button >Contato</button></Link>


        <a href='Curriculo-Pedro-H-Pinheiro.pdf' download><button>Curriculo</button></a>
      </div>

      
    
      </div>
</div>
   
      

  

  )
}