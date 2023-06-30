//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, 
//otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.//

let dia = prompt('Ingrese un día de la semana');

switch (dia.toLowerCase()) {
 	case 'lunes':
  		alert('El día ingresado es el: '+ dia);
  		break;
	case 'viernes':
		alert('El día ingresado es el: '+ dia);
  		break;
  	case 'sabado':
		alert('El día ingresado es el: '+ dia);
  		break;
  	case 'domingo':
		alert('El día ingresado es el: '+ dia);
  		break;
  	default:
  		alert('El día ingresado es un dia Especial');
  		break;
} 	
  			