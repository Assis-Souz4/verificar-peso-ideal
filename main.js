const formulario = document.querySelector("form")
const respImc = document.querySelector("h3")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomePessoa = formulario.inNome.value;
    const masculino = formulario.inMasculino.checked;
    const altura = formulario.inAltura.value;

    let peso;
    if(masculino){
        peso = 22 * Math.pow(altura, 2)
    }else{
        peso = 21 * Math.pow(altura, 2)
    }
    respImc.style.color = "blue";
    respImc.innerText = `${nomePessoa}: Seu peso ideal é ${peso.toFixed(2)}kg`
})