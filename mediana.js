function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioList1 = sumaLista / lista.length
    alert(promedioList1)
}


function esPar(numeros){
    if(numeros % 2 === 0){
        return true;
    } else {
        return false
    }
}

let mediana;

function calcularMediana(){
    const numeros = [Number(document.getElementById('inputMediana').value)]
    console.log(numeros)
    const mitadLista1 = parseInt(numeros.length / 2);
    
    if(esPar(numeros.length)){
        const elemento1 = lista1[mitadLista1];
        const elemento2 = lista1[mitadLista1 - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])
        mediana = promedioElemento1y2
    } else {
        mediana = numeros[mitadLista1]
    }
}