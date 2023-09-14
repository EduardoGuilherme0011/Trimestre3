//atribui o valor da tag h1 para a variavel titulo
let titulo = document.querySelector("h1").textContent;
//mostra no console do navegador a variavel titulo
console.log(titulo);
//modifica o valor do titulo para frase "Fica grandão biiiil"
document.querySelector("h1").textContent = "Fica grandão birllll";

//---------------aqui vamos mexer na tabela de imc-----
// armazena na
let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);
 let tdPeso = paciente.querySelector(".info-peso");
  let tdAltura = paciente.querySelector(".info-altura");
//armazena somente as informações de eto de pso e a alura//
let peso = tdPeso.textContent;
let altura = tdAltura.textContent;


//acessa a coluna imc e alera o valor para o resultado//
let tdImc = paciente.querySelector(".info-imc");

//validaçao dos dados
let pesoEhValido = true;
let alturaEhValido = true;

if (peso < 0 || peso > 1000){
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}
if (altura < 0 || altura > 3){
    console.log("Altura inválida!");
    tdImc.textContent = "Altura inválida!";
    alturaEhValido = false;
}

if(pesoEhValido === true && alturaEhValido === true){
    //realizar o calculo imc//
    let imc = peso / (altura * altura);
    console.log(imc);
    tdImc.textContent = imc;
} else{
    tdImc.textContent = "Peso e/ou altura invalida!"
}