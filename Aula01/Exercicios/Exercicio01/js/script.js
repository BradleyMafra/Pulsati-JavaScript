

const funcaoResultado = () => {
    let numero1 = parseInt(document.getElementById('input1').value);
    let numero2 = parseInt(document.getElementById('input2').value);
    
    let operacao = document.getElementById("operacao").value;
    let resultado;

    if (operacao == "soma") {
        resultado = numero1 + numero2;
    } else if (operacao == "sub") {
        resultado = numero1 - numero2;
    } else if (operacao == "multi") {
        resultado = numero1 * numero2;
    } else if (operacao == "div") {
        resultado = numero1 / numero2;
    }

    let res = document.getElementById('resposta');
    res.innerHTML = resultado
}