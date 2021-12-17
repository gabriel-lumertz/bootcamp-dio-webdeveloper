function soma(a, b){
    return a + b
}

alert(soma(5, 10))

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Cuba"))

function validaIdade(idade){
    let validar
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

let idade = prompt("Qaul a sua idade?")
alert(validaIdade(idade))