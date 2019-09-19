/********************
 *      Alumno: Alejandro Lazcano
 *      Comisión: cor-4 DWFS Córdoba 
**********************/

//Declaración de variables
var nombreUsuario = "Pepegrillo";
var clave = 777;
var saldoCuenta = 4000;
var limiteExtraccion = 1200;



//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    cargarNombreEnPantalla();
}


//Funciones que tenes que completar

function pagarServicios() {

    var pagarServicioLista = ["Ingrese un número", "Agua", "Teléfono", "Luz", "Internet"];
    var pagarServicioMonto = [0, 350, 425, 210, 570];

    var quePago = parseInt(prompt("Qué servicio querés pagar..."+
                                    "\n 1) "+pagarServicioLista[1]+" $ "+pagarServicioMonto[1]+
                                    "\n 2) "+pagarServicioLista[2]+" $ "+pagarServicioMonto[2]+
                                    "\n 3) "+pagarServicioLista[3]+" $ "+pagarServicioMonto[3]+
                                    "\n 4) "+pagarServicioLista[4]+" $ "+pagarServicioMonto[4]
                                    ));
        var montoDePago = pagarServicioMonto[quePago];
        procesamosPago();

        function procesamosPago () {
            if (quePago <= pagarServicioLista.length) {
                if (montoDePago <= saldoCuenta) {
                    suma = saldoCuenta - montoDePago;
                    saldoCuenta = suma;
                    alert("Pago confirmado: "+montoDePago+" del servicio "+pagarServicioLista[quePago]+".\n Tu saldo actualizado: $"+saldoCuenta);
                    actualizarSaldoEnPantalla();
                } else {
                    alert("Saldo insuficiente");
                }
            }else{
                alert("ERROR: código inválido, debe ser entre 1 y "+pagarServicioLista.length);
            }
        }
}

function iniciarSesion() {
    var pedirClave = parseInt(prompt("Ingrese clave de usuario"));
        if (pedirClave == 777) {
            alert("Bienvenido " + nombreUsuario + "!");
            cargarNombreEnPantalla();
        }
        else {
            saldoCuenta = 0;
            limiteExtraccion = 0;
            alert("ERROR clave o usuario incorrecto, consulte al 0-800");
        }
    }


function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Modifique el límite", "Ingrese nuevo límite de extracción"));
    if (Number.isInteger(nuevoLimite)) {
        limiteAnterior = limiteExtraccion;
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert("Límite inicial: $" + limiteAnterior + "\n Límite nuevo: $" + nuevoLimite);
    } else {
        alert("Debe ingresar un número")
    }
}

function extraerDinero() {
    var extraccion = parseInt(prompt("Monto a retirar", "¿Cuánto desea retirar?"));
    var billetesDeCien = (extraccion % 100);
    if (billetesDeCien == 0) {
        if (extraccion >= saldoCuenta) {
            alert("No se puede extraer más que el dinero disponible");
        } else if (extraccion >= limiteExtraccion) {
            alert("Supera los límites de extracción configurados, hasta $" + limiteExtraccion);
        } else {
            saldoAnterior = saldoCuenta;
            suma = saldoCuenta - extraccion;
            saldoCuenta = suma;
            actualizarSaldoEnPantalla();
            alert("Solicitó extraer: $" + extraccion + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + suma);
        }
    } else {
        alert("Esta operación sólo permite extraer múltiplos de $100");
    }
}

function depositarDinero() {
    var deposito = parseInt(prompt("Monto a depositar", "¿Cuánto desea depositar?"));
    if (Number.isInteger(deposito)) {
        saldoAnterior = saldoCuenta;
        suma = saldoCuenta + deposito;
        saldoCuenta = suma;
        actualizarSaldoEnPantalla();
        alert("Depositaste: $" + deposito + "\nSaldo anterior: $" + saldoAnterior + "\nSaldo actual: $" + suma);
    } else {
        alert("ERROR: Debe ingresar un número");
    }
}

function transferirDinero() {
    var cuantoTranferir = prompt("¿Cuánto dinero querés transferir?")
    if (saldoCuenta >= cuantoTranferir && cuantoTranferir <= limiteExtraccion) {
        destinatarioTransferencia = prompt("A quién querés transferirle los $"+cuantoTranferir+"?");

        if (destinatarioTransferencia !== null || destinatarioTransferencia !== "") {
            alert("Destinatario no encontrado.");            
        } else {
            suma = saldoCuenta - cuantoTranferir;
            saldoCuenta = suma;
            alert("Se realizó transferencia de $"+cuantoTranferir+" a "+destinatarioTransferencia+"\n Saldo actualizado: $"+saldoCuenta);
            actualizarSaldoEnPantalla();
        }

    } else {
        alert("Superás el saldo disponible para transferir. Consultá al 0-800\n Querés transferir: $ "+cuantoTranferir+ 
                    "\n Saldo disponible: $ "+saldoCuenta+"\n Límite extracción: $ "+limiteExtraccion);
    }
}




//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = ("Bienvenido/a " + nombreUsuario + "!");
}
function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}
function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}