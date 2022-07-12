import React, {Fragment} from "react";
import Nav from './Nav.jsx';
import titlePage from '../img/Title page.png';
import profile from '../img/profile.png';
import './Header.css';

const Header = ()=>{

    return(
        <Fragment>
            <header className="sectionTitle">
                <p className='titlePagemin'>The Parchment</p>
                <span className="ladoIzq"></span>
                <img className="titlePage" src={titlePage} alt="the pachment" />
                <span className="ladoDer"></span>
                <div className="photoProfile">
                    <div className="profileImage"><img src={profile} alt="profile" /></div>
                    <p>The_Maker2</p>
                </div>
            </header>
            <Nav/>
        </Fragment>
    )
}

export default Header;