// Adiciona um evento ao corpo do documento que escuta quando uma tecla é liberada
document.body.addEventListener('keyup', (event)=>{
    // Chama a função playSound passando o código da tecla pressionada em minúsculas
    playSound(event.code.toLowerCase());
    // Imprime o código da tecla no console para debug
    console.log(event.code);
});

// Adiciona um evento ao botão dentro do elemento com a classe 'composer'
document.querySelector('.composer button').addEventListener('click', ()=>{
    // Obtém o valor do input com o id 'input'
    let song = document.querySelector('#input').value;

    // Verifica se o input não está vazio
    if(song !== ''){
        // Divide a string do input em um array de caracteres
        let songArray = song.split('');
        // Chama a função playComposition passando o array de caracteres
        playComposition(songArray);
    }
});

// Função que toca o som baseado no código da tecla
function playSound(sound){
    // Seleciona o elemento de áudio correspondente ao som
    let audioElement = document.querySelector(`#s_${sound}`);
    // Seleciona o elemento da tecla correspondente ao som
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    // Verifica se o elemento de áudio existe
    if(audioElement){
        // Reinicia o tempo do áudio para o início
        audioElement.currentTime = 0;
        // Toca o áudio
        audioElement.play();
    }
    // Verifica se o elemento da tecla existe
    if(keyElement){
        // Adiciona a classe 'active' ao elemento da tecla
        keyElement.classList.add('active');
        // Remove a classe 'active' após 300 milissegundos
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

// Função que toca uma composição de sons em sequência
function playComposition(songArray){
    // Inicializa a variável de espera com 0
    let wait = 0;
    // Itera sobre cada item do array de caracteres
    for(let songItem of songArray){
        // Define um tempo para tocar cada som em sequência
        setTimeout(()=>{
            // Chama a função playSound passando o código da tecla com o prefixo 'key'
            playSound(`key${songItem}`);
        }, wait);
        // Incrementa a espera em 250 milissegundos para o próximo som
        wait += 250;
    }
}
