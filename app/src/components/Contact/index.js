import './contact.css'
import {IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp} from 'react-icons/io';
import {SiGmail} from 'react-icons/si';

export default function Contact(){
  return(
    <div className="container_contact" id='contato'>
      <div className='fundo_wave_contact'>
        <h1 className='title_contact'>Contato</h1>
        <br></br>
        <strong>Sinta-se livre para entrar em contato</strong>
        <ul>
          
          <li>
            <a target="_blank"  href='https://www.linkedin.com/in/pedro-henrique-p/'>
            <IoLogoLinkedin color="white" fontSize="60px" />
            </a>
          </li>

          <li>
            <a target="_blank"  href='https://github.com/pedrotxt'>
            <IoLogoGithub color="white" fontSize="60px" />
            </a>
          </li>

          <li>
            <a target="_blank"  href='mailto:pehhp2021@gmail.com'>
            <SiGmail color="white" fontSize="60px" />
            </a>
          </li>

          <li>
            <a target="_blank"  href='https://wa.me/<5511994604459>'>
            <IoLogoWhatsapp color="white" fontSize="60px" />
            </a>
            
          </li>

        </ul>

        Pedro H P Gonçalves
      </div>

      
    </div>
  )
}