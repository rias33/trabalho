// Adiciona um evento de submissão ao formulário com a classe 'busca'
document.querySelector('.busca').addEventListener('submit', (event)=>{
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    // Obtém o valor do input com o id 'searchInput'
    let input = document.querySelector('#searchInput').value;
    // Verifica se o input não está vazio
    if(input !== ''){
        // Exibe a mensagem de aviso 'Carregando...'
        showWarning('Carregando...');
        // Chama a função getCity passando o valor do input
        getCity(input);
    }
});

// Função que exibe uma mensagem de aviso
function showWarning(msg){
    // Define o conteúdo do elemento com a classe 'aviso' como a mensagem fornecida
    document.querySelector('.aviso').innerHTML = msg;
}

// Função que obtém os dados da cidade a partir da API do OpenWeatherMap
function getCity(city){
    // Monta a URL da API com o nome da cidade e a chave de API
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`;
    // Faz uma requisição para a URL
    let results = fetch(url);
    // Quando a requisição for concluída, converte a resposta para JSON
    results.then(result => {
        return result.json();
    }).then(json => {
        // Chama a função showInfo passando os dados relevantes da resposta
        showInfo({
            name: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            tempIcon: json.weather[0].icon,
            windSpeed: json.wind.speed,
            windAngle: json.wind.deg
        });
    });
}

// Função que exibe as informações da cidade na página
function showInfo(json){
    // Limpa a mensagem de aviso
    showWarning('');
    // Atualiza o título com o nome da cidade e o país
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    // Atualiza a informação de temperatura
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    // Atualiza a informação de velocidade do vento
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
    // Atualiza o ícone de temperatura
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    // Rotaciona o ponteiro de direção do vento
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;
    // Exibe o elemento com a classe 'resultado'
    document.querySelector('.resultado').style.display = 'block';
}
