function calcularMediaAritmetica(lista) {
    //Primera forma de hacerlo ---->

    // let sumaLista = 0;
    // for(i = 0; i < lista.length; i++) {
    // sumaLista = sumaLista + lista[i]
    // }

    // Segunda forma de hacerlo --->
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioList1 = sumaLista / lista.length
    return promedioList1
}