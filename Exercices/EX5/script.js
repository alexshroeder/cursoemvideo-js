let num = document.getElementById('txtnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNum (n) {
    
    if (Number(n) >= 1 && Number(n) <= 100) { // Verificando se o número existe e se ele é maior que 100
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    
    if(l.indexOf(Number(n)) != -1) { // Verificando se o número está na lista 
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNum(num.value) && !inLista(num.value, valores)) { // Só vai adicionar se for um número e se não estiver na lista
        
        valores.push(Number(num.value)) // Adicionando um elemento no vetor
        let item = document.createElement('option') // Cria uma tag option
        item.text = `Valor ${num.value} adicionado.` // Mostra o valor adicionado
        lista.appendChild(item) // Adiciona na lista 
        res.innerHTML = ''

    } else {

        window.alert('Valor inválido ou já encontrado na lista!')
    }

    num.value = '' // Apaga a barra de adicionar
    num.focus() // Volta com o foco na barra de adicionar
}

function finalizar() {

    if (valores.length == 0) { // Se não tiver nenhum valor adicionado
        window.alert("Adicione valores antes de finalizar!")

    } else {

        let tot = valores.length // Total de números 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) { // Analisa um por um e verifica qual é o maior e o menor
            soma += valores[pos] // Soma os valores 
            if (valores[pos]> maior) 
            maior = valores[pos]
            if (valores[pos]< menor)
            menor = valores[pos]
        }

        media = soma / tot // Gerando a média
        res.innerHTML = '' // Zerando o "res"
        res.innerHTML += `<p>Ao todo, temos ${tot}, números adicionados!</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
