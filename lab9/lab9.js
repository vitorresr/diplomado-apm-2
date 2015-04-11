/* Callbacks en JavaScript */

/* 
* Un Callback en JS es una función, que por
* parametro se le envia otra función, y la función que lo
* recibe, espera a que se ejecute esa función
*/

// Creación del Callback
function usarUnCallback(miCallback){
	miCallback();
}

// uso del callback
usarUnCallback(function(){
	alert("Creando el primer Callback en JS");
});

// Callback con un parametro
function otroCallback(miOtroCallback){
	miOtroCallback('Un argumento para esta función');
}

// Uso del otro Callback
otroCallback(function(unParametro){
	console.log('Lo que recibo como parametro es: ' + unParametro);
});

// Multiples callbacks llamados en determinados casos

function multiplesCallbacks(callback1, callback2, callback3){

	callback1('Primer paso');

	callback2('Segundo paso');

	callback3('Ultimo paso');
}

// Uso de los multiples Callbacks
multiplesCallbacks(
	function(paso1){
		console.log("El callback1 me envia por parametro el: " + paso1);
	},

	function(paso2){
		console.log("El callback2 me envia por parametro el: " + paso2);
	},

	function(paso3){
		console.log("El callback3 me envia por parametro el: " + paso3);
	}
);