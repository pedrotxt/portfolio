import { useState, createContext } from "react";

import Modal from "../components/Modal";

export const PortfolioContext = createContext({});

function TesteProvider({children}){

  const [toggleState, setToggleState] = useState(1);
  const [testeState, setTesteState] = useState(1);

  const [sobre, setSobre] = useState([]);
  const [sobreTitle, setSobreTitle] = useState({});
  const [sobreConteudo, setSobreConteudo] = useState({});

  const [portfolios, setPortfolios] = useState([]);
  const [portfolioTitle, setPortfolioTitle] = useState({});
  const [portfolioOverview, setPortfolioOverview] = useState({});
  const [portfolioLink, setPortfolioLink] = useState({});

  const [certificados, setCertificados] = useState([]);

  const [openFormModal, setOpenFormModal] = useState(false);

  function handleTake(sobres){
      setSobreTitle(sobres.title);
      setSobreConteudo(sobres.conteudo);
      setToggleState(sobres);
  }

  function handleAdd(portfolio){
      setOpenFormModal(true);

      setPortfolioTitle(portfolio.title);
      setPortfolioOverview(portfolio.overview);
      setPortfolioLink(portfolio.site);
  }

  function handleClose(){
    setOpenFormModal(false);
  }

  return(
    <PortfolioContext.Provider value={{ toggleState, setToggleState, portfolios, setPortfolios, testeState, setTesteState, handleAdd ,handleClose, portfolioTitle, portfolioOverview, sobre, setSobre, handleTake, sobreTitle, sobreConteudo, certificados, setCertificados, portfolioLink, setPortfolioLink}}>
      {children}
      { openFormModal && <Modal /> }
    </PortfolioContext.Provider>
  )
}


export default TesteProvider;