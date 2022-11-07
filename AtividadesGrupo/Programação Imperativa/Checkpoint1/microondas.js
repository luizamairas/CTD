//funcao recebe tipoDePrato e tempoPassadoPeloUsuario como parametro.
function microondas(tipoDePrato, tempoPassadoPeloUsuario) { 
    let tempoPipoca = 10; 
    let tempoMacarrao = 8;
    let tempoCarne = 15;
    let tempoFeijao = 12;
    let tempoBrigadeiro = 8;

    switch (tipoDePrato) { //recebe o tipo de prato, caso exista. Executa a regra de validarRegraDeTempo.
        case "pipoca":
            validarRegraDeTempo(tempoPassadoPeloUsuario, tempoPipoca);
            break;
        case "macarrao":
            validarRegraDeTempo(tempoPassadoPeloUsuario, tempoMacarrao);
            break;
        case "carne":
            validarRegraDeTempo(tempoPassadoPeloUsuario, tempoCarne);
            break;
        case "feijao":
            validarRegraDeTempo(tempoPassadoPeloUsuario, tempoFeijao);
            break;
        case "brigadeiro":
            validarRegraDeTempo(tempoPassadoPeloUsuario, tempoBrigadeiro);
            break;
        default:
            console.error("Prato inexistente"); //Uso o error para passar uma mensagem de erro, caso nao exista. 
    }
}

//Recebe o tempo digitado pelo usuario e o tempo padrao do prato para fazer a validacao da regra e retorna a mensagem. 
function validarRegraDeTempo(tempo, tempoComida) { 
    if (tempo < tempoComida) { // verifica se o tempo digitado é menor que o tempo padrão.
        console.log("Tempo insuficiente.");
    } 
    else if (tempo != null && tempo >= (3*tempoComida)) { //Verifica se o tempo digitado é 3x maior.  
        console.log("kabumm");
    } 
    else if (tempo != null && tempo >= (2*tempoComida)) { //Verifica se o tempo digitado é 2x maior.  
        console.log("A comida queimou");
    }
    else {
        console.log("Prato pronto, bom apetite!!!") //Exibe a mensagem se todas as opcoes acima nao forem verdadeiras. 
    }
}

microondas("pipoca", 10); //Prato pronto, bom apetite!!!
microondas("macarrao", 16);//A comida queimou
microondas("carne", 45);//kabumm
microondas("lasanha", 24);//Prato inexistente
//Se o usuario nao digitar nenhum valor, é considerado o valor padrao.
microondas("brigadeiro");// Prato pronto, bom apetite!!!