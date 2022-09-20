//selecionar h1 por ID

var title = document.querySelector("#title");

//mudando estilo
//PROBLEMA: ele adiciona o estilo dos elementos inline no html
title.style.color = "red";

//h2 - subtitulo

var h2 = document.querySelector("h2");

//Como adicionar varios estilos de uma vez

h2.style.cssText = "color:blue; background-color:pink; font-size:50px;";


//Como mexer nos atributos linkando o CSS e o JavaScript
//Selecionar elemento
var paragrafo = document.querySelector("#paragrafo");
console.log(paragrafo);
let mudar = true;
//criar função que irá ser chamada no html
function mudarClasseRosa(){
    //setando um atributo que pode ser achado  no css, 
    //pois está pre-escrito no mesmo
    if(mudar){
        paragrafo.setAttribute("class", "rosa");
        console.log(paragrafo);
    }else{
        paragrafo.removeAttribute("class","rosa");
        console.log(paragrafo);
    }
    mudar = !mudar;
}

//Forma 2 - Mesma coisa da acima só que melhor e mais segura

//Selecionar elemento
var paragrafo2 = document.querySelector("#paragrafo2");
console.log(paragrafo2);
let mudar2 = true;

//criar função que irá ser chamada no html
function mudarClasseAzul(){
    //setando um atributo que pode ser achado  no css, 
    //pois está pre-escrito no mesmo
    if(mudar2){
        //Aqui em vez de setAttribute iremos usar "classList.add"
        //Porque assim irá somente adicionar uma classe no elemento 
        // e não substitui-la
        paragrafo2.classList.add("azul");
        console.log(paragrafo2);
    }else{
        //Aqui irá remover somente o valor "azul" que consta no atributo class
        paragrafo2.classList.remove("azul");
        console.log(paragrafo2);
    }
    mudar2 = !mudar2;
}