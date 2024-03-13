
const idades = [20, 25, 30, 35, 40]; // Vetor de idades
    
// a) A soma das idades
const somaIdades = idades.reduce((total, idade) => total + idade, 0);
document.write(`<p>Soma das idades: ${somaIdades}</p>`);

// b) A média aritmética simples das idades
const mediaIdades = somaIdades / idades.length;
document.write(`<p>Média das idades: ${mediaIdades}</p>`);

// c) A maior idade
const maiorIdade = Math.max(...idades);
document.write(`<p>Maior idade: ${maiorIdade}</p>`);

// d) As idades ímpares
const idadesImpares = idades.filter(idade => idade % 2 !== 0);
document.write(`<p>Idades ímpares: ${idadesImpares}</p>`);

// e) Verificar se todos são maiores de idade (idade >= 18)
const todosMaioresIdade = idades.every(idade => idade >= 18);
document.write(`<p>Todos são maiores de idade: ${todosMaioresIdade}</p>`);

// f) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
const valorInformado = prompt("Informe um valor para verificar se todas as idades são maiores ou iguais a ele:");
const todasMaioresQueValor = idades.every(idade => idade >= valorInformado);
document.write(`<p>Todas as idades são maiores ou iguais a ${valorInformado}: ${todasMaioresQueValor}</p>`);

// g) Exibir todas as idades maiores ou iguais a determinada idade
const determinadaIdade = 30;
const idadesMaioresQueDeterminada = idades.filter(idade => idade >= determinadaIdade);
document.write(`<p>Idades maiores ou iguais a ${determinadaIdade}: ${idadesMaioresQueDeterminada}</p>`);

// h) A média das idades das pessoas com idades maiores ou iguais a determinada idade
const mediaIdadesMaioresQueDeterminada = idadesMaioresQueDeterminada.reduce((total, idade) => total + idade, 0) / idadesMaioresQueDeterminada.length;
document.write(`<p>Média das idades das pessoas com idades maiores ou iguais a ${determinadaIdade}: ${mediaIdadesMaioresQueDeterminada}</p>`);