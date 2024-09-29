
function boxNegro(elemento){
    let boxCambioColor = document.querySelector(`#${elemento}`)
    boxCambioColor.style.backgroundColor = 'black'
}

document.addEventListener("click",(e)=>boxNegro(e.target.id))
