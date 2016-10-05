
function pruebaF(formulario)
{
	var numa = formulario.numa.value;
	var numb = formulario.numb.value;
	var numc = formulario.numc.value;
	var suma;
	
	console.log("A,B,C");
	console.log(numa);
	console.log(numb);
	console.log(numc);
	
	suma = Number(numa) + Number(numb) + Number(numc);
	alert(suma);
	
}