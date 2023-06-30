/*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto 
le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping..
*/
let toppinhg = prompt('Ingrese el topping para helado que desea: ');
let h_sintopping = 50;
let total= 0;
switch (toppinhg.toLowerCase()) {
	
 	case 'oreo':
 		total = h_sintopping + 10;
  		alert('El valor del Helado es: ' + total);
  		break;
	case 'KitKat':
		total= h_sintopping + 15;
		alert('El valor del Helado es: ' + total);
  		break;
  	case 'brownie':
		total= h_sintopping + 20;
  		alert('El valor del Helado es: ' + total);
  		break;
  	default:
  		alert('"No tenemos ese topping, lo sentimos." El valor del Helado sin topping es: '+ h_sintopping);
  		break;
}

  			