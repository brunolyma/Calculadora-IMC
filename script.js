const calculate = document.querySelector('#calculate')

function imc() {
    const name = document.querySelector('#name').value
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const res = document.querySelector('#sub-container')
    let clas = ''
    if(!name || !height || !weight) {
        alert('Preencha todos os campos')
    } else {
        const total = (weight / (height * height)).toFixed(2)
        if(total < 18.5) {
            clas = 'Classificação: MAGREZA'
        } else if(total == 18.6 || total < 24.9) {
            clas = 'Classificação: NORMAL'
        } else if(total == 25 || total < 29.9) {
            clas = 'Classificação: SOBREPESO'
        } else if(total == 30 || total < 39.9) {
            clas = 'Classificação: OBESIDADE'
        } else if(total >= 40) {
            clas = 'Classificação: OBESIDADE GRAVE'
        }
        res.innerText = `${name}, seu peso ideal é: ${total}kg/m2\n${clas}`
    }
}
calculate.addEventListener('click', imc)
const input = document.querySelectorAll(".input")
input[2].addEventListener("keypress", function(event) {
    if(event.key === 'Enter') {
        event.preventDefault()
        calculate.click()
    }
})


