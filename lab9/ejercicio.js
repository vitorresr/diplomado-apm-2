function operaciones(suma, x, y, resta){
	suma(x,y);
	resta(x,y);
}

function restaAfuera(a,b)
{
	var res = a - b;
	console.log("La resta afuera es : " +  res);
}

operaciones(function(a,b){
	var sum = a + b;
	console.log("La suma es : " + sum);
}, 
3, 
7, 
restaAfuera);


