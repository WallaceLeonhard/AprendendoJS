// let idade = 28;
// console.log(idade)
//usar camelCase para variáveis

//VARIÁVEIS

// let  nome = "Wallace"; 
// let altura = 174; 
// let idade = 21;

// console.log(nome, altura, idade);

//CONSTANTES
// constantes são variáveis em que os valores não se alterem.

// const valorIngressoAdulto = 20;
// valorIngressoAdulto = 10; //NÃO PODE

//-----------------------------------------------------------------------------------

//PRIMITIVOS
//HÁ DOIS TIPOS DE PRIMITIVOS: TIPOS DE REFERENCIAS E DE VALORES

// //Tipos de VALORES

// let nome = 'Wallace'; // string literal 
// let idade = 25; // number literal
// let estaAprovado = true; // boolean 
// let sobrenome; // Undefined
// let corSelecionada= null; // Redefinir um valor

// //Tipos de REFERÊNCIA


// let pessoa = {
//     nome:'Wallace',
//     idade: 21,
//     estaAprovado: true,
//     sobrenome: 'Leonardo'
//  };

 //ARRAYS
 
//  let familia = [26, 25,'Wallace', 41, 12];

//  let nomeDoColega = ['Breno', 22, 171, 'Arruda'];
//  console.log(nomeDoColega);

//-----------------------------------------------------------------------------

//FUNÇÕES 
// NOMEAR FUNÇÃO =  VERB0 + SUBSTANTIVO
// let corSite = 'Azul';

// function resetaCor(cor, tonalidade){
//     corSite = cor + ' ' +tonalidade;
// };

// resetaCor("verde", "claro");
// console.log(corSite);

//TIPOS DE FUNCÇÕES

//1 - REALIZA UMA TAREFA E NÃO DEVOLVE NADA

// function dizerNome(){
//     console.log('Wallace');
// };

// dizerNome();

// //2 - FAZ UM CÁLCULO OU OPERAÇÃO E RETORNA ALGO
// function multiplicarPorDois(valor){
//     return valor* 2;
// };

// //console.log(multiplicarPorDois(5));

// let resultado = multiplicarPorDois(5);

// console.log(resultado);

//-----------------------------------------------------------------------------

//OPERADORES 
    // Operadores Aritméticos
    // Operadores de Atribuição
    // Operadores de Comparação
    // Operadores Lógicos
    // Operadores Bitwise


//OPERADORES ARITIMÉTICOS

    // let salario = 100;

    // // +, -,  *, /, **
    
    // console.log(salario+salario);
    // console.log(salario-salario);
    // console.log(salario*salario);
    // console.log(salario/salario);
    // console.log(5**5);

    // Operadores de Incremento ++ -- 

    //  let idade = 21;

    //  console.log(idade--);
    //  console.log(idade);
 
  //OPERADORES DE ATRIBUIÇÃO

//     let valorTecladoGamer = 100;
//     // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
//     valorTecladoGamer += valorTecladoGamer;
//     console.log(valorTecladoGamer);

//OPERADORES DE IGUALDADE
    //IGUALDADE ESTRITA
        // console.log(1 === 1); //true
        // console.log('1' === 1); //false

    //IGUALDADE SOLTA
        // console.log('1'== 1); //True
        //console.log(1 == 1); //True
    
//OPERADOR TERNÁRIO
    //Tem um cliente, 100 = cliente vip, caso contrário Cliente comum

    // let pontos = 99;

    // let tipo = pontos >= 100 ? 'premium' : 'comum';
    // console.log(tipo);
 
//OPERADORES LÓGICOS
    //Operador lógico e (&&)
        //Retorna true se os dois operando forem true, caso contrário, retorna false mesmo se um deles forem true.
            // console.log(true && true);

        // let maiorDeIdade = true;
        // let possuiCarteiraDeTrabalho = true;
        // let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho; TRUE

    //Operador Lógico ou (||)
    //retorna true se um dos operandos for true.
    //     let maiorDeIdade = true;
    //     let possuiCarteiraDeTrabalho = false;
    //     let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho; //TRUE
    //     console.log('pode aplicar', podeAplicar);
    
    // //Operador NOT (!)
    
    // let candidatoRecusado =! podeAplicar;
    // console.log('Candidato Recusado', candidatoRecusado);


    // //COMPARAÇÕES LÓGICAS COM VALORES NÃO-BOOLEANOS
    //     //FALSY
    //     //valores: undefined; null; false; 0; ''; NaN - not a number

    //     //Truthy
    //     //valores que não são falsy

        // let corPersonalizada = '';
        // let corPadrao = 'Azul';
        // let corPerfil = corPersonalizada || corPadrao;

         // console.log(corPerfil);

// -------------------------------------------------------------------------

// TROCANDO VALORES MINI-PROJETO

    // let a = 'vermelho';
    // let b = 'azul';

    // console.log(a);
    // console.log(b);

    // let c = a;
    // a = b;
    // b = c;
   
    // console.log(a);
    // console.log(b);

//--------------------------------------------------------------------------

//OPERADORES CONDICIONAIS
    //IF e ELSE 
    //SWITCH CASE

//if...else
    // Se a hora estiver entre 06:00 até 12:00 = Bom dia!
    // Se estiver entre 12:00 até 18:00 = Boa tarde!
    // Caso contrário = Boa noite!

    // let hora = 18;

    // if (hora >= 6 && hora <= 12){
    //     console.log('Bom dia!')
    // } else if(hora > 12 && hora <= 18){
    //     console.log('Boa Tarde!')
    // }else {
    //     console.log('Boa noite!');
    // }
     
//Switch Case 
    // let permissao; ///comum, gerente, direto
    // permissao = 'gerente';
    // switch(permissao) {
    //     case 'comum' :
    //         console.log('Usuário comum');
    //     break;

    //     case 'gerente' :
    //         console.log('Usuário Gerente');
    //     break;

    //     case 'Diretor' :
    //         console.log('Usuário Diretor');
    //     break;

    //     default:
    //         console.log('Usuário não reconhecido');
    //     break;
    // }

//-----------------------------------------------------------------------------------

//LAÇO/LOOP - FOR

    //1. FOR
    //2. WHILE
    //3. DO..WHILE
    //FOR..IN
    //FOR..OF

// for(let i = 100; i >= 1; i--){
//      if(i % 2 !== 0){
//          console.log(i);
//      }
// }

//While LOOP
// let i = 5;
// while ( i >= 1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i--
// }

//DO..WHILE LOOP
// let i = 1;
// do {
//     console.log("digitando", i);
//     i++;
// } while (i <= 10);

//FOR..IN

// const pessoa = {
//     nome: 'wallace',
//     idade: 25
// };

// for(let chave in pessoa){
//     console.log(chave, pessoa['nome']);
// }

// const cores = ['vermelho', 'azul', 'verde'];

// for(let indice in cores){

//     console.log(indice, cores[indice]);
// }

// //FOR..OF

// for(let cor of cores){
//     console.log(cor);
// }


//=================================================================================






