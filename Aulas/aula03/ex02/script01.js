window.addEventListener('load', () => {

    document.getElementById("cep").addEventListener("blur", () => { // blur é o evento que ocorre quando o campo perde o foco;

    var cepMsg = document.getElementById("cepMsg");

        var cep = document.getElementById("cep").value.replace(/\D/g, ''); // Expressão regular para encontrar não dígitos;


        if (cep.length == 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {

                    if(  data.logradouro == undefined || data.localidade == undefined || data.bairro == undefined){
                        cepMsg.innerHTML = "CEP não encontrado" ;
                        document.getElementById("rua").value = ""
                        document.getElementById("cidade").value = ""
                        document.getElementById("bairro").value=  ""
                    }
                    else{
                        document.getElementById("rua").value = data.logradouro;
                        document.getElementById("cidade").value = data.localidade;
                        document.getElementById("bairro").value = data.bairro;
                        cepMsg.innerHTML = "" ;
                    }
                    
                });
        }

    });
});