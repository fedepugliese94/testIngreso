/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;
	var resultado;
	resultado = parseInt(numeroUno) + parseInt(numeroDos);
	alert("La Suma es " resultado);

}

function restar()
{
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById('numeroUno').value;
	nuemroDos = document.getElementById('numeroDos').value
	var resultado
	resultado = parseInt(numeroUno) - parseInt(numeroDos);
	alert("El Resultado es " resultado);


}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById('numeroUno').value;
	nuemroDos = document.getElementById('numeroDos').value
	var resultado;
	resultado = parseInt(numeroUno) * parseInt(numeroDos);
	alert("El resultado es " resultado);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	numeroUno = document.getElementById('numeroUno').value;
	nuemroDos = document.getElementById('numeroDos').value
	var resultado;
	resultado = parseInt(numeroUno) / parseInt(numeroDos);
	alert("El resultado es " resultado);

	
}

