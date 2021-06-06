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

## Unshift

Este metodo te permite agregar un elemento en el primer lugar de la lista, su uso es `.unshift(elemento)`, ejemplo:

```js
// se define la lista
var lista = ["como", "estas"]
// se agrega el valor
lista.unshift("hola")
// resultado
["hola", "como", "estas"]
```

## Shift

Este metodo permite que elimines el primer elemento de un listado, su uso es `.shift()` un ejemplo es:

```js
// define la lista
var lista = [1, 2, 3, 4];
// elimina el valor
lista.shift()
// resultado 
[2, 3, 4]
```

## Encontrar un elemento por el valor

En los array tambien es posible encontrar un valor en el listado por valor, por ejemplo, supongamos que en la lista ay un valor `Hola` pero queremos eliminar ese hola, para esto se usaria el metodo splice, pero primero debes que encontrar e valor que quieres eliminar, para esto se usa el metodo `indexOf(elemento)` vamo a ver un ejemplo:

```js
// se define la lista
var lista = ["a", "b", "c", "d"];
/* se defne una nueva variante con la que se buscara (esto en si es opcional, lo hago para que sea mas facil llamar la funcion de la variande xD) */
var encontrar = lista.indexOf("b")
// esto buscara b en el listado, recuerda que JavaScript trabaja con la regla del 0, eso quieredecir que el 1 es el segundo numero, el primero es el 0, asi que la posicion de b es 1 
```

## Splice

Este metodo te permite eliminar un elemeneto de un listado que este en cualquier posicion, yo en lo personal lo uso con indexOf, eso me facilita encontrar algo mas facil xD, tambien puedes eliminar y agregar lo eliminado en otro array, o copiar un array xD
```js
// se crea la lista
var lista = ["a", "b", "c", "d"];
// crea la variable para buscar b
var buscar = lista.indexOf("b");
// ahora crea la variable que elimina el valor de buscar y pones que solo quieres eliminar un valor
var a_eliminar = lista.splice(buscar, 1)
// el resultado es 
["a", "c", "d"]
```
# Operadores y simbolos

JavaScript tamcien cuenta con operadores ya sea para saber si se cumplen criterios o simplemente los simbolos matematicos como la suma la resta, etc.

<table style="width:100%">
  <tr>
    <th>Simbolo</th>
    <th>Accion</th>
  </tr>
  <tr>
    <td>+</td>
    <td>Suma</td>
  </tr>
  <tr>
    <td>-</td>
    <td>Resta</td>
  </tr>
  <tr>
    <td>*</td>
    <td>Multiplicacion</td>
  </tr>
  <tr>
    <td>/</td>
    <td>Divicion</td>
  </tr>
  <tr>
    <td>%</td>
    <td>Multiplicacion con resuido</td>
  </tr>
</table>

Puedes hacer operacones matematicas con estos simbolos tambien puedes sumar variables y esas cosas 
```js
// suma
5 + 5 
// resultado 
10
//(bruh)
//multiplicacion
5 * 5 
// resultado 
25
//(bruh x2)
// resta 
6 + 5
// resultado 
1
//(bruh x3)
// divicion 
10 / 2
// resultado
5
// xD
var x = 5 
var y = 8
x + y 
// resultado 
13
// y asi con los demas signos y asi XD
```

## Operadores

 Existen varios tipos de operadores, que sirven para saber si algo se cumple o cosas parecidas xD
Estos son los operadores
- ||
- !
- ==
- ===
- `>=`
- <= 
- &&
- <
- `>`

Ahora explico como y para que funcionan xD

## Operador `||`

En otros lenguajes de programacion se usa or, and, xor,  JS usa `||` para referirse a `or`, esto sirve para cuando exista mas de dos condisiones, esto se usa para que si cumple uno o mas de las condiciones el resultado sea true

<table style="width:100%">
  <tr>
    <th>Condicion 1</th>
    <th>Condicion 2</th>
    <th>Resultado</th>
  </tr>
  <tr>
    <td>Si</td>
    <td>Si</td>
    <td>True</td>
  </tr>
  <tr>
    <td>Si</td>
    <td>No</td>
    <td>True</td>
  </tr>
  <tr>
    <td>No</td>
    <td>No</td>
    <td>False</td>
  </tr>
</table>

## Operador &&

Este operador sirve para que tenga que cumplir con todas las condiciones, si una no se llega a cumplir el resultado seria False

<table style="width:100%">
  <tr>
    <th>Condicion 1</th>
    <th>Condicion 2</th>
    <th>Resultado</th>
  </tr>
  <tr>
    <td>Si</td>
    <td>Si</td>
    <td>True</td>
  </tr>
  <tr>
    <td>Si</td>
    <td>No</td>
    <td>False</td>
  </tr>
  <tr>
    <td>No</td>
    <td>No</td>
    <td>False</td>
  </tr>
</table>

## Operadores restantes

El operador `===` es para saber si el valor es igual y del mismo tipo que otro valor, ejemplo 
```js
x === "hola"
```

Los operadores `<` y `>` se usan para que un valor sea mayor o menor a otro, ejemplos
```js
10 < 11
11 > 10
```

Los operadores `>=` y `<=` se usan para que un valor sea igual o mayor o menor a otro valor, ejemplo
```js
10 <= 11
11 >= 10
```
Y por ultimo el operador `!`, este se usa como un _no_, puede ser como un no es igual, no se cumple, etc
```js
10 != 10
10 !=== 10
if(!x){
    alert("No ay x")
}
```
Y pues es lo basico de JavaScript
