import React from "react";
import './Wrapper.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const Wrapper = (props)=>{

    // const items = props.items.map((item, index) =>{
    //     return <li key={item.id}> {item.title} </li>
    // })
    const redondeo = Math.round(props.item / 18) + 1;
    return( 
    <div className="wrapper">
        <h4>{
            props.currentPage === 0? null: <button onClick={props.prevHandler}><FontAwesomeIcon icon={faAngleLeft}/></button>
        }
        Pagina {props.currentPage + 1} de {redondeo}
        {
            props.currentPage+1 === redondeo? null: <button onClick={props.nextHandler}><FontAwesomeIcon icon={faAngleRight}/></button>
        }
        </h4>
    </div>
)}


export default Wrapper;