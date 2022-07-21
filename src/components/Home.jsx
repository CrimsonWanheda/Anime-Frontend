import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = ()=>{
    const [data, setData] = useState([]);
    const obtenerDatos = async()=>{
        await fetch('https://jush-anime.herokuapp.com/api/animes/')
        .then(response => response.json())
        .then(dat => setData(dat.animes));
    }
    const acortaTitle = (title)=>{
        var number = 19;
        var end = 16;
        if(window.matchMedia('(max-width: 596px)').matches === true){
            number = 17;
            end = 14;
        }
        if(title.length > number){
            
            return title.substring(0, end) + "...";
        }
        return title
    }

    useEffect(()=>{
        obtenerDatos();
    }, [])

    return(
        <Fragment>
            <h2 className="selecFilter">Top mensual</h2>
            <div className="content">
                <article className="listanimes">
                    <ul>
                    {
                        data.map((info)=>{
                            return(
                                <Link placeholder={info.name} key={info._id} to={`/anime/${info._id}`}><li className={info.name}>
                                        <img placeholder={info.name} src={info.image.secure_url} alt={info.name} />
                                        <div className="textanime">
                                            <p placeholder={info.name} className="animetitle">{acortaTitle(info.name)}</p>
                                            <p className="score"><FontAwesomeIcon icon={faStar} className="starScore"/> 4.5/5</p>
                                        </div>
                                    </li></Link>
                            )
                        })
                    }
                    </ul>
                </article>
            </div>
        </Fragment>
    )
}

export default Home;