# Basico
Esto es lo basico de JavaScript, umh, aca pos voy a poner los tipos de datos, signos, comparadores y esas cosas xD 
<br>
<br>
# Variantes
En JavaScript existen diferentes tipos variables, ya sean que guarda letras, numeros, numeros de punto flotante o de valor true o false

<h2>Los tipos de datos son </h2>

- String
- Numericos
- Boolean

<u>Es importante saber</u> que siempre debes que aclarar la variante de esta manera

```js
// metodo 1
var variante = valor;
// metodo 2
var variante;
variante = valor;
```
la variante puede cambiar de valor durante el procceso en lo personal si pienso cambiar el valor de la variante uso el metodo 2

### Variante tipo string

Las variantes de tipo string es una variante con valor en texto, 
el texto debe que ir dentro de comillas dobles o simples.
Un ejemplo seria este:
```js
var stringn = "String";
```
en en cuneta que puedes hacer un listado o cadena
```js
// Esta es una variante con un array(listado) valor
var listado = ["elemento1", "elemnto2", "etc"];
// Esta es un avariante con una cadena de valor
var cadena = "Esto es una cadena";
```
y pues esto es lo basico de las variables tipo string

### Variables tipo numericas

Estas como su nombre lo indica son las que tiene un valor numerico ya sea numero entero o de punto flotante un ejemplo son 
```js
var entero = 10;
var flotante = 10.05;
```
en realidad son las mas faciles (para mi) e igual que las tipo string estas pueden ser cadenas
```js
var cadena = [1, 2, 3, 4];
```
y pues esto es lo basico de las variables tipo numerica xD

### Variabes tipo boolean

Estas solo tienen dos valore `true` o `false` y pues su definicion es esta:
```js
var verdadero = true;
var falseo = false;
```
esto en lo personal lo uso para base de datos, para poder habilitar y deshabilitar algo xD

Bueno esas son las variables simples

# Array

El array ya lo eh usado antes, yo prefiero decirle lista, el array siempre debe que empesar con `[`y terminar con `]`, dentro de ella pueden ir incluso otros array.

Bueno, para definir un array debes que hacer una variable:

```js
// array normal
var listado = ["contenido1", "contenido2"]
// array de diferentes dimenciones
var bidimencional = ["contenido1", "constenido2", ["segundoarray"], "contenido3"]
```
y pues dentro de el puedes poner otro array y asi para que sea de diferentes dimenciones.

En el array puedes hacer varias cosas como agregar, eliminar o mover los elementos, ay varias opciones para hacer esto:

- push
- pop
- unshift
- shift
- splice

## Push

Este metodo permite agregar un elemento mas al array, su uso es `.push(elemento)`, es util pero lo malo es que solo lo agrega en el ultimo lugar del array, este es un ejemplo de su uso:

```js
// se define la lista
var lista = ["awa", "refresco", "jugo"];
// se agrega el valor
lista.push("malteada")
// resultado 
["awa", "refresco", "jugo", "malteada"]
``` 

## Pop

Este metodo permite eliminar el ultimo elemento de un array, su uso es `.pop()`, recuerda que con esto solo podras eliminar __el ultimo__ elemento, un ejemplo es:

```js
// defines la lista
var lista = [1, 2, 3];
// se elimina el valor
lista.pop()
// resultado
[1, 2]
```

## unshift

Este metodo te permite agregar un elemento en el primer lugar de la lista, su uso es `.unshift(elemento)`, ejemplo:

```js
// se define la lista
var lista = ["como", "estas"]
// se agrega el valor
lista.unshift("hola")
// resultado
["hola", "como", "estas"]
```