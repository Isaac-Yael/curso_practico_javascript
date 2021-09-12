// Código del cuadrado
console.group('Cuadrado');

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm')

function perimetroCuadrado(lado){
    return lado * 4
};
// console.log('El perímetro del caudrado es: ' + perimetroCuadrado + 'cm')

function areaCuadrada(lado){
    return lado * lado
}
// console.log('El área del caudrado es: ' + areaCuadrada + 'cm^2')

console.groupEnd();

// Código del triángulo
console.group('Triangulo');

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log('Los lados del triángulo miden: ' 
//     + ladoTriangulo1 
//     + 'cm, ' 
//     + ladoTriangulo2 
//     + 'cm y ' 
//     + baseTriangulo 
//     + 'cm'
// );

// const alturaTriangulo = 5.5;
// console.log('Los altura del triángulo es de: ' + alturaTriangulo + 'cm')

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
}
// console.log('El perímetro del triangulo es: ' + perimetroTriangulo + 'cm')

function areaTriangulo(base, altura){
    return (base * altura) / 2
}
// console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2')

console.groupEnd();

// Código del círculo
console.group('Circulo');

// const radio = 4
// console.log('El radio del círculo es: ' + radio + 'cm')

function diametroCirculo(radio){
    return radio + radio
}
// console.log('El diámetro del círculo es: ' + diametro + 'cm')

const pi = Math.PI;
console.log('PI es: ' + pi)

function circunferencia(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi
}
// console.log('La circunferencia del círculo es: ' + circunferencia + 'cm')

function areaCirculo(radio){
    return (radio * radio) * pi
}
// console.log('El área del círculo es: ' + areaCirculo + 'cm^2')

console.groupEnd();

// Aquí empieza el HTML

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