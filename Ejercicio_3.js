//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.//

let num = prompt('Ingrese un numero');

if(num % 2 === 0){
	alert('El '+num+' es par');
}else{
	alert('El '+num+' es no par');
} 