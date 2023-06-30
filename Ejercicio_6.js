///6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.//

let num1 = parseInt(prompt('Ingrese un numero'));
let num2 = parseInt(prompt('Ingrese un segundo numero'));
let num3 = parseInt(prompt('Ingrese un tercer numero'));

if (num1!=num2){ 
	if(num1 > num2){
		if (num1 != num3){ 
			if(num1 > num3){
				alert('El numero mayor de los tres es: '+ num1);
			}else {
				alert('El numero mayor de los tres es: '+ num3);
			}
		}else{
			alert('El primer número y tercer número son iguales');	
		}
	}else if (num2 != num3){
		if (num2 > num3){
			if (num1 != num3){ 
				alert('El numero mayor de los tres es '+ num2);
			}else{
				alert('El primer número y tercer número son iguales');
			}	
		}else{
			alert('El numero mayor de los tres es '+ num3);
		}	 	
	}else{
		alert('El segundo núumero y tercer número son iguales');
	}
}else{
	alert('El primer número y segundo número son iguales');	
}
  			