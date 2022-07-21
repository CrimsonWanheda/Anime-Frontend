import React, { Fragment} from "react";
import './NotFound.css';
import image from '../../img/NotFoundImage.jpg';

const NotFound = () => {

    return(
        <Fragment>
            <div className="notFoundContainer">
                <h1>404</h1>
                <h4>Lo sentimos, busca nuevamente el anime o ponte en contacto con nosotros</h4>
                <img src={image} alt="Not Found" />
            </div>
        </Fragment>
    )

}

export default NotFound;