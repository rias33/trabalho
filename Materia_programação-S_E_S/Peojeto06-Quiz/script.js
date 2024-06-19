// Variáveis para rastrear a pergunta atual e o número de respostas corretas
let currentQuestion = 0;
let corretAnswer = 0; // Deve ser 'correctAnswer' (com 'c' extra), mas mantemos como está para corresponder ao código fornecido

// Exibe a primeira pergunta ao iniciar
showQuestion();

// Função que exibe a pergunta atual
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion]; // Obtém a pergunta atual

        // Calcula e atualiza a barra de progresso
        let pct = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${pct}%`;

        // Oculta a área de pontuação e exibe a área de perguntas
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        // Atualiza o texto da pergunta
        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        // Gera o HTML para as opções de resposta
        let optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        // Adiciona eventos de clique para cada opção
        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });

    } else {
        // Se não houver mais perguntas, finaliza o quiz
        finishQuiz();
    }
}

// Função que trata o clique em uma opção de resposta
function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op')); // Obtém a opção clicada

    // Verifica se a resposta está correta e incrementa o contador de respostas corretas
    if (questions[currentQuestion].answer === clickedOption) {
        corretAnswer++;
    }

    currentQuestion++; // Passa para a próxima pergunta
    showQuestion(); // Exibe a próxima pergunta
}

// Adiciona evento de clique para o botão de reset na área de pontuação
document.querySelector('.scoreArea button').addEventListener('click', resetEvent);

// Função que finaliza o quiz e exibe a pontuação
function finishQuiz() {
    let points = Math.floor((corretAnswer / questions.length) * 100); // Calcula a pontuação

    // Define a mensagem e a cor da pontuação com base na pontuação
    if (points < 30) {
        document.querySelector('.prizeImage').src = 'Turd.png';
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim hein?!';
        document.querySelector('.scorePct').style.color = '#FF0000';
    } else if (points >= 30 && points < 70) {
        document.querySelector('.prizeImage').src = 'Silver.png';
        document.querySelector('.scoreText1').innerHTML = 'Muito bom!';
        document.querySelector('.scorePct').style.color = '#FFFF00';
    } else if (points >= 70) {
        document.querySelector('.prizeImage').src = 'Gold.png';
        document.querySelector('.scoreText1').innerHTML = 'Parabéns, você é fera!';
        document.querySelector('.scorePct').style.color = '#0D630D';
    }

    // Exibe a pontuação e a mensagem final
    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${corretAnswer}.`;

    // Exibe a área de pontuação e oculta a área de perguntas
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = `100%`;
}

// Função que reinicia o quiz
function resetEvent() {
    corretAnswer = 0; // Reseta o contador de respostas corretas
    currentQuestion = 0; // Reseta o índice da pergunta atual
    showQuestion(); // Exibe a primeira pergunta novamente
}
