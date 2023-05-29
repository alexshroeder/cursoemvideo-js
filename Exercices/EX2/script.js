function verificar () {
    let data = new Date() // Dia atual
    let ano = data.getFullYear() // Ano atual com 4 digitos
    let fano = document.getElementById('txtano') // Selecionando o texto digitado em "txtano"
    let res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano) { // Se o ano digitado for igual a 0 ou maior que o ano atual, ele exibe um ERRO 
        window.alert('ERRO!!! Confira os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex') // Selecionando a opção escolhida em "Sexo"
        let idade = ano - Number(fano.value) // Ano atual - ano digitado
        let genero = '' // Gênero vazio
        let img = document.createElement('img') // Criando o elemento "img" em imagem
        img.setAttribute('id', 'foto') // Cria um ID para "foto"

        if(fsex[0].checked) { // Sexo masculino marcado
            genero = 'Homem'

            if (idade >= 0 && idade < 15) { // Se a idade for maior/igual a 0 e, menor que 15 é criança
                img.setAttribute('src', 'criança-m.png')
                // Criança
            } else if (idade >= 15 && idade < 40) { // Se idade maior/igual a 15 e, menor que 40 é adulto
                img.setAttribute('src', 'adulto-m.png')
                // Adulto
            } else { // Se idade maior que 40 é idoso
                img.setAttribute('src', 'idoso-m.png')
                // Idoso
            }
        }

        if(fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'criança-f.png')
                // Criança
            } else if (idade >= 15 && idade > 40) {
                img.setAttribute('src', 'adulto-f.png')
                // Adulto
            } else {
                img.setAttribute('src', 'idoso-f.png')
                // Idoso
            }
        }

        res.innerHTML = `Foi verificado: ${genero} com ${idade} anos.` // Exibe o texto
        res.appendChild(img) // Exibe a imagem
    }
}