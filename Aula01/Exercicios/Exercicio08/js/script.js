const texto = document.querySelector('#textoD')

texto.addEventListener('blur', () => {

    const textoSeparado = texto.value.split('');
    
    for (let i = 0; i < textoSeparado.length; i++) {
        
        if(textoSeparado[i] === 'a' ||
            textoSeparado[i] === 'e' ||
            textoSeparado[i] === 'i' ||
            textoSeparado[i] === 'o' ||
            textoSeparado[i] === 'u' 
        ){
            textoSeparado[i] = ' ';
        }      
    }
    texto.value = textoSeparado.join('');
})
