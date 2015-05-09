var a = 5;
var b = 3;


function isMaxThan(){
	
	var mayor = a > b;

	if ( mayor === true)
	{
		return "a es mayor que b";	
	}
	else
	{
		return"b es mayor que a";
	}
}

console.log(isMaxThan());