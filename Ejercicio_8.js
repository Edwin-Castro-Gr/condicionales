//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, 
//si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, 
//“regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

let calificacion = parseInt(prompt('ingrese su calificación de 1 a 10'));

if (calificacion > 1 && calificacion <= 10){

	if (calificacion < 6){
		alert('“Reporbado”');
	}else if (calificacion >= 6 && calificacion < 9){
		alert('“Regular”');
	}else if (calificacion >= 6 && calificacion < 10){
		alert('“Bien”');
	}else{
	 	alert('“Excelecte”');
	}  		
  		
}else{
	alert("No ingreso una calificación valida");
}

  			