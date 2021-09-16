const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajeDelPrecioConDescuento)) /100
    return precioConDescuento;
}

function buttonPriceDiscount(){
    const inputPrice = document.getElementById('inputPrice').value
    const inputDiscount = document.getElementById('inputDiscount').value

    const precioTotal = calcularPrecioConDescuento(inputPrice, inputDiscount)

    const resultP = document.getElementById('resultPrice')
    resultP.innerText = "El precio con descuento son $" + precioTotal
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeDelPrecioConDescuento,
//     precioConDescuento
// })