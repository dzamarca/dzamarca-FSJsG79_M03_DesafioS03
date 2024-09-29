/*
** PUNTO 2.1 
function pintar(){
    ele.style.backgroundColor = 'yellow'
}
const ele = document.querySelector("#ele1")
ele.addEventListener("click",pintar)
*/

function pintar(aa,color = "green"){
    aa.style.backgroundColor = color
}

const ele = document.querySelector("#ele1")
pintar(ele)
ele.addEventListener("click",()=> pintar(ele,"yellow"))





