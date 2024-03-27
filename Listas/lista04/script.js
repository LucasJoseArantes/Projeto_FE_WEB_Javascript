window.addEventListener('load', () => { // Quando a página é carregada
  language = 'pt-br'; // Define o idioma para 'pt-br'

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json', // Aceitar resposta no formato JSON
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmU4NTg2MmZmYWNiYmEyMjNlZTZhYzVlMTJiYmZhMiIsInN1YiI6IjY1ZmI3ZGViMDQ3MzNmMDE0YWU1ZWNiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sqAUw2Dr1UG9XQ9ECevhF-PK1PL7BkFtpxUAE76a98Q'
    }
  };


  fetch(`https://api.themoviedb.org/3/movie/popular?language=${language}r&page=1`, options)
    .then(response => response.json()) // Converte a resposta para JSON
    .then(response => exibirFilmes(response.results)) // Chama a função exibirFilmes passando os resultados como argumento
    .catch(err => console.error(err));


  function exibirFilmes(filmes) {


    filmes.slice(0, 10).forEach((filme, index) => { // Itera sobre os 10 primeiros filmes
      var containerFilme = document.createElement('div'); // Cria um elemento div para conter as informações do filme
      containerFilme.classList.add('filme-container'); // Adiciona uma classe 'filme-container' ao container do filme

      var containerInfo = document.createElement('div'); // Cria um elemento div para conter as informações do filme
      containerInfo.classList.add('filme-info'); // Adiciona uma classe 'filme-info' ao container de informações

      var containerRank = document.createElement('div'); // Cria um elemento div para conter a posição do filme
      containerRank.classList.add('filme-rank-container'); // Adiciona uma classe 'filme-rank-container' ao container de posição

      var boxFilmes = document.getElementById('box-filmes'); // Obtém o elemento com o ID 'box-filmes'

      var filmeRank = document.createElement('h1'); // Cria um elemento h1 para exibir a posição do filme
      var filmeRankBox = document.createElement('div'); // Cria um elemento div para conter o h1 de posição
      filmeRankBox.classList.add('filme-rank'); // Adiciona uma classe 'filme-rank' ao h1 de posição
      filmeRank.textContent = `${index + 1}`; // Define o texto com o rank do filme
      filmeRankBox.appendChild(filmeRank); // Adiciona o h1 de posição ao container de posição

      var tituloFilme = document.createElement('h2'); // Cria um elemento h2 para exibir o título do filme
      tituloFilme.classList.add('filme-titulo'); // Adiciona uma classe 'filme-titulo' ao h2 de título
      tituloFilme.textContent = filme.title; // Define o texto com o título do filme

      var imagemFilme = document.createElement('img'); // Cria um elemento img para exibir a imagem do filme
      imagemFilme.classList.add('filme-imagem'); // Adiciona uma classe 'filme-imagem' ao elemento de imagem
      var urlImagem = `https://image.tmdb.org/t/p/w500`; // URL base para as imagens
      imagemFilme.setAttribute('src', urlImagem + filme.poster_path); // Define o atributo src com o URL da imagem do filme

      var resumoFilme = document.createElement('p'); // Cria um elemento p para exibir o resumo do filme
      resumoFilme.classList.add('filme-resumo'); // Adiciona uma classe 'filme-resumo' ao p de resumo
      if (filme.overview.trim() === '') resumoFilme.textContent = geraResumo();
      else resumoFilme.textContent = filme.overview.substring(0, 300) + '...'; 

      resumoFilme.classList.add('filme-resumo'); // Adiciona uma classe 'filme-resumo' ao p de resumo

      var dataFilme = document.createElement('p'); // Cria um elemento p para exibir a data de lançamento do filme
      dataFilme.classList.add('filme-data'); // Adiciona uma classe 'filme-data' ao p de data
      const partesData = filme.release_date.split("-"); // Divide a data de lançamento em partes
      const dataFormatada = partesData[2] + "/" + partesData[1] + "/" + partesData[0]; // Formata a data no formato dd/mm/yyyy
      dataFilme.textContent = `Data de Lançamento: ${dataFormatada}`; // Define o texto com a data de lançamento formatada

      var notaFilme = document.createElement('p'); // Cria um elemento p para exibir a nota do filme
      notaFilme.classList.add('filme-nota'); // Adiciona uma classe 'filme-nota' ao p de nota
      var notaFormatada = filme.vote_average.toFixed(2); // Formata a nota do filme para duas casas decimais
      notaFilme.textContent = `Nota: ${notaFormatada} `; // Define o texto com a nota do filme, arredondada para duas casas decimais

      var estrelas = gerarEstrelas(notaFormatada);

      containerFilme.appendChild(filmeRankBox); // Adiciona o elemento de posição ao container do filme
      containerFilme.appendChild(imagemFilme); // Adiciona o elemento de imagem ao container do filme
      containerFilme.appendChild(containerInfo); // Adiciona o container de informações ao container do filme

      containerRank.appendChild(notaFilme); // Adiciona o elemento de nota ao container do filme
      containerRank.appendChild(estrelas); // Adiciona o elemento de estrelas ao container do filme
      
      containerInfo.appendChild(tituloFilme); // Adiciona o elemento de título ao container do filme
      containerInfo.appendChild(resumoFilme); // Adiciona o elemento de resumo ao container do filme
      containerInfo.appendChild(dataFilme); // Adiciona o elemento de data ao container do filme
      containerInfo.appendChild(containerRank); // Adiciona o container de nota e estrelas ao container do filme

      boxFilmes.appendChild(containerFilme); // Adiciona o container do filme ao elemento com o ID 'box-filmes'

      console.log(filme);

    });
  }

  function gerarEstrelas(notaFilme) {
    const nota = Math.floor(notaFilme / 2); // Calcula a nota dividida por 2 e arredonda para baixo

    const estrelas = document.createElement('div');
    estrelas.classList.add('estrelas');

    // Limita o número de estrelas a 5
    const numEstrelasTotal = Math.min(Math.ceil(nota), 5);

    // Adiciona estrelas cheias
    for (let i = 0; i < numEstrelasTotal; i++) {
      const estrela = document.createElement('div');
      estrela.classList.add('full-star');
      estrelas.appendChild(estrela);
    }

    // Adiciona estrelas vazias para completar até 5
    for (let i = 0; i < 5 - numEstrelasTotal; i++) {
      const estrela = document.createElement('div');
      estrela.classList.add('empty-star');
      estrelas.appendChild(estrela);
    }

    return estrelas;
  }

  const geraResumo = () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi nec quam accumsan feugiat. Ut rutrum, nisi ac ultricies hendrerit, mi justo pulvinar leo, id ultricies nisi turpis nec purus. Sed vehicula est quis lorem vestibulum, vel porta velit rutrum.';



});
