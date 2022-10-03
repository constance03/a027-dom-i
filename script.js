const frutas = ["laranja", "limão", "uva"];

// exercicio 1
let fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]

let fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

let fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]

//usando loop
//let listaFrutas = document.getElementsByTagName("li")
// for (let i in frutas){
//     listaFrutas[i].innerHTML = frutas[i]
// }

//exercicio2
let valorFrutaInput = document.getElementById("frutinha")

function valorDoInput () {
    console.log(valorFrutaInput.value);
}


//exercicio 3
function adicionarFruta () {
    let fruta4 = document.getElementById("fruta-4")
    fruta4.innerHTML = valorFrutaInput.value
}