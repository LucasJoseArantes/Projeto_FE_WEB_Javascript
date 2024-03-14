window.addEventListener("load", function () {

    var vet = [10, 20, 30, 40]

    // #Função literal:
    // function showMsg(msg) {
    //     console.log(msg);
    // }

    // # Arrrow function:
    // showMsg = msg => console.log(msg);
    dobro = x => console.log(x*2);
    triplo = x => console.log(x*3);
    

    // ========================================================

    // # Usando forEach com a função criada:
    // vet.forEach( showMsg );

    // # Usando forEach com a função dentro:
    // vet.forEach (msg => console.log(msg))

    // vet.forEach (x => (x % 2 == 0) ? dobro(x) : triplo(x));   

    // vet.forEach((num, index, vet ) => console.log(`${index} - Valor: ${num} \nVetor: ${vet}` ))

    // dobro = x =>  console.log(x * 2);

    // ========================================================
    // # Usando o map
    // ## O map faz a função, aplica a cada elemento, e retorna o vetor atualizado

    // vet.map(dobro)
    // console.log(vet.map(dobro))

    // ========================================================
    // # Usando o reduce
    soma = (sum, num) => sum + num;
    resultado = vet.reduce(soma);
    console.log(resultado);



})

