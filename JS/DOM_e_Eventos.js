//Manipulação do DOM - Document Object Model
// É a estrutura de como o HTML é formado. 
// Toda vez que queremos interagir com o que o usuário está visualizando vamos manipular o DOM.

//EVENTOS - Conseguimos reagir com o que o usuário está fazendo.


window.addEventListener('focus', event => {

    console.log("focus", event);

});


document.addEventListener('click', event => {

    console.log('click');

});

//Window é a janela e o Document é o site

//Na maioria das vezes se trabalha com o 'document'.

//Mas tem ocasiões que manipulamos toda a aplicação, é quando se trabalha direto na window. Com o window temos acesso ao histórico do usuário, dar refresh na janela, fechar e abrir uma janela, e dá foco na janela.

