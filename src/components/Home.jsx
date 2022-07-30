import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import Wrapper from "./Wrapper";

const Home = ()=>{
    const ITEMS_PER_PAGE = 18;
    const [data, setData] = useState([]);
    const [count, setCount] = useState();
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const obtenerDatos = async()=>{
        await fetch('https://jush-anime.herokuapp.com/api/animes/')
        .then(response => response.json())
        .then(dat => {
            setData(dat.animes);
            setCount(dat.count);
            setItems([...dat.animes].splice(0, ITEMS_PER_PAGE));
        });
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

    const nextHandler = () =>{
        const totalElements = count;
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * ITEMS_PER_PAGE;

        if (firstIndex >= totalElements ) return;

        setItems([...data].splice(firstIndex, ITEMS_PER_PAGE))
        setCurrentPage(nextPage);
    }

    const prevHandler = () =>{
        const prevPage = currentPage - 1;

        if(prevPage < 0) return;
        const firstIndex = prevPage * ITEMS_PER_PAGE;

        setItems([...data].splice(firstIndex, ITEMS_PER_PAGE))
        setCurrentPage(prevPage);
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
                        items.map((info)=>{
                            return(
                                <Link placeholder={info.name} key={info._id} to={`/anime/${info.slug}`}><li className={info.name}>
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
                    <Wrapper currentPage={currentPage} item={count} nextHandler={nextHandler} prevHandler={prevHandler}/>
                </article>
            </div>
        </Fragment>
    )
}

export default Home;