import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container mt-3">
            <div className="row align-items-center header">
                <div className="col-2">
                    <Link to="/home"><img className="logo" src={logo} alt="" /></Link> 
                </div>
                <div className="col-10">
                    <nav className="nav">
                        <ul className="ml-auto">
                            <li className="">
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/destination/bike">Destination</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;

// Login.user? Name : login-btn