/* objetos y funciones */

var my_object = new Object();

var other_object = {};

my_object = {
	firstName: 'Viviana',
	lastName: 'Torres',
	phone: 54678999
};

console.log(my_object.firstName);

console.log(my_object['lastName']);

var key;

for(key in my_object){
	console.log(my_object[key]);
}

//funciones

function test() {
	console.log('Ejecutando una funcion');
}

test();

//usando una funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();

console.log(typeof(bye_bye));