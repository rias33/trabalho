// Inicialização do tabuleiro e variáveis de estado
let board = {
    a1: '',
    a2: '',
    a3: '',
    b1: '',
    b2: '',
    b3: '',
    c1: '',
    c2: '',
    c3: ''
};
let turn = '';     // Variável que guarda o turno atual ('x' ou 'o')
let warning = '';  // Variável para mensagens de aviso (vencedor ou empate)
let playing = false; // Variável que indica se o jogo está em andamento

reset(); // Chama a função reset para iniciar o jogo

// Eventos
document.querySelector('.reset').addEventListener('click', reset); // Evento para o botão de reset
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick); // Evento para cada célula do tabuleiro
});

// Função que trata o clique em uma célula do tabuleiro
function itemClick(event) {
    let item = event.target.getAttribute('data-item'); // Obtém o identificador da célula clicada
    if (playing && board[item] === '') { // Verifica se o jogo está em andamento e a célula está vazia
        board[item] = turn; // Marca a célula com o símbolo do jogador atual
        renderBoard(); // Atualiza a exibição do tabuleiro
        togglePlayer(); // Alterna o turno do jogador
    }
}

// Função que reinicia o jogo
function reset() {
    warning = ''; // Limpa a mensagem de aviso

    // Define o jogador inicial aleatoriamente
    let random = Math.floor(Math.random() * 2);
    turn = (random === 0) ? 'x' : 'o';

    // Limpa o tabuleiro
    for (let i in board) {
        board[i] = '';
    }

    playing = true; // Define o jogo como em andamento

    renderBoard(); // Atualiza a exibição do tabuleiro
    renderInfo();  // Atualiza as informações do jogo
}

// Função que atualiza a exibição do tabuleiro
function renderBoard() {
    for (let i in board) {
        let item = document.querySelector(`div[data-item=${i}]`); // Seleciona a célula correspondente
        item.innerHTML = board[i]; // Define o conteúdo da célula
    }

    checkGame(); // Verifica o estado do jogo (vencedor ou empate)
}

// Função que atualiza as informações do jogo (turno atual e resultado)
function renderInfo() {
    document.querySelector('.vez').innerHTML = turn; // Atualiza o turno atual
    document.querySelector('.resultado').innerHTML = warning; // Atualiza a mensagem de aviso
}

// Função que alterna o turno do jogador
function togglePlayer() {
    turn = (turn === 'x') ? 'o' : 'x'; // Alterna entre 'x' e 'o'
    renderInfo(); // Atualiza as informações do jogo
    checkGame(); // Verifica o estado do jogo
}

// Função que verifica o estado do jogo (vencedor ou empate)
function checkGame() {
    if (checkWinnerFor('x')) {
        warning = '"x" venceu!'; // Define a mensagem de aviso para vitória do 'x'
        playing = false; // Define o jogo como encerrado
    } else if (checkWinnerFor('o')) {
        warning = '"o" venceu!'; // Define a mensagem de aviso para vitória do 'o'
        playing = false; // Define o jogo como encerrado
    } else if (isFull()) {
        warning = 'Deu empate!'; // Define a mensagem de aviso para empate
        playing = false; // Define o jogo como encerrado
    }
}

// Função que verifica se um jogador específico venceu
function checkWinnerFor(player) {
    // Possíveis combinações vencedoras
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',
        'a1,b2,c3',
        'a3,b2,c1'
    ];

    // Verifica se alguma combinação vencedora é atendida pelo jogador
    for (let w in pos) {
        let pArray = pos[w].split(',');
        let hasWon = pArray.every(option => board[option] === player);
        if (hasWon) {
            return true;
        }
    }

    return false;
}

// Função que verifica se todas as células do tabuleiro estão preenchidas
function isFull() {
    for (let i in board) {
        if (board[i] === '') {
            return false; // Retorna falso se encontrar alguma célula vazia
        }
    }

    return true; // Retorna verdadeiro se todas as células estiverem preenchidas
}
