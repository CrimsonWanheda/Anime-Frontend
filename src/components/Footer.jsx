import React, { Fragment} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = ()=>{

    return(
        <Fragment>
            <footer>
                <a href='https://github.com/CrimsonWanheda'><FontAwesomeIcon icon={faGithub} /> | CrimsonWanheda </a>
                <p>©2022 The Parchment. Todos los derechos reservados.</p>
            </footer>
        </Fragment>
    )
}

export default Footer;