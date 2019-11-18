var pedirCafe=prompt("Café solo op. 1, con leche op. 2");

function prepararCafe(pedircafe) {
		if (pedircafe == 1) {
		 return {
			marca: "Nespresso",
			modelo: "X323 Feca",
			vaso: "125ml",
			prepara: "Café, té, capuchino",
            alerta: function () {alert("Preparando CAFE SOLO")}
         }
		} else {
			return {
			marca: "Espumante de leche",
			modelo: "X323 Cortado",
			vaso: "125ml",
			prepara: "Café con leche, capuchino con vainilla",
			alerta: function () {alert("Preparando cafe CON LECHE")}
		}
	}
}


var cafetera = prepararCafe(pedirCafe);

cafetera.alerta();
console.log(cafetera);