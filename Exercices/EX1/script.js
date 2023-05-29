function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date() // Dia atual
    let hora = data.getHours() // Hora atual
    
    msg.innerHTML = `Agora são ${hora} horas.` // Exibe mensagem da hora
    if (hora => 0 && hora < 12) { // Se "hora" for maior/igual ou menor que 12, exibe a imagem de "Bom dia"
        img.src = 'fotomanha.png'
        // Bom dia
    } else if (hora >= 12 && hora <18) { // Se for maior/igual ou menor que 18, exibe a imagem de "Boa tarde"
        img.src = 'fototarde.png'
        // Boa tarde
    } else { // Caso contrario, exibe imagem de "Boa noite"
        img.src = 'fotonoite.png'
        // Boa noite
    }
}
