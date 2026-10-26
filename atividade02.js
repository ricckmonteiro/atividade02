// QUESTÃO 01 - VERIFICAÇÃO DE APROVAÇÃO ESCOLAR

{
let media = Number(prompt("Digite a média final do aluno"));
console.log("7.0: " + media);
if (media >= 7.0) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}
let situacao;
if (media >= 7.0) {
    situacao = "Aluno aprovado";
} else {
    situacao = "Aluno reprovado";
}

console.log("Média: " + media + " - " + situacao);
}

// QUESTÃO 02 - IDENTIFICAÇÃO DE NÚMEROS

{
let numero = Number(prompt("Digite um número inteiro:"));

if (numero > 0) {
    console.log ("Número positivo");
} else if (numero < 0) {
    console.log("Número negativo");
} else {
    console.log("O número é zero");
}
}
// QUESTÃO 03 - CLASSIFICAÇÃO DE DESEMPENHO
{

let media = Number(prompt("Digite a média (0 a 10)"));
if (media < 0 || media > 10) {
    console.log("Média inválida");
} else if (media >= 9) {
    console.log ("Excelente");
} else if (media >= 7) {
    console.log ("Bom");
} else if (media >= 5) {
    console.log ("Recuperação");
} else {
    console.log ("Reprovado");
}

}

// QUESTÃO 04 - VERIFICAÇÃO DE ACESSO

{

    let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("Acesso autorizado");
} else {
    console.log("Acesso negado");

}

}

// QUESTÃO 05 - SISTEMA DE DESCONTOS

{

let valorCompra = Number(prompt("Digite o valor da compra"));
let percentual = 0;
if (valorCompra >= 500) {
    percentual = 20;
} else if (valorCompra >= 300) {
    percentual = 10;
} else if (valorCompra >= 100) {
    percentual = 5;
} else {
    percentual = 0;
}

let desconto = valorCompra * (percentual / 100);
let valorFinal = valorCompra - desconto;

console.log("Desconto aplicado: " + percentual + "%");
console.log("Valor do desconto: R$ " + desconto.toFixed(2));
console.log("Valor final a pagar: R$ " + valorFinal.toFixed(2));

}

// QUESTÃO 06 - CONTROLE DE ESTOQUE
{

let estoque = Number(prompt("Digite o estoque disponível: "));
let quantidadeSolicitada = Number(prompt("Digite a quantidade solicitada"));

if (estoque === 0) {
    console.log ("Produto indisponível");
} else if (quantidadeSolicitada <= estoque) {
    console.log("Venda autorizada");
} else {
    console.log("Estoque insuficiente");
}

}

// QUESTÃO 07 - ELEGIBILIDADE PARA DIGIRIR

{

let idade = Number(prompt("Digite a idade: "));
let possuiCNH = confirm("A pessoa possui CNH? (OK = sim, Cancelar = não)");

if (idade < 18) {
    console.log("Idade insuficiente");
} else {
    if (possuiCNH) {
        console.log("Pode dirigir");
    } else {
        console.log("É necessário possuir CNH");
    }
}

}

// QUESTÃO 08 - FREQUÊNCIA ESCOLAR

{

let media = Number(prompt("Digite a média final:"));
let frequencia = Number(prompt("Digite a frequência (%):"));

if (media <7){
    console.log("Reprovado por nota");
} else {
    if (frequencia >= 75) {
        console.log("Aprovado");
    } else {
        console.log("Reprovação por frequência");
    }   
}

}
