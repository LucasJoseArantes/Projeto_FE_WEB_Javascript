window.addEventListener('load', () => {

        language = 'pt-br';

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmU4NTg2MmZmYWNiYmEyMjNlZTZhYzVlMTJiYmZhMiIsInN1YiI6IjY1ZmI3ZGViMDQ3MzNmMDE0YWU1ZWNiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sqAUw2Dr1UG9XQ9ECevhF-PK1PL7BkFtpxUAE76a98Q'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/popular?language=${language}r&page=1`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

           
    

    function exibirFilmes(filmes) {
        filmes.forEach(filme => {
            var containerFilme = document.createElement('div');
            var tituloFilme = document.createElement('p');
            
            tituloFilme.textContent = filme.title;

            var imagemFilme = document.createElement('img');
            var urlImagem = `https://image.tmdb.org/t/p/w500`;
            imagemFilme.setAttribute('src', urlImagem + filme.poster_path);



            containerFilme.appendChild(tituloFilme);

            document.getElementById('box-filmes').appendChild(containerFilme);
        });
    }
    
});