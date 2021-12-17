function clicou(){
    alert("Obrigado por clicar")
}

function agradecer(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
}

function redirecionar(){
    window.open("https://www.dio.me")
    window.location.href = "https://dio.me/"
}

function trocar(elemento){
    // alert('Trocar o texto')
    // document.getElementById("mouseover").innerHTML = "Obrigado por passar o Mouse"
    elemento.innerHTML = "Obrigado por passar o Mouse"
}

function voltar(elemento){
    // document.getElementById("mouseover").innerHTML = "Mouse Over"
    elemento.innerHTML = "Mouse Over"
}

function load(){
    alert("Página carregada!!!")
}

function change(elemento){
    console.log(elemento.value)
}