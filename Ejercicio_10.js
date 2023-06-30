/*10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. 
	Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
	
	El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 

	Course: $4999 MXN
	Carrera $3999 MXN
	Master: $2999 MXN
	
	Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
	
	Beca Facebook: 20% de descuento.
	Beca Google: 15% de descuento.
	Beca Jesua: 50% de descuento.

	Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, 
	tomando en cuenta las siguientes duraciones:
	
	Course: 2 meses
	Carrera 6 meses
	Master: 12 meses
*/
let nivel = prompt('Ingrese el nivel al que se quiere matricular: ');
let vnivel = 0;
let descuento = 0;
let meses = 0;

switch (nivel.toLowerCase()) {	
 	case 'course':
 		vnivel = 4999; 	
 		meses = 2;	  		
  		break;
	case 'carrera':
 		vnivel = 3999;
 		meses = 6;	
 		break;
  	case 'master':
 		vnivel = 2999;
 		meses = 12;	
 		break;
}

let beca = prompt('Ingrese la beca con la que cuenta: ');

if(beca.toLowerCase() == "facebook" ){
	descuento = (vnivel * 20)/100;	
}else if (beca.toLowerCase() == "google" ){
	descuento = (vnivel * 15)/100;	  
}if(beca.toLowerCase() == "jesua" ){
	descuento = (vnivel * 50)/100;	
}
let total = vnivel - descuento;
let totalCurso = total * meses;  
alert('El valor mensual con descuento es: ' + total + ', el valor total del curso es: '+totalCurso);
  			