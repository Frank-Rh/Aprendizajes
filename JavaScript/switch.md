
# Switch
Esto sirve para hacer condiciones con una sola variable por medio de casos, por ejemplo la variable a tandra el valor de hola en string
```js
var a = "hola"
```
ahora se hace el switch el cual su cuerpo es algo asi:
```js
switch(variable){
    case caso:
        //bloque de codigo
        break;// es obligatorio tener el break al terminar el bloque de codigo o si no segira hasta que encuentre el break
    case otrocaso:
        // bloque de codigo
        break;
    default:
        // bloque si no ay caso
        // aqui  no es necesario el brak ya que no ay mas codijo
}
```
vamos a hacer un switch donde se busque el caso de "hola" pero con mas casos:
```js
var a = "Hola"
switch(a){
    case "Hola":
        console.log("hola")
        break;
    case "Si":
        console.log("No")
        break;
    default:
        console.log("No se encontro el caso")
}
// el resultado sera hola
```