// Función para calcular el cuadrado

perimetroCuadrado = (lado) => lado * 4
areaCuadrada = (lado) => lado * lado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    
    const area = areaCuadrada(value);
    alert(area)
}

// Función para calcular el triángulo

perimetroTriangulo = (lado1, lado2, base) => Number(lado1) + Number(lado2) + Number(base)
areaTriangulo = (base, altura) => (Number(base) * Number(altura)) / 2
function calcularPerimetroTriangulo(){
    const base = document.getElementById('inputBaseTriangulo')
    const lado1 = document.getElementById('inputLadoATriangulo')
    const lado2 = document.getElementById('inputLadoBTriangulo')
    const valueBase = base.value
    const valueLado1 = lado1.value
    const valueLado2 = lado2.value
    const perimetroDeTriangulo = perimetroTriangulo(valueLado1, valueLado2, valueBase)
    alert(perimetroDeTriangulo)
}
function calcularAreaTriangulo(){
    const altura = document.getElementById('inputAlturaTriangulo')
    const base = document.getElementById('inputBaseTriangulo')
    const valueAltura = altura.value
    const valueBase = base.value
    const area = areaTriangulo(valueBase, valueAltura)
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
    const radio = document.getElementById('inputRadio')
    const radioValue = radio.value
    const circunferenciaCirculo = circunferencia(radioValue)
    alert(circunferenciaCirculo)
}
function calcularAreaCirculo(){
    const radio = document.getElementById('inputRadio')
    const radioValue = radio.value
    const areaDeCirculo = areaCirculo(radioValue)
    alert(areaDeCirculo)
}