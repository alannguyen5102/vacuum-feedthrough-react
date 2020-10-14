import React from 'react';
import './NavBar.scss';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button className="navbar-btn navbar-toggle collapsed" type='button' data-toggle='collapse' data-target='#hamburger-menu' aria-expanded='false'>
                            <span className="sr-only">
                                Toggle navigation
                            </span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#" className="navbar-brand">
                            <img src="./images/Logo.png"></img>
                        </a>
                    </div>

                    <div id="hamburger-menu" className="collapse navbar-collapse navbar-right">
                        <a href="tel:510-274-1990" className="navbar-text">
                            510-274-1990
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}
