const larguraXaltura = () => {
    
    let larguraTelaUsuario = window.screen.availWidth;
    let alturaTelaUsuario = window.screen.availHeight;
    let alturaXlargura = `Sua tela tem as dimensões ${larguraTelaUsuario}x${alturaTelaUsuario}`

    textoLido.addEventListener(window.onload = () => {
        let tamanho = document.getElementById('tamanho').value;
        tamanho.innerHTML = alturaXlargura;
    })
}