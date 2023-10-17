
function comparar(cardUno, cardDos, cardUnoActive, cardDosActive, contenedor){
    let contenidoUno = cardUno.children[1].children[0].textContent;
    let contenidoDos = cardDos.children[1].children[0].textContent;

    if (contenidoUno === contenidoDos) {
        console.log("Iguales")
        contenedor.style.pointerEvents = "auto"
        
    }else{
        console.log("Diferentes")
       
        setTimeout(() => {
            cardUnoActive(undefined)
            cardDosActive(undefined)
            contenedor.style.pointerEvents = "auto"
            
        }, 900);
    }

}

export default comparar;