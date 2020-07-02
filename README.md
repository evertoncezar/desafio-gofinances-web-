# desafio-gofinances-web-

<p align="center">
  <img src=https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67>
</p>

<center><h1><strong>Projeto React com TypeScript - GoFinances Web</strong></h1></center>

<p align="center">
  <img src="https://img.shields.io/badge/tech-Back--end-brown">
  <img src="https://img.shields.io/badge/framework-NodeJS-green">
  <img src="https://img.shields.io/badge/framework-TypeScript-blue">
  <img src="https://img.shields.io/badge/source-Rocketseat-blueviolet">
</p>

<center><h2># desafio-gofinances-web-</h2></center>
<center><p>Desafio do Bootcamp GoStack - Desafio 07: GoFinances Web</p></center>




<center><h1>Funcionalidades da aplicação</h1></center>
<p>
Essa será uma aplicação que deve armazenar transações financeiras (GoFinances) de entrada e saída e permitir o cadastro e a listagem dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo csv.<p>
<p>Essa será uma aplicação que irá se conectar ao seu backend do <a href="https://github.com/evertoncezar/desafio-database-upload"> Desafio 06</a>, e exibir as transações criadas e permitir a importação de um arquivo CSV para gerar novos registros no banco de dados.</p>
<ul>
    <li><strong>Listar as transações da sua API:</strong> Sua página Dashboard, você deve exibir o balance que é retornado do seu backend, contendo o total geral, junto ao total de entradas e saídas.
    </li>
    <li><strong>GET /transactions:</strong> Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor da soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto o seguinte formato:
    </li>
    <li><strong>Importar arquivos CSV :</strong> Na sua página Import, você deve permitir o envio de um arquivo no formato csv para o seu backend, que irá fazer a importação das transações para o seu banco de dados. O arquivo csv deve seguir o seguinte, deve seguir o seguinte modelo:
    <div ><pre>{
      title           type    value   category
      Loan            income  1500    Others
      Website Hosting outcome   50    Others
      Ice cream       outcome   3     Food
    }</pre></div>
    </li>
</ul>

<center><h2>Específicação dos testes</h2></center>
<p>Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.</p>
<p>Para esse desafio temos os seguintes testes:</p>
<p><strong> ATENÇÃO </strong> Antes de rodar os testes, crie um banco de dados com o nome "gostack_desafio06_tests" para que todos os testes possam executar corretamente</p>

<ul>
    <li><strong>should be able to list the total balance inside the cards:</strong> Para que esse teste passe, sua aplicação deve permitir que seja exibido na sua Dashboard, cards contendo o total de <strong>income</strong>, <strong>outcome</strong> e o total da subtração de <strong>income - outcome</strong> que são retornados pelo balance do seu backend.</li></p>
    <li><strong>should be able to list the transactions:</strong>  Para que esse teste passe, sua aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do seu backend.</li></p>
    <li><strong>should be able to navigate to the import page:</strong> Para que esse teste passe, você deve permitir a troca de página através do Header, pelo botão que contém o nome <strong>Importar</strong></li></p>
    <li><strong>should be able to upload a file:</strong> Para que esse teste passe, você deve permitir que um arquivo seja enviado através do componente de drag-n-drop na página de <strong>import</strong>, e que seja possível exibir o nome do arquivo enviado para o input.</li></p>
</ul>


<center><h2>Procedimentos para utilização do repositório</h2></center>

<ul>
    <li>
        <h3>clone o repositório </h3>
        <p>git clone link</p>
    </li>
    <li>
        <h3>navegue até o repositório clonado </h3>
        <p>cd desafio-gofinances-web- </p>
    </li>
        <li>
        <h3>instale as dependências </h3>
        <p>yarn</p>
    </li>
    </li>
    <li>
        <h3>executar testes </h3>
        <p>yarn test</p>
    </li>
    <li>
        <h3>rodar a aplicação </h3>
        <p>yarn dev:server</p>
    </li>
    <li>
        <h3>para um experiencia completa de uso desse repositório</h3>
        <p>clone o repositório <a href="https://github.com/evertoncezar/desafio-database-upload"> do desafio de Projeto Node.js com TypeScript - Banco de dados e upload de arquivos no Node.js </a></p>
    </li>
</ul>


<p>Avalie o repositório com uma ⭐ para que mais devs possam vê-lo!</p>


<p>by <a href="https://www.linkedin.com/in/everton-c%C3%A9zar-3763a133/">Everton Cézar</a> !</p>

