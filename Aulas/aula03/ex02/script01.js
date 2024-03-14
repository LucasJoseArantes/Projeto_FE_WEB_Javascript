window.addEventListener('load', () => {

    document.getElementById("cep").addEventListener("blur", () => {

        var cep = document.getElementById("cep").value;
        cep = cep.replace(/\D/g, ''); // Expressão regular para encontrar não dígitos

        
        var rua = document.getElementById("rua");
        var cidade = document.getElementById("cidade");

        if (cep.length == 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    rua.value = data.logradouro;
                    cidade.value = data.localidade;
                });
        }

    });
});