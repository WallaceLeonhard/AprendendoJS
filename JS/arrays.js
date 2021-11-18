let carros = ["Palio 98", "Toro", "Uno", "Punto", 10, true, new Date(), function(){}];

//Em Java Script um array pode armazernar vários tipos de dados: 'String', números, boolean, função, datas, etc..
// Lembrando o primeiro índice de um array começa em 0.

carros.forEach(function(value, index){

    console.log(index, value);

}); 

