var expect = chai.expect;
describe('Test funcion sumatoria', function () {
    it('Con numeros positivos', function () {
        var entrada = [1, 2, 3];
        var salida = sumatoria(entrada);
        expect(salida).to.equal(6);
    });
});

var expect = chai.expect;
describe('Test funcion sumatoria', function () {
    it('Con numeros negativos', function () {
        var entrada = [-6, -2, -3];
        var salida = sumatoria(entrada);
        expect(salida).to.equal(-11);
    });
});

var expect = chai.expect;
describe('Test funcion sumatoria', function () {
    it('Con numeros mixtos', function () {
        var entrada = [-6, 3, 6];
        var salida = sumatoria(entrada);
        expect(salida).to.equal(3);
    });
});

var expect = chai.expect;
describe('Test funcion sumatoria', function () {
    it('Con NO números (array, suma nros ignora letras)', function () {
        var entrada = [6, 'b', 6, 'm', 2];
        var salida = sumatoria(entrada);
        expect(salida).to.equal(14);
    });
});

var expect = chai.expect;
describe('Test funcion division', function () {
    it('Division números naturales', function () {
        var entrada1 = 100; entrada2 = 2;
        var salida = division (entrada1, entrada2);
        expect(salida).to.equal(50);
    });
});

var expect = chai.expect;
describe('Test funcion promedio complejo', function () {
    it('Con numeros positivos', function () {
        var entrada = [10, 20, 20, 50];
        var salida = promedio (entrada);
        expect(salida).to.equal(25);
    });
});

var expect = chai.expect;
describe('Test para que de error', function () {
    it('Mostramos un error deliberado', function () {
        var entrada = [10, 4, 'd', 50];
        var salida = promedio (entrada);
        expect(salida).to.equal(31);
    });
});

/*
chai.should();
var expect = chai.expect;

describe("Test clasecuenta", function () {
    it ("Testeo el constructor con la clase cuenta que valida monto $0 y nombre de titular de cuenta con nombre"), function () {
        var instancia = new Cuenta ("Juan", -500);

        expect(instancia.cantidad).to.equal(0);
        expect(instancia.nombre).to.equal("Juan");
    }

    it ("Si ingreso una cant negativa de dinero que no se produzca un descuento"), function () {
        var instancia = new Cuenta ("Juan", 500);
        instancia.ingresar(-500);
        expect(instancia.cantidad).to.equal(500);
    }
}); */