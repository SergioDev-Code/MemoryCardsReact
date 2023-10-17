import { useState, useEffect } from 'react'
import Select from 'react-select'
import Card from './Card'
import Aviso from './Aviso'
import style from './Game.module.css'
import styleCard from './Card.module.css'
import styleAviso from './Aviso.module.css'
import mainApi from './api'

const data = await mainApi(3);
let intervalo = undefined
function Game() {

  let idItem = 1;
  
  const [actives, setActives] = useState(styleCard.active);
  let [contador, setContador] = useState(6);
  const [activeAviso, setActiveAviso] = useState();

  intervalo = setTimeout(() => {

    if ( contador != 0) {
      setContador( contador - 1 )
    }else{
      setActives()
      setActiveAviso(styleAviso.desactive)
      clearInterval(intervalo)
    }
    console.log("intervalo")
  }, 1000);

  return(
    <div className={style.contenedor}>
      <div className={style.contenedorCabezera}>
        <div>

        </div>
      </div>

      <div className={style.contenedorCartas}>
        {
          data.map( (datas)=>(
            <Card key={datas.idd.suffixes+datas.idd.root+`${idItem++}`} name={datas.name.common} imgUrl={datas.flags.png} styleActive = {actives} setStyleActive = {setActives}></Card>

          ))
        }

        <Aviso itemContador={ contador } styleAviso={ activeAviso }></Aviso>
      </div>

    </div>
  )
}

export default Game;