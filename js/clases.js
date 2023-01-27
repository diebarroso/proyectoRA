/* Clase Uno - VARIABLES
let = Puede variar a lo largo del programa
const = No puede cambiar de valor a lo largo del programa
Poner la primer palabra en minuscula y las siguientes solo la primer letra. Ej: fechaDeNacimiento

VALORES

Number = Enteros o decimales
String = Cadena de texto definido entre comillas ""

DECLARACION              ASIGNACION (signo =) 
let edad                 edad = 5
let nombre               nombre = "Diego Javier"
let apellido             apellido = "Barroso" */

/* Console.log 

console.log("Hola como estas?")
*/

/**  PROMPT Y ALERT>> Mostrara un cuadro de dialogo para que el usuario ingrese un valor 

const numero = prompt("Ingrese un número");
console.log(numero);
alert("Hola como estas")

*/
/** parseInt = Transforma el numero a un entero
    parseFloat = Transforma el numero a un decimal
    
    ejemplo:
    const numero1 = 10
    const numero2 = "10"

    const resultado = numero1 + numero2 >>> Esto dara como resultado 1010
    const resultado = numero1 + parseInt(numero2) >>> Esto dara como resultado 20
 */

/** CONDICIONALES >> Valores Booleanos >> TRUE - FALSE
     ESTRUCTURA IF

     if (true) {
        poner el codigo que quiera, con variables y demas..

        ESTO SE VA A CUMPLIR SOLAMENTE SI ES VERDADERO
     }

     
     if (false) {
        poner el codigo que quiera, con variables y demas..

        SI ES FALSO NO SE VA A CUMPLIR NINGUN CODIGO O INDICACION
     */

/** OPERADORES DE EQUIVALENCIA == 
        Ejemplo:
        
        let unNumero = 5

        if (unNumero == 5) {
            console.log("vas a ver este mensaje")   
        }
        
        IF...ELSE

        let unColor = "Rojo"

        if (unColor == "Rojo") {
            console.log("El color es Rojo");
        }else{
            console.log(El color no es Rojo")
        }
        */
/** CONDICIONES ANIDADAS >> IF....ELSE IF 
          
         let precio = 100.5;

         if (precio < 20) {
            alert("El precio es menor a 20");
         }
         else if (precio < 50) {
            alert("El precio es menor a 50")
         }
         else if (precio < 100) {
            alert("El precio es menor a 100")
         }
         else {
            alert("El precio es mayor a 100)")
         }   
        */
