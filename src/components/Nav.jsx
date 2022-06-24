import React, {Fragment} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons'

const Nav = ()=>{

    return(
        <Fragment>
            <nav className="nav">
                <ul className='ul'>
                    <div className="navf">
                        <li className="li-inicio"><Link to="#inicio">
                            <p>Inicio</p>
                            
                        </Link></li>

                        <li className="li-milista"><Link to="#milista">
                            <p>Mi lista</p>
                        </Link></li>
                    </div>

                    <div className="navs">
                        <li className="li-login"><Link to="#login">
                            <p>Iniciar Sesion</p>
                            
                        </Link></li>
                        <li className="li-signup"><Link to="#signup">
                            <p>Crear Cuenta</p>
                        </Link></li>
                    </div>
                </ul>
                <span className='btn_menu'><FontAwesomeIcon icon={faBars} onClick={()=>{
                    const menu_items = document.querySelector('.ul');
                    menu_items.classList.toggle('show');
                    
                }} /></span>
            </nav>
        </Fragment>
    )
}

export default Nav;