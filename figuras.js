// Función para calcular el cuadrado

perimetroCuadrado = (lado) => lado * 4
areaCuadrada = (lado) => lado * lado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado').value
    const perimetro = perimetroCuadrado(input);
    alert(perimetro)
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado').value    
    const area = areaCuadrada(input);
    alert(area)
}

// Función para calcular el triángulo

perimetroTriangulo = (lado1, lado2, base) => Number(lado1) + Number(lado2) + Number(base)
areaTriangulo = (base, altura) => (Number(base) * Number(altura)) / 2
function calcularPerimetroTriangulo(){
    const base = document.getElementById('inputBaseTriangulo').value
    const lado1 = document.getElementById('inputLadoATriangulo').value
    const lado2 = document.getElementById('inputLadoBTriangulo').value
    const perimetroDeTriangulo = perimetroTriangulo(lado1, lado2, base)
    alert(perimetroDeTriangulo)
}
function calcularAreaTriangulo(){
    const altura = document.getElementById('inputAlturaTriangulo').value
    const base = document.getElementById('inputBaseTriangulo').value
    const area = areaTriangulo(base, altura)
    alert(area)
}

// Función para calcular el círculo

diametroCirculo = (radio) => Number(radio) + Number(radio)
const PI = Math.PI;

circunferencia = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}
areaCirculo = (radio) => (radio * radio) * PI
function calcularCircunferenciaCirculo(){
    const radio = document.getElementById('inputRadio').value
    const circunferenciaCirculo = circunferencia(radio)
    alert(circunferenciaCirculo)
}
function calcularAreaCirculo(){
    const radio = document.getElementById('inputRadio').value
    const areaDeCirculo = areaCirculo(radio)
    alert(areaDeCirculo)
}