import './chamados.css';

export default function ProjetoChamados(){
  return(
  <div className="container_chamados" >

<p  align="center">  
Um Sistema de Chamados para Cadastro e o Monitoramento dos chamados!
</p>

<div align="center">
	<h3>Status do Projeto</h3>
	<p>✔️ Concluido</p>
</div>

<h2 > Features 📰 </h2>

| Usuário <br/>
-   Login <br/>
-   Cadastro <br/> <br/>

- Login automatico caso a última sessão for com login válido <br/> <br/>
- Rotas protegidas <br/> <br/>
- Barra lateral com sua foto de perfil <br/> <br/>

| Home  <br/> 

  - Histórico de chamados por data <br/>
    -- Cliente <br/>
    -- Assunto <br/>
    -- Status <br/>
    -- Data de cadastro <br/>
    -- Botão para abrir detalhes <br/>
    -- Botão para editar detalhes <br/> 
   
  - Fazer um novo chamado <br/>
    -- Selecionar o Cliente do chamado <br/>
    -- Selecionar o Assunto do chamado <br/>
    -- Selecionar o Satus do chamado <br/>
    -- Complemento(opcional) <br/>
    -- Botão para registrar o chamado <br/>
  
  - Botão para buscar mais chamados <br/> <br/>

| Criar novos Clientes <br/> 
  - Inserir nome da Empresa <br/>
  - Inserir CNPJ da Empresa <br/>
  - Inserir endereço da empresa <br/>
  - Botão para cadastrar <br/> <br/>

| Configurações <br/>
  - Botão para trocar foto de perfil <br/>
  - Trocar nome de Usuario <br/>
  - Email criado <br/>
  - Botão para salvar <br/>
<div> 

</div>

<h2> Tecnologias 🛠 </h2>

As seguintes ferramentas foram usadas na construção deste projeto:

<br />
- React <br/>
- Firebase <br/>
- React Router<br/>
- React Icons <br/>
- React Toastify <br/>
- Date FNS
<br/>

<div align='center'>
<h2>Telas do Projeto</h2>
<h3>Tela Login</h3>
<img src='https://i.imgur.com/47o5phH.png' alt='Tela Login'/> <br/>

<h3>Tela Home</h3>
<img src='https://i.imgur.com/VftiJyb.png' alt='Tela Home'/> <br/>

<h3>Tela Novo/Edição de Chamados</h3>
<img src='https://i.imgur.com/VftiJyb.png' alt='Tela Edição de Chamados'/> <br/>

<h3>Tela Novo Cliente</h3>
<img src='https://i.imgur.com/0dpRt6N.png' alt='Tela Novo Cliente'/> <br/>

<h3>Tela Configurações</h3>
<img src='https://i.imgur.com/KSqhlbB.png' alt='Tela Configuração'/> <br/>
</div>
  </div>
  )
}