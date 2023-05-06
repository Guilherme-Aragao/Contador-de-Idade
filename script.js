function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fAno = document.getElementById('txtano')
var res = document.querySelector('div#resultado')
if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        
        if (idade >=0 && idade < 10){
            //Criança
            img.setAttribute('src', 'bebehomem.png')
        } else if (idade <= 23) {
            //Jovem
            img.setAttribute('src', 'jovemhomem.png')
        } else if (idade <50) {
            //Adulto
            img.setAttribute('src', 'adultohomem.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosohomem.png')
        }
    } 
    
    else if (fsex[1].checked){
        gênero = 'Mulher'

        if (idade >=0 && idade < 11){
            //Criança
            img.setAttribute('src', 'bebemulher.png')
        } else if (idade < 23) {
            //Jovem
            img.setAttribute('src', 'jovemmulher.png')
        } else if (idade <50) {
            //Adulto
            img.setAttribute('src', 'adultomulher.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosamulher.png')
        }
     }
    
    res.style.textAlign = 'center'
    res.innerHTML = `Dectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}
    
}