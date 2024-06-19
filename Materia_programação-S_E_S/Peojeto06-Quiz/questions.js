// Array de perguntas e respostas para o quiz
let questions = [
    {
        question: 'Em qual elemento HTML nós colocamos o JavaScript?', // Pergunta 1
        options: [ // Opções de resposta
            'tag js',
            'tag script',
            'tag scripting',
            'tag javascript'
        ],
        answer: 1 // Índice da resposta correta (0 baseado)
    },
    {
        question: 'Onde é o local certo de colocar o JavaScript?', // Pergunta 2
        options: [
            'Na tag body',
            'Na tag head',
            'Tanto na tag body quanto a head estão corretas'
        ],
        answer: 2
    },
    {
        question: 'Qual a sintaxe correta para adicionar um arquivo JavaScript externo na tag script?', // Pergunta 3
        options: [
            'name="xxx.js"',
            'src="xxx.js"',
            'href="xxx.js"'
        ],
        answer: 1
    },
    {
        question: 'Um arquivo JavaScript externo precisa ter a tag script', // Pergunta 4
        options: [
            'Verdade',
            'Falso'
        ],
        answer: 1
    },
    {
        question: 'Como escrever um "Olá Mundo" em um alertbox?', // Pergunta 5
        options: [
            'alertBox("Olá Mundo")',
            'msgBox("Olá Mundo")',
            'msg("Olá Mundo")',
            'alert("Olá Mundo")'
        ],
        answer: 3
    },
    {
        question: 'Como você cria uma função no Javascript?', // Pergunta 6
        options: [
            'function:minhaFuncao()',
            'function = minhaFuncao()',
            'function minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como chamar uma função chamada "minhaFuncao"?', // Pergunta 7
        options: [
            'call minhaFuncao',
            'call function minhaFuncao',
            'minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como escrever uma condicional IF no Javascript?', // Pergunta 8
        options: [
            'if i = 5',
            'if i == 5 then',
            'if (i == 5)',
            'if i = 5 then'
        ],
        answer: 2
    },
    {
        question: 'Como fazer um if que executa um código caso "i" for diferente de 5', // Pergunta 9
        options: [
            'if (i != 5)',
            'if (i <> 5)',
            'if i <> 5',
            'if i =! 5 then'
        ],
        answer: 0
    },
    {
        question: 'Como o loop while começa?', // Pergunta 10
        options: [
            'while (i <= 10)',
            'while (i <= 10; i++)',
            'while i = 1 to 10'
        ],
        answer: 0
    },
];
