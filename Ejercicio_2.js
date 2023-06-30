//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.//

let num = prompt('Ingrese un numero');

if(num % 2 === 0){
	alert('El '+num+' es divisible entre 2');
}else{
	alert('El '+num+' es no divisible entre 2');
} 