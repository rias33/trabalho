// Seleciona o elemento onde o relógio digital será exibido
let digitalElement = document.querySelector('.digital');
// Seleciona o ponteiro dos segundos do relógio analógico
let sElement = document.querySelector('.p_s');
// Seleciona o ponteiro dos minutos do relógio analógico
let mElement = document.querySelector('.p_m');
// Seleciona o ponteiro das horas do relógio analógico
let hElement = document.querySelector('.p_h');

// Função que atualiza o relógio
function updateClock() {
    // Obtém a data e hora atual
    let now = new Date();
    // Extrai a hora atual
    let hour = now.getHours();
    // Extrai os minutos atuais
    let minute = now.getMinutes();
    // Extrai os segundos atuais
    let second = now.getSeconds();

    // Atualiza o conteúdo do elemento digital com a hora formatada
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // Calcula o grau de rotação do ponteiro dos segundos (-90 para ajustar o ponto de partida)
    let sDeg = ((360 / 60) * second) - 90;
    // Calcula o grau de rotação do ponteiro dos minutos (-90 para ajustar o ponto de partida)
    let mDeg = ((360 / 60) * minute) - 90;
    // Calcula o grau de rotação do ponteiro das horas (-90 para ajustar o ponto de partida)
    let hDeg = ((360 / 12) * hour) - 90;

    // Aplica a rotação calculada ao ponteiro dos segundos
    sElement.style.transform = `rotate(${sDeg}deg)`;
    // Aplica a rotação calculada ao ponteiro dos minutos
    mElement.style.transform = `rotate(${mDeg}deg)`;
    // Aplica a rotação calculada ao ponteiro das horas
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

// Função que adiciona um zero à esquerda se o tempo for menor que 10
function fixZero(time) {
    // Retorna o tempo formatado com um zero à esquerda se necessário
    return time < 10 ? `0${time}` : time;
}

// Chama a função updateClock a cada 1000 milissegundos (1 segundo)
setInterval(updateClock, 1000);
// Chama a função updateClock imediatamente para inicializar o relógio
updateClock();
