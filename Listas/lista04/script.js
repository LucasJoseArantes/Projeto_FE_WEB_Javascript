window.addEventListener('load', () => { // Quando a página é carregada
  var language = 'pt-br'; // Define o idioma para 'pt-br'

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


  function exibirFilmes(fil mes) {


    filmes.slice(0, 10).forEach((filme, index) => { // Itera sobre os 10 primeiros filmes
      var containerFilme = document.createElement('div'); // Cria um elemento div para conter as informações do filme
      containerFilme.classList.add('filme-container'); // Adiciona uma classe 'filme-container' ao container do filme

      var containerInfo = document.createElement('div'); // Cria um elemento div para conter as informações do filme
      containerInfo.classList.add('filme-info'); // Adiciona uma classe 'filme-info' ao container de informações

      var containerRanting = document.createElement('div'); // Cria um elemento div para conter a posição do filme
      containerRanting.classList.add('filme-ranting-container'); // Adiciona uma classe 'filme-ranting-container' ao container de posição

      var boxFilmes = document.getElementById('box-filmes'); // Obtém o elemento com o ID 'box-filmes'

      var filmeRank = document.createElement('h1'); // Cria um elemento h1 para exibir a posição do filme
      var filmeRankBox = document.createElement('div'); // Cria um elemento div para conter o h1 de posição
      filmeRankBox.classList.add('filme-rank'); // Adiciona uma classe 'filme-rank' ao h1 de posição
      filmeRank.textContent = `${index + 1}`; // Define o texto com o rank do filme
      filmeRankBox.appendChild(filmeRank); // Adiciona o h1 de posição ao container de posição

      var tituloFilme = document.createElement('h2'); // Cria um elemento h2 para exibir o título do filme
      tituloFilme.classList.add('filme-titulo'); // Adiciona uma classe 'filme-titulo' ao h2 de título
      tituloFilme.textContent = filme.title; // Define o texto com o título do filme

      var imagemFilmeBox = document.createElement('div'); // Cria um elemento img para exibir a imagem do filme
      imagemFilmeBox.classList.add('filme-imagem-box'); // Adiciona uma classe 'filme-imagem-box' ao container de imagem
      var imagemFilme = document.createElement('img'); // Cria um elemento img para exibir a imagem do filme
      var urlImagem = `https://image.tmdb.org/t/p/w500`; // URL base para as imagens
      var urlImgFilme = urlImagem + filme.poster_path

      imagemFilmeBox.setAttribute('style', `background-image: url(${urlImgFilme}) , background-size: cover`); // Define o atributo src com o URL da imagem do filme


      imagemFilme.setAttribute('src', urlImgFilme); // Define o atributo src com o URL da imagem do filme
      imagemFilme.classList.add('filme-imagem'); // Adiciona uma classe 'filme-imagem' ao elemento de imagem
      imagemFilmeBox.appendChild(imagemFilme); // Adiciona o elemento de imagem ao container de imagem


      var resumoFilme = document.createElement('p'); // Cria um elemento p para exibir o resumo do filme
      resumoFilme.classList.add('filme-resumo'); // Adiciona uma classe 'filme-resumo' ao p de resumo
      resumoFilme.textContent = (filme.overview.trim() === '') ? geraResumo() : (filme.overview.length > 500 ? filme.overview.substring(0, 500) + '...' : filme.overview);
      resumoFilme.classList.add('filme-resumo'); // Adiciona uma classe 'filme-resumo' ao p de resumo

      var generosFilme = document.createElement('p'); // Cria um elemento p para exibir os gêneros do filme
      generosFilme.classList.add('filme-generos'); // Adiciona uma classe 'filme-generos' ao p de gêneros
      generosFilme.textContent = `Gêneros: ${getGenres(filme.genre_ids)}`; // Define o texto com os gêneros do filme

      var dataFilmeBox = document.createElement('div'); // Cria um elemento div para conter a data de lançamento do filme
      dataFilmeBox.classList.add('filme-data-box'); // Adiciona uma classe 'filme-data-box' ao container de data
      var dataFilme = document.createElement('p'); // Cria um elemento p para exibir a data de lançamento do filme
      dataFilme.classList.add('filme-data'); // Adiciona uma classe 'filme-data' ao p de data
      const partesData = filme.release_date.split("-"); // Divide a data de lançamento em partes
      const dataFormatada = partesData[2] + "/" + partesData[1] + "/" + partesData[0]; // Formata a data no formato dd/mm/yyyy
      dataFilme.textContent = `Data de Lançamento: ${dataFormatada}`; // Define o texto com a data de lançamento formatada
      dataFilmeBox.appendChild(dataFilme); // Adiciona o p de data ao container de data

      var notaFilme = document.createElement('div'); // Cria um elemento p para exibir a nota do filme
      notaFilme.classList.add('filme-nota'); // Adiciona uma classe 'filme-nota' ao p de nota
      var notaFormatada = filme.vote_average.toFixed(2); // Formata a nota do filme para duas casas decimais
      notaFilme.innerHTML = `<h3> Nota: ${notaFormatada} </h3><p> (Votos: ${filme.vote_count}) </p>`; // Define o texto com a nota do filme, arredondada para duas casas decimais

   

      var estrelas = gerarEstrelas(notaFormatada);

      containerInfo.appendChild(tituloFilme); // Adiciona o elemento de título ao container do filme
      containerInfo.appendChild(resumoFilme); // Adiciona o elemento de resumo ao container do filme

      containerFilme.appendChild(filmeRankBox); // Adiciona o elemento de posição ao container do filme
      containerFilme.appendChild(imagemFilmeBox); // Adiciona o elemento de imagem ao container do filme
      containerFilme.appendChild(containerRanting); // Adiciona o container de nota e estrelas ao container do filme
      containerFilme.appendChild(generosFilme); // Adiciona o elemento de gêneros ao container do filme
      containerFilme.appendChild(containerInfo); // Adiciona o container de informações ao container do filme
      containerFilme.appendChild(dataFilmeBox); // Adiciona o elemento de data ao container do filme

      containerRanting.appendChild(notaFilme); // Adiciona o elemento de nota ao container do filme
      containerRanting.appendChild(estrelas); // Adiciona o elemento de estrelas ao container do filme


      boxFilmes.appendChild(containerFilme); // Adiciona o container do filme ao elemento com o ID 'box-filmes'


    });
  }

  const gerarEstrelas = (notaFilme) => {
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

  const geraResumo = () => 'Não há sinopse dispnível';

  const getGenres = (genreIds) => {
    var genreMap = {
      28: 'Ação',
      12: 'Aventura',
      16: 'Animação',
      35: 'Comédia',
      80: 'Crime',
      99: 'Documentário',
      18: 'Drama',
      10751: 'Família',
      14: 'Fantasia',
      36: 'História',
      27: 'Terror',
      10402: 'Música',
      9648: 'Mistério',
      10749: 'Romance',
      878: 'Ficção Científica',
      10770: 'Cinema TV',
      53: 'Thriller',
      10752: 'Guerra',
      37: 'Faroeste'
    };

    var genres = genreIds.map(id => {
      return genreMap[id];
    });

    return genres.join(', ');
  }

});
