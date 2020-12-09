
let contador =1;
let modo=false;

function menu(){
    let nav=document.getElementById("men");
    if(contador == 1){
        nav.style.left='0%';
        contador = 0;
    } else {
        contador = 1;
        nav.style.left='-100%';
    }
}

function oscuro(){
    if (modo==false){
        document.body.setAttribute("class","dark");
        modo=true;
        let botones=document.getElementsByClassName("fas fa-moon");
        botones[0].setAttribute("class", "fas fa-sun");
        botones[0].setAttribute("class", "fas fa-sun");
        
    }else{
        document.body.removeAttribute("class");
        modo=false;
        let botones=document.getElementsByClassName("fas fa-sun");
        botones[0].setAttribute("class", "fas fa-moon");
        botones[0].setAttribute("class", "fas fa-moon");
    }
}