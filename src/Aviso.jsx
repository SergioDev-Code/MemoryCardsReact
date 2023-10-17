import style from './Aviso.module.css'

function Aviso({ itemContador, styleAviso }){
    
    return(
        <div className={`${style.aviso} ${styleAviso}}`}>

            <p className={style.contador}>{itemContador}</p>

        </div>
    );
}

export default Aviso;