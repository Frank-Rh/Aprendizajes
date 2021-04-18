# Etiquetas

### HTML se basa basa en el uso de etiquetas la mayoria con su inicio y cierre y entre <> por ejemplo `<h1>` y `</h1>`

### HTML tiene muchas etiquetas, unas que sirven para tablas, otras para lineas de separacion, otras para remarcar un texto o cambiar el tipo de letra, para imagenes videos y audios (esto en HTML5) y muchas mas etiquetas
<br>
<hr>

# Estas son algunas de las etiquetas 
<br>

<table style="width:100%">
  <tr>
    <th>Etiqueta</th>
    <th>Accion</th>
    <th>Tiene cierre</th>
  </tr>
  <tr>
    <td>html</td>
    <td>Indica que lo que esta dentro de las<br> etiquetas es html</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>head</td>
    <td>Cabeza de el documento</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>boby</td>
    <td>Cuerpo del documento</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>title</td>
    <td>Titulo del documento</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>br</td>
    <td>Salto de linea</td>
    <td>No</td>
  </tr>
  <tr>
    <td>h1 - h6</td>
    <td>Tamaño de la letra, mientras mayor el<br> numero mas pequeña la letra</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>br</td>
    <td>Salto de linea</td>
    <td>No</td>
  </tr>
  <tr>
    <td>center</td>
    <td>Centra el contenido</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>p</td>
    <td>Parrafo</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>& nbsp</td>
    <td>evita la roptura de los espacios<br>lo puse separrado por que no se ve xD</td>
    <td>No</td>
  </tr>
  <tr>
    <td>b</td>
    <td>Poner la letra en negrita</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>i</td>
    <td>Letra cursiva</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>u</td>
    <td>Subrallar</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>pre</td>
    <td>Letra como de maquina de escribir</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>tt</td>
    <td>Lo mismo que <b>pre</b> pero en letra pequeña</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>blockquote</td>
    <td>Destacar una cita textual</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>sup</td>
    <td>Indice</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>sub</td>
    <td>Subindice</td>
    <td>Si</td>
  </tr>
  <tr>
    <td>< !--</td>
    <td>Comentario</td>
    <td>Abrir</td>
  </tr>
  <tr>
    <td>--></td>
    <td>Comentario</td>
    <td>Cerrar</td>
  </tr>
</table>
<br>
<hr>
<hr>

# Links

## Los links son algo diferente a las etiquetas normales, las anteriore puedens usarse como quieran sin la necesidad de meter otra cosa a la etiqueta (anque se puede)
<hr>

### ay distinto tipos de links, unos que llevan a una pagina y otros que llevan a una parte del mismo documento

### Los links tienen la siguiente estructura:
```html
<a href="enlace">Texto que aparece</a>
```
### Para poner un link a una parte del mismo elemento seria asi:
```html
<a href="#marca">Texto que aparece</a>
```
### Para algo mas preciso seria algo asi: 
```html
<a name="marca">Texto que aparece</a>
```
### Para un documento distinto pero que no es de otro dominio seria algo asi: 
```html
<a herf="./menu.html">Menu</a>
```

<hr>
<hr>

# Imagenes  

## La etiqueta de imagen es parecida a la de link

### La etiqueta que se usa es la siguinte 
```html
<img src="">
```
### Esta etiqueta tiene varias elementos que funcionaran para distintas cosas xD 

## Alt
### Con esto se le da una descripcion a la imagen, si la imagen no llega a encontrarse el texto que esta adentro saldra en lujar de la imagen, se usa asi: 
```html
<img src="imagen.png" alt="imagen">
```

## Aling
### Esto es para poner una alineacion a titular de la imagen(si ay) este tiene 3 opciones top, middle y buttom cada uno es una posicion diferente y su uso es: 
```html
<img src="imagen.png" aling=top>Una imagen <!-- Una imagen es el titular -->  
```
