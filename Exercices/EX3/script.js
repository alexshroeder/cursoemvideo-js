    function contar () { // Declarando variáveis
        let ini = document.getElementById('txtid') 
        let fim = document.getElementById('txtf')
        let passo = document.getElementById('txtp')
        let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // Se o Início, Fim e o Passo forem "0", aparecerá "Impossível contar!"
        res.innerHTML = 'Impossivel contar!'
        // window.alert('[ERRO] Faltam dados!')
    
    } else {
        // Caso não sejam "0", irá contar
        res.innerHTML = 'Contando: '

        // Variáveis numéricas, convertendo o valor que estão nas primeiras variáveis e convertendo pra um número
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0) { // Se o Passo for menor ou igual a "0", ele exibe a mensagem 'Passo inválido!'
                window.alert('Passo inválido! Considerando o Passo 1')
                p = 1
        }

        if (i < f) {
            
            for(let c = i; c <= f; c+= p) { // Contagem crescente
           
            res.innerHTML += `${c} \u{1F449}` // Exibindo os Emojis
            }
            
        }   else {
            
            for (let c = i; c >= f;c -= p) { // Contagem regressiva
            res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`// Emoji   
    }
}