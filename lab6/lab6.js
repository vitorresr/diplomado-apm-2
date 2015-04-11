/* Uso de funciones, variables y estructuras de control */

var d, minutes, time, hours, message;

// Utilizando el objeto Date de JS para trabajar con fechas, tiempo y timestamps
d = new Date();

hours = d.getHours();
minutes = d.getMinutes();

console.log("Las hora es: " + hours);
console.log("Minutos: " + minutes);

console.log("el tipo de dato de lo minutos y los segundos es: " + typeof(minutes) + " "+ typeof(hours));

if(minutes < 10){
	minutes = "0" + minutes; // agrega un cero a la izquierda si son números menores a 10
} else {
	minutes = minutes.toString(); // convertir la variable `minutes` en un string o cadena de caracteres
}

if(hours < 10){
	hours = "0" + hours;
} else {
	hours = hours.toString();
}

console.log("Las hora es: " + hours);
console.log("Minutos: " + minutes);

console.log("el tipo de dato de lo minutos y los segundos es: " + typeof(minutes) + " "+ typeof(hours));

time = Number(hours + minutes);


console.log("La variable `time` convertida a un valor numerico es: " + time);

if(time >= 0000 && time < 1200){
	console.log("Buenos días");
} else if(time >= 1200 && time < 1700){
	console.log("Buenas tardes");
} else if(time >=1700 && time < 2359){
	console.log("Buenas noches");
}