window.addEventListener('load', function() { 
    // Event listener para o evento de mudança do select
    var btn = document.getElementById('btn');
    
    btn.addEventListener('click', function() {
        var arquivo = document.getElementById('select').value;
        console.log(arquivo);
        
        fetch(`${arquivo}.json`)
            .then(response => response.json())
            .then(data => exibirProdutos(data, arquivo)) // Passa os dados e o nome do arquivo para a função exibirProdutos
            .catch(error => {
                console.error('Erro ao carregar JSON:', error);
            });
        });
        
        // Função para exibir os produtos
        function exibirProdutos(produtos, arquivo) {
            var container = document.getElementById('produtos-container');
            var index = 0;
            
            
        // Função para adicionar o próximo produto após um segundo
        function adicionarProximoProduto() {
            if (index < produtos.length) {
                // Limpa o conteúdo existente do container
                container.innerHTML = '';
                // Obtém o próximo produto
                var product = produtos[index];
                
                // Cria os elementos HTML
                var marca = document.createElement('h2');
                var produto = document.createElement('p');
                var valor = document.createElement('p');
                var img = document.createElement('img');
                img.src = `img/${arquivo}/${arquivo}0${index + 1}.jpg`;
                console.log(img.src)
                
                var productBox = document.createElement('div');

                // Define o conteúdo dos elementos com base nos dados do JSON
                marca.textContent = product.marca;
                produto.textContent = product.modelo;
                valor.textContent = product.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


                // Adiciona os elementos ao productBox
                productBox.appendChild(marca);
                productBox.appendChild(produto);
                productBox.appendChild(valor);
                productBox.appendChild(img);

                // Adiciona o productBox ao container
                container.appendChild(productBox);

                // Incrementa o índice para o próximo produto
                index++;

                // Aguarda 1 segundo antes de adicionar o próximo produto
                setTimeout(adicionarProximoProduto, 1000);
            }
        }

        // Inicia a adição dos produtos
        adicionarProximoProduto();
    }
});
