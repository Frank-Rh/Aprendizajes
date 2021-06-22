/*
Una funcion es un bloque de codijo que hace ahorrar codigo, otras para poder almacenar o cambiar algo,
Existen varias funciones en JavaScript, unas usa la hoisting (que pueden ser primero llamada y luego declarada), 
otras que solo pueden ser llamadas una vez y asi
*/

// Funcion normal

function Suma(a, b){ // se declara la funcion con un nombre, (sin separaciones y si son dos palabras juntas de pone primeraSegunda) y los parametros que resibira
    return a + b // la accion que hara la funcion
}

Suma(1, 3) // Se llama a la funcion con los prarametros que se deben que pedir
// puedes poner la palabra reservada async antes de la palabra fuction para que sea async fuction y puedas utilizar await y de mas :)


// Funcion en una variante

// Esta funcion tiene el nombre de la variante, asi que solo usa la palabra fuction sin el nombre y luego de fuction los parametros (fuction(){})

const x = function(a, b){ // se declara la contante con el valor de una funcion
    console.log(a + b); // el codijo
    return
}

x(1, 3) // se llama a la funcion

//////////////////////////funciones invoked///////////////////////////

// Estas funciones se pueden llmar una vez en todo el codijo, es una funcion inmediata

(function(a, b){
    return a + b
})(1, 4) // solo se ponen otros parentesis y lo parametros dentro de ello

/////////////////////// funcion flecha

// Estas funcioes igual se deben que declarar en una constante o variante y no usan la palabra reservada fuction

const y = (a, b) => {  // dentro de los parentesis van los parametros luego => para indicar que es una arrow fuction y al final los corchetes para el codigo
    return a + b
}

y(5, 6) // Se llama a la funcion

// Shorthand method

// Para esta función debemos poner el nombre de la funcion luego los parentesis con parametros y al final los corchetes para iniciar el bloque de codijo

const cosa = {
    persona: [],
    add(cosa){
        this.cosa.push(persona)
    }, saludar(index){
        return `Hola soy ${this.cosa[index]}`
    }
}

cosa.add("yo", "tu", "el")
cosa.saludar(1)// tu

// es lo mismo que 

const cosas = {
    objeto: [],
    add: function(cosa){
        this.cosas.push(this.objeto)
    }, 
    saludar: function(index){
        return `Hola soy ${this.cosas[index]}`
    }
}

cosa.add("yo", "tu", "el")
cosa.saludar(1)

