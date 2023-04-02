function testSumatoriaNumerosPositivos() {
  var entrada = [1, 2, 3];
  var resultadoEsperado = 6;
  var salida = sumatoria(entrada);

  return salida === resultadoEsperado;
}

function testSumatoriaNumerosNegativos() {
  var entrada = [-1, -2, -3];
  var resultadoEsperado = -6;
  var salida = sumatoria(entrada);

  return salida === resultadoEsperado;
}

function testSumatoriaNumerosMixtos() {
  var entrada = [6, -2, 4];
  var resultadoEsperado = 8;
  var salida = sumatoria(entrada);

  return salida === resultadoEsperado;
}

function testSumatoriaNoNumeros() {
  var entrada = [1, 2, 'a'];
  var resultadoEsperado = 3;
  var salida = sumatoria(entrada);

  return salida === resultadoEsperado;
}

/***** */

function testDivision() {
  var a = 6;
  var b = 3;
  var resultadoEsperado = 2;
  var salida = division(a, b);

  return salida === resultadoEsperado;
}

function testPromedio() {
  var entrada = [10, 20, 20, 50];
  var resultadoEsperado = 25;
  var salida = promedio(entrada);
  return salida === resultadoEsperado;
}



function run() {
  
  console.log(
    'testSumatoriaNumerosPositivos: ',
    testSumatoriaNumerosPositivos() ? 'OK' : 'FAILED'
  );

  console.log(
    'testSumatoriaNumerosNegativos: ',
    testSumatoriaNumerosNegativos() ? 'OK' : 'FAILED'
  );

  console.log(
    'testSumatoriaNumerosMixtos: ',
    testSumatoriaNumerosMixtos() ? 'OK' : 'FAILED'
  );

  console.log(
    'testSumatoriaNoNumeros: ',
    testSumatoriaNoNumeros() ? 'OK' : 'FAILED'
  );
  
  console.log(
    'testDivision: ',
    testDivision() ? 'OK' : 'FAILED'
  );

  
  console.log(
    'testPromedio: ',
    testPromedio() ? 'OK' : 'FAILED'
  );

}

run();