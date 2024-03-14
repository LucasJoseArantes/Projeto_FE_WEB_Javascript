window.addEventListener('load', () => {

    //// 1ª FORMA DE FAZER REQUISIÇÃO ASSINCRONA

    var btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.onreadystatechange = function () {
        //         if (this.readyState == 4 && this.status == 200) {
        //             // Typical action to be performed when the document is ready:
        //             // document.getElementById("nome").innerHTML = xhttp.responseText;

        //               // Parse do JSON
        //               var data = JSON.parse(xhttp.responseText);

        //               // Exibir apenas o nome
        //               document.getElementById("nome").innerHTML = data.nome;
        //         }
        //     };
        //     xhttp.open("GET","file.json" , true);
        //     xhttp.send();

        // });

        // -------------------------------------------------------------------------------

        //// 2ª FORMA DE FAZER REQUISIÇÃO ASSINCRONA
        // fetch('file.json')
        // .then(response => response.json())
        // .then(data => {
        //     document.getElementById("nome").innerHTML = `Nome: ${data.nome}`;
        //     document.getElementById("idade").innerHTML = `Idade: ${data.idade}`;
        // })

        // -------------------------------------------------------------------------------

        //// Leitura de vários usuários

        fetch('users.json')
            .then(response => response.json())
            .then(data => {

                inputNome = document.getElementById("nome")
                inputIdade = document.getElementById("idade")

                data.forEach(user => {
                    const div = document.createElement("div");
                    const nomeParagraph = document.createElement("p");
                    const idadeParagraph = document.createElement("p");

                    // Adicionando o conteudo ao paragrafo
                    nomeParagraph.textContent = `Nome: ${user.nome}`;
                    idadeParagraph.textContent = `Idade: ${user.idade}`;

                    // Adicionando os parágrafos ao elemento div
                    div.appendChild(nomeParagraph);
                    div.appendChild(idadeParagraph);

                    // Adicionando o elemento div ao container na página HTML
                    container.appendChild(div);
                });


            })




    });
})