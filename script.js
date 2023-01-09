const frutas = ["laranja", "limão", "uva"];

//# Exercício 1
//Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML, dentro dos itens `li` que estão na página. Repare que um dos itens "li" ficará vago. Vamos preenchê-lo no exercício 3.

const adicionandoFruta1 = document.getElementById("fruta-1");
adicionandoFruta1.innerHTML = "laranja";
console.log("Fruta 1:" + " " + adicionandoFruta1.innerHTML);

const adicionandoFruta2 = document.getElementById("fruta-2");
adicionandoFruta2.innerHTML = "limão";
console.log("Fruta 3:" + " " + adicionandoFruta2.innerHTML);

const adicionandoFruta3 = document.getElementById("fruta-3");
adicionandoFruta3.innerHTML = "uva";
console.log("Fruta 3:" + " " + adicionandoFruta3.innerHTML);

const adicionandoFruta4 = document.getElementById("fruta-4");
adicionandoFruta4.innerHTML = "";

//aqui eu fiz com função:
//tbm posso fazer assim: const adicionandoFruta1 = document.getElementById("fruta-1").innerHTML = "laranja", mas meu console.log do jeito que está não funciona;


//# Exercício 2
//Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
//Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.

const frutaAdicionada = document.getElementById("fruta-adicional").value = "jambo"
/*console.log(frutaAdicionada).value;*/
//

//# Exercício 3

//Crie uma função que faça com que o valor do input seja adicionado à lista de frutas do exercício 1. Crie um botão, e utilize um evento de `onclick` no botão criado, para que ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista.
//const adicionandoFruta4 =

const adicionar = () => {
const frutaNova = document.getElementById("fruta-4");
frutaNova.innerHTML = document.getElementById("fruta-adicional").value;
console.log("A frase que você adicionou foi: " + frutaNova.innerHTML);
}


















