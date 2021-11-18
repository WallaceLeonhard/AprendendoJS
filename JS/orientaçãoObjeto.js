//Programação orientada ao objeto é um modo de se programar que voce reutiliza seu codigo, limpo, organizado e cada vez mais funcional.

//variáveis são chamadas de atributos e função são chamados de metodos.

//this // usado para chamar atributos e metodos.


//JEITO NOVO
class celular {

    constructor(){

        this.cor = "prata"
    }

    ligar(){

        console.log("Fazer ligação!");
        return "Ligando...";

    }

}

//JEITO ANTIGO
let objeto = new celular();

console.log(objeto.ligar);


let celular = function(){

    this.cor ="prata";

    this.ligar = function()
    {
        
        console.log("Uma ligação");
        return "Ligando...";

    }

}

let objeto = new celular();

console.log(objeto.ligar())