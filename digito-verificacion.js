/*
*
* Devuelve el dígito de verificación del NIT o número de documento especificado.
*
*/
function calcularDigitoVerificacion(nit) {

    const primos = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59];
    let digitosNit = nit.split("");
    let digitosNitRev = [];
    let sumatoria = 0;

    for (let i=digitosNit.length;i>0;i--) {
        digitosNitRev.push(digitosNit[i-1]);
    }

    for (let j=0;j<digitosNitRev.length;j++) {
        sumatoria += parseInt(digitosNitRev[j])*primos[j];
    }

    let mod = sumatoria % 11;
    let dv = mod;

    if (mod>1) {
        dv = 11 - mod;
    }

    if (isNaN(dv)) {
        return '';
    }
    else {
        return dv;
    }
}
