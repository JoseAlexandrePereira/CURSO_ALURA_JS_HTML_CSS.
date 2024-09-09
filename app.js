function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
  
    if(!campoPesquisa){
     
      section.innerHTML = "<p style='color: white; font-size: 25px;'>Nada foi encontrado. Digite nome ou esporte praticado pelo atleta.</p>"
     return;

    }

    campoPesquisa =  campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item (dado) da lista de dados (assumindo que 'dados' seja um array)
    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase();

      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ||tags.includes(campoPesquisa)){

        // Cria uma nova div para cada resultado, formatando o HTML com template literals.
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;

      }
      
    }

    if (!resultados) {
      resultados = "<p style='color: white; font-size: 25px;'>Nada foi encontrado</p>";
  }
  
    // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }
  
