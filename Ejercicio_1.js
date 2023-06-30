//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.//


let result = prompt('“¿Eres bellisimo/a?”');

if(result.toLowerCase() =="si"){
	alert('Ciertamente');
}else{
	alert('No te creo');
} 