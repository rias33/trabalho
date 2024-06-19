// Inicializa a cor atual para desenhar, e variáveis de controle do desenho
let currentColor = 'black';
let canDraw = false; // Indica se o desenho está habilitado (botão do mouse pressionado)
let mouseX = 0; // Coordenada X do mouse
let mouseY = 0; // Coordenada Y do mouse

// Seleciona o elemento canvas e seu contexto de desenho
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

// Eventos
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent); // Evento para mudança de cor
});
screen.addEventListener('mousedown', mouseDownEvent); // Evento para pressionar o botão do mouse
screen.addEventListener('mousemove', mouseMoveEvent); // Evento para mover o mouse
screen.addEventListener('mouseup', mouseUpEvent); // Evento para soltar o botão do mouse
document.querySelector('.clear').addEventListener('click', clearScreen); // Evento para limpar a tela

// Função que trata a mudança de cor
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color'); // Obtém a cor clicada
    currentColor = color; // Define a cor atual

    // Atualiza a interface para refletir a cor selecionada
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

// Função que trata o evento de pressionar o botão do mouse
function mouseDownEvent(e) {
    canDraw = true; // Habilita o desenho
    mouseX = e.pageX - screen.offsetLeft; // Ajusta a coordenada X do mouse
    mouseY = e.pageY - screen.offsetTop; // Ajusta a coordenada Y do mouse

    // Desenha um ponto inicial com a cor atual
    ctx.fillStyle = currentColor;
    ctx.fillRect(mouseX, mouseY, 1, 1);
}

// Função que trata o movimento do mouse
function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY); // Desenha uma linha se o desenho estiver habilitado
    }
}

// Função que trata o evento de soltar o botão do mouse
function mouseUpEvent() {
    canDraw = false; // Desabilita o desenho
}

// Função que desenha uma linha no canvas
function draw(x, y) {
    let pointX = x - screen.offsetLeft; // Ajusta a coordenada X do ponto final
    let pointY = y - screen.offsetTop; // Ajusta a coordenada Y do ponto final

    ctx.beginPath(); // Inicia um novo caminho
    ctx.lineWidth = 2; // Define a largura da linha
    ctx.lineJoin = "round"; // Define o estilo da junção das linhas
    ctx.moveTo(mouseX, mouseY); // Move para a coordenada inicial
    ctx.lineTo(pointX, pointY); // Desenha até a coordenada final
    ctx.closePath(); // Fecha o caminho
    ctx.strokeStyle = currentColor; // Define a cor da linha
    ctx.stroke(); // Desenha a linha

    // Atualiza as coordenadas para o próximo ponto
    mouseX = pointX;
    mouseY = pointY;
}

// Função que limpa o canvas
function clearScreen() {
    // Reseta as transformações aplicadas ao canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    // Limpa toda a área do canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
