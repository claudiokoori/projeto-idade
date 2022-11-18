function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //usar o getElementsByName para pegar dentro do name e usar os dois como podemos ver agr, usar [0] para selecionar de acordo com a ordem, lembrando que a contagem sempre começa no 0
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'images/foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}