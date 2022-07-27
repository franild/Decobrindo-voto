var nome = document.querySelector('input#nome')
var idade = document.querySelector('input#idade')
var res = document.querySelector('div#res')

function voto(){
  if (nome.value.length == 0 || idade.value.length == 0) {
    window.alert('Por favor, preencha os campos corretamente!')
  } else {
    res.innerHTML = ""
    var item = document.createElement('h2')
    if(idade.value < 16){
      item.innerHTML = `Olá, ${nome.value}, você ainda não pode votar.<br>Idade permitida para voto é maior ou igual a 16 anos.`
    } else if(idade.value >= 16 && idade.value < 18){
      item.innerHTML = `Olá, ${nome.value}, seu voto é opcional.`
    } else if(idade.value >= 18 && idade.value <= 70){
      item.innerHTML = `Olá, ${nome.value}, seu voto é obrigatório.`
    } else {
      item.innerHTML = `Olá, ${nome.value}, seu voto é opcional.`
    }
    res.appendChild(item)
  }
}

