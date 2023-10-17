import { useState } from 'react';
import style from './Card.module.css'
import comparar from './logicaGame';

let cardUno = undefined
let cardDos = undefined
let cardUnoActive = undefined
let cardDosActive = undefined

function Card({ name, imgUrl, styleActive, setStyleActive}){
    
    return(
        <>
            <div className= {`${style.card} ${styleActive}`}>

                <div className= {style.cardAdelante} >
                    <p>Pais</p>
                </div>

                <div className= {style.cardDetras} >
                    <p>{name}</p>
                    <img src={imgUrl} alt="" className={style.imgPais} />
                </div>

            </div>
        </>
    );
}

export default Card;