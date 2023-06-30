/*Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos,
tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, 
si es “moto” ha de ser 0.10 
y si es “autobús” 0.5.

Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, 
si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. 

Considere qué:

total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

*/

let tipoVehi = prompt('Ingrese el tipo de Vehiculo: ');
let distancia_r = parseInt(prompt('Ingrese los kilomentros recorridos: '));
let consumo = parseInt(prompt('Ingrese numero de litros consumido: '));
let precio_km = 0;
let total = 0;

switch (tipoVehi.toLowerCase()) {	
 	case 'coche':
 		precio_km = 0.20; 	 		  		
  		break;
	case 'moto':
 		precio_km = 0.10; 	 		
 		break;
  	case 'autobús':
 		precio_km = 0.5; 	 	
 		break;
}

if(consumo > 0 && consumo <= 100){
	total = (precio_km * distancia_r)+ 5;	
}else if (consumo > 100){
	total = (precio_km * distancia_r)+ 10;	  
}
 
alert('El total a pagar es: ' + total);
  			