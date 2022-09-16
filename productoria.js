// Productoría
// Necesitamos una función productoria que reciba un array de números y devuelva su productoria. La productoria es el resultado de multiplicar todos sus elementos entre ellos.
// Por ejemplo, productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.

function productoria (numeros){
    let total = 1;
    for (let i=0; i<numeros.length; i++){
        total = total * numeros[i];
    }
    return total;
}
console.log(productoria([1, 4, 7]))