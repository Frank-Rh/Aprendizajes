# En python existen algunos bucles, los mas faciles es while y for
# uno es para cuando se cumple una condicion y otro para cuando no se cumple

#bucle while

# Primero una variante con el valor 0
x = 0 
# Ponemos de condicion que x sea menor a 4
while x < 4:
    print(x)
    x += 1
# Cada vez que no se cumpla la condicion se repetira una y otra y otra vez el bucle
# En este bucle aclaramos que primero imprima x, luego aumente al valor de x 1
# Primero el valor de x es 0, 0 es menor a 4, luego 1, 1 es menor a 4 y asi hata llegar a 4
# 4 no es menor a 4, eso hace que ya no se cumpla la condicion y entra en funcion el else
else:
    print("Ya no se cumple la condicion")
# Como x(4) ya no es menor a 4 la condicion no se cumpla y se pone un else para advertir
# y listo este es el bucle while


# For

#Yo pondre en un array sin contenido los numeros del 0 hasta el 9

z = []
for y in range(10):
    print(y)
    z.append(y)
print(z)

# Primero hacemos una variante llamada y esta guardara la informacion que encuente
# En este caso dentro de un rango de 0 a 10, los datos que guardara es del 1 al 9
# Si ubiera puesto que dentro de una cadena de texto como hola guardaria h o l a
# Lo ultimo es para agregar a un array los datos que almacena y
 
