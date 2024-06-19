// Objeto para rastrear as áreas e o item contido em cada uma
let areas = {
    a: null,
    b: null,
    c: null
};

// Adiciona eventos de arrastar para cada item
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

// Adiciona eventos de arrastar para cada área designada
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

// Adiciona eventos de arrastar para a área neutra
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

// Função chamada quando um item começa a ser arrastado
function dragStart(e) {
    e.currentTarget.classList.add('dragging'); // Adiciona a classe 'dragging' ao item arrastado
}

// Função chamada quando um item termina de ser arrastado
function dragEnd(e) {
    e.currentTarget.classList.remove('dragging'); // Remove a classe 'dragging' do item arrastado
}

// Função chamada quando um item é arrastado sobre uma área designada
function dragOver(e) {
    if (e.currentTarget.querySelector('.item') === null) {
        e.preventDefault(); // Permite o drop
        e.currentTarget.classList.add('hover'); // Adiciona a classe 'hover' à área
    }
}

// Função chamada quando um item deixa de ser arrastado sobre uma área designada
function dragLeave(e) {
    e.currentTarget.classList.remove('hover'); // Remove a classe 'hover' da área
}

// Função chamada quando um item é solto em uma área designada
function drop(e) {
    e.currentTarget.classList.remove('hover'); // Remove a classe 'hover' da área

    if (e.currentTarget.querySelector('.item') === null) {
        let dragItem = document.querySelector('.item.dragging'); // Obtém o item sendo arrastado
        e.currentTarget.appendChild(dragItem); // Adiciona o item à área
        updadeAreas(); // Atualiza o estado das áreas
    }
}

// Função chamada quando um item é arrastado sobre a área neutra
function dragOverNeutral(e) {
    e.preventDefault(); // Permite o drop
    e.currentTarget.classList.add('hover'); // Adiciona a classe 'hover' à área neutra
}

// Função chamada quando um item deixa de ser arrastado sobre a área neutra
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover'); // Remove a classe 'hover' da área neutra
}

// Função chamada quando um item é solto na área neutra
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover'); // Remove a classe 'hover' da área neutra

    let dragItem = document.querySelector('.item.dragging'); // Obtém o item sendo arrastado
    e.currentTarget.appendChild(dragItem); // Adiciona o item à área neutra
    updadeAreas(); // Atualiza o estado das áreas
}

// Função para atualizar o estado das áreas
function updadeAreas() {
    // Para cada área designada, atualiza o estado do objeto 'areas'
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');

        if (area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML; // Define o conteúdo da área no objeto 'areas'
        } else {
            areas[name] = null; // Define a área como vazia no objeto 'areas'
        }
    });

    // Verifica se os itens estão na ordem correta e atualiza as classes CSS correspondentes
    if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.remove('wrong');
        document.querySelector('.areas').classList.add('correct');
    } else if (areas.a === null && areas.b === null && areas.c === null) {
        document.querySelector('.areas').classList.remove('correct');
        document.querySelector('.areas').classList.remove('wrong');
    } else {
        document.querySelector('.areas').classList.remove('correct');
        document.querySelector('.areas').classList.add('wrong');
    }
}
