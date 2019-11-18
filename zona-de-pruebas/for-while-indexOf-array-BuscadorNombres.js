var alumnos = ['Mariana', 'Sebastián', 'Constanza', 'Julieta', 'Romilda', 'Julieta', 'Néstor', 'Juan José', 'Mariana', 'Mariana 3', 'Pedro'];

console.log("===== while =====");
function listarAlumnos (lista) {
var n = 0;
	while (n <= lista.length-1) {
		console.log(n +" _ "+lista[n]);
		n++
	}
}
listarAlumnos(alumnos);

console.log("===== for =====");
function listarAlumnos2 (lista) {
	for (var n=0; n <= lista.length-1; n++)
		console.log(n+1 +" - "+ lista[n]);
}
listarAlumnos2 (alumnos);

function buscarAlumnos () {
	var alumno = prompt("Ingresar nombre:");
	var indice = alumnos.indexOf(alumno);
	alert("Encontramos a "+alumno+" en el índice n° "+ indice)
}
buscarAlumnos (alumnos);