const resposta = () => {
    let numeroInfo = parseInt(document.getElementById('numeroInformado').value)

    let res = document.getElementById('resposta');
    let resu = "";

    for(let i = 1; i <= 10; i++){
        let resultado = numeroInfo * [i] ;
        resu += `${numeroInfo} x ${i} = ${resultado} <br/>` 
    }
    res.innerHTML = resu;
}