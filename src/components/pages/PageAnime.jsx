import React,{ Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './PageAnime.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar, faMinus} from '@fortawesome/free-solid-svg-icons';
import Star from '../Rate/Stars.jsx';


const PageAnime = ()=>{
    const [nameAnime, setNameAnime] = useState([]);
    const [descriptionAnime, setDescriptionAnime] = useState([]);
    const [lauchingAnime, setLauchingAnime] = useState([]);
    const [imageAnime, setImageAnime] = useState([]);
    let { animeId } = useParams();
    const logeado = true //Esto va a ser para verificar cuando este logeado //En este caso suponemos que esta logeado
    const add = true //Esto es para verificar si esta añadido o no a la lista //En este caso suponemos que esta añadido
    const [state, setState] = useState(add)

    
    useEffect(()=>{
        const oneAnime = async()=>{
            await fetch(`https://jush-anime.herokuapp.com/api/animes/${animeId}`)
            .then(response => response.json())
            .then(function(data){
                setNameAnime(data.name);
                setDescriptionAnime(data.description);
                setLauchingAnime(data.lauching);
                setImageAnime(data.image.secure_url);
            });
        }
        oneAnime();
        //ranking();
    }, [animeId, nameAnime, descriptionAnime, lauchingAnime, imageAnime, add, state])

    return(
        <Fragment>
            <div className="contentAnime">
                <article className="information">
                    <div className="infoini">
                        <img src={imageAnime} alt={nameAnime} />
                        <Star/>
                    </div>
                    <div className="infoAnime">
                        <h2>{nameAnime}<span className="scoreG"><FontAwesomeIcon className="icon" icon={faStar}/>(4/5)</span></h2>
                        {logeado === true ?
                        //Falta hacer que cuando le picas a - ó + cambie el icono 
                            <FontAwesomeIcon 
                                className="plus" 
                                icon={add === false ? faPlus : faMinus}
                                onClick={()=>{
                                    if (state === add){
                                        document.querySelector('.rating').classList.toggle('discover')
                                        setState(Boolean(state * false))
                                    }
                                }}
                                // onChange={()=>{
                                //     if(state === true){
                                //         document.querySelector('.rating').classList.toggle('discover')
                                //     }
                                // }}
                            />
                        : null}
                        <h3>({lauchingAnime})</h3>
                        <p>{descriptionAnime}</p>
                    </div>
                </article>
            </div>
        </Fragment>
    )
}

export default PageAnime;