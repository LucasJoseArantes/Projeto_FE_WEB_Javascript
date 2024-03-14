window.addEventListener('load', () => {

    document.getElementById("cep").addEventListener("blur", () => { // blur é o evento que ocorre quando o campo perde o foco;

        var cep = document.getElementById("cep").value.replace(/\D/g, ''); // Expressão regular para encontrar não dígitos;

        if (cep.length == 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById("rua").value = data.logradouro;
                    document.getElementById("cidade").value = data.localidade;
                    document.getElementById("bairro").value = data.bairro;
                });
        }

    });
});