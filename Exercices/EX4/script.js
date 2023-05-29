function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) { // Se o "num" for igual a "0, exibe mensagem de ERRO!!!"
        
        window.alert('Por favor digite um número!')
    } else {
        
        let n = Number(num.value) // Converte o valor digitado em "num" para número
        let c = 1
        tab.innerHTML = '' // Deixar o select vazio
        
        while (c <= 10) { // Enquanto o contador for menor/igual a 10
            let item = document.createElement('option') // Criando um elemento "option"
            item.text = `${n} X ${c} = ${n*c}` // Vai fazer a conta e jogar dentro do option
            item.value = `tab${c}` // Identifica o item selecionado
            tab.appendChild(item) // Exibe o item
            c++ // Incrementando valor de "c"
        }
    }
}