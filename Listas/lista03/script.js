document.addEventListener("DOMContentLoaded", function() {
    const option = document.getElementById('select');
    const resultContainer = document.getElementById('container');

    option.addEventListener('change', function() {
        const selectedOption = option.value;
        if (selectedOption !== 'selecione') {
            fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
                .then(response => response.json())
                .then(data => {
                    let filteredStudents = [];

                    switch(selectedOption) {
                        case 'todos':
                            filteredStudents = data;
                            break;
                        case 'homens':
                            filteredStudents = data.filter(student => student.sexo === 'M');
                            break;
                        case 'mulheres':
                            filteredStudents = data.filter(student => student.sexo === 'F');
                            break;
                        case 'aprovados':
                            filteredStudents = data.filter(student => (student.notaBim1 + student.notaBim2) >= 60);
                            break;
                        case 'reprovados':
                            filteredStudents = data.filter(student => (student.notaBim1 + student.notaBim2) < 60);
                            break;
                        case 'todos_aprovados':
                            const todosAprovados = data.every(student => (student.notaBim1 + student.notaBim2) >= 60);
                            if (todosAprovados) {
                                resultContainer.innerHTML = `<p>Todos os alunos foram Aprovados!</p>`;
                            } else {
                                resultContainer.innerHTML = `<p>Tem alunos que não foram Aprovados!</p>`;
                            }
                            return;
                        case 'media_turma':
                            const notasTotal = data.map(student => student.notaBim1 + student.notaBim2);
                            const mediaTurma = notasTotal.reduce((acc, curr) => acc + curr, 0) / notasTotal.length;
                            resultContainer.innerHTML = `<p> <strong>Média da Turma:</strong> ${mediaTurma.toFixed(2)} pontos</p>`;
                            return;
                        default:
                            filteredStudents = [];
                    }

                    renderStudents(filteredStudents);
                })
                .catch(error => console.error('Erro ao obter dados dos estudantes:', error));
        } else {
            resultContainer.innerHTML = ''; 
        }
    });

    function renderStudents(students) {
        const studentsHTML = students.map(student => `<p> <strong>${student.nome}</strong> - Nota do Primeiro Bimestre: ${student.notaBim1} pontos || Nota do Segundo Bimestre: ${student.notaBim2} pontos</p>`).join('');
        resultContainer.innerHTML = studentsHTML;
    }
});
