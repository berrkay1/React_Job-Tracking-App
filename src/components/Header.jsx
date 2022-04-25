import React from 'react'
import logo from '../images/logo.png';
import '../components/Styles/Header.scss'
import Divider from '@mui/material/Divider';

function Header() {
    return (
        <>
            <div className="header">
                <img src={logo} alt="logo" />
                <div className="logo-text">LOGO</div>

            </div>
            <Divider />
        </>
    )
}

export default Header