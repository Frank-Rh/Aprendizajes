# Python
 
 En si el lenguaje es facil de aprender, de echo la mayoria de lenguajes son faciles, sabiendo ingles puedes aprender lo basico - avanzado, lo que mas se batalla en este lenguaje es el espacio, si pones un espacio de mas o algo que sobre te marcara error, bueno pues practicamente es lo mismo que JavaScript
 que puedes leerlo [aqui](https://github.com/zFrankk/Aprendizages/blob/main/JavaScript/basico.md), no es necesario que ponga los comparadores por que son los mismos que js, en este voy a explicar lo que es `if`, `elif`, `else` y algunas cosas mas.

 ## if, elif, else

 Ese sirve para desir `si` por ejemplo `si x es igual a 10 `o cosas parecidas, un ejemplo es:

 ```py
 x = 10 
 if x == 10:
     print("x es igual a 10")
 elif x > 8:
     print("x es mayor a 8")
 else:
     print("x es menor a 8")
 ```
 
 ese es el uso de if, elif y else, despues puedes poner input y hacerle algo mas complejo

 ## input

 Input lo que hace es que se le de un valor para que escibas, por ejemplo el valor de y:

 ```py
 y = input("Pon el valor a y")
 print("el valor de y es "+ y)
 ```
 puedes meter la funcion `float` si quieres que sea de punto flotante, `ini` para numeros enteros y `str` para string
 ```py
 x = input(int("Pon un numero ")) # esto es para numeros enteros
 y = input(float("Pon un numero flotante ")) # esto es para numero flotante
 z = input(int("Pon un texto ")) # esto es para texto
 ```
 ## Funciones

 Las funciones son mas faciles que en JS (para mi), puede ser una async def o un def simple, este es un ejemplo:

 ```py
 def menu():
     print("Este es el menu :]") # esta es la accion que tomara
 
 menu() # se llama al menu xD
 ```

 ## Paquetes
  
 Los paquetes ayudan mucho al momento de hacer tus proyectos, hacen que no hagas tanto trabajo xD, bueno pues aqui explico lo basico de algunos paquetes como time, os, webbrowser, colorama y ya creo

 ## Time

 Time ayuda a hacer sierta cosa despues de sierto tiempo por ejemplo: despues de 5 segundos imprime 10, y asi xD, ejemplos:

 ```py
 import time
 print("en 5 segundos se imprimira algo xd")
 time.sleep(5)
 print("aqui esta xzD")
 ```

 ## Webbrowser

 Esto es para abrir cosas en el navegador, por ejemplo en una nueva ventana poner un link, si poner en una nueva pestaña y asi, su uso es
 ```py
 import webbrowser
 link = "https://www.mongodb.com/cloud/atlas"
 webbrowser.open(link)
 ```
 
 ## Colorama
 Esto permite que le des color a las letras en la consola, por ejemplo en color rojo, azul o asi, ejemplo:
 ```py
 import colorama
 from colorama import * 
 print(Fore.RED + "Color rojo")
 print(Fore.BLUE + "Color azul")
 ```

 ## Os
 Este sirve para usar comandos de la cmd, por ejemplo cls o cosas asi, ejemplo:
 ```py
 import os
 os.system("cls || clear")
 os.system("ipconfig")
 # etc xD
 ```

 ya estos son los paquetes que mas faciles de enseñar son y pues que no me da flojera explicar xD

 ## Fin XD
