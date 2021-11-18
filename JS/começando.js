//FUNÇÃO ANONIMA
//FUNÇÃO SEM NOME
(function(x1,x2, operator){
    return eval(`${x1} ${operator} ${x2}`);


})(1, 2, "+");

let resultado = calc(1, 2, "*"); // A FUNÇÃO NÃO TEM COMO MAIS SER CHAMADA.

console.log(resultado);


//ARROW FUNCTIONS
//CONSEGUE COMPARTILHAR INFORMAÇÕES DE FORA DENTRO DA FUNÇÃO

//Não é necessário digitar o nome função e é usada a seguinte sintaxe e o calc vira uma váriavél que nesse caso recebe nossa arrow function

let calc = (x3, x4, operator1) => {

    return eval(`${x3} ${operator1} ${x4}`);

}

let resultado1 = calc(1, 2, "*");

console.log(resultado1);

//Nesse caso temos uma variável armazenando uma função, mas, podemos passar ela em um parâmetro, toda vez que eu executo algo.

//Temos também uma função de retorno chamada: "Callback" que é quando temos uma função de retorno dentro de uma ação.

//------------------------------------------------







