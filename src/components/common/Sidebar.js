import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Logo = () => {
    return (
        <div className="logo">
            <h1>
                <Link to="/" className="logo-text">
                    Cryptos
                </Link>
            </h1>
        </div>
    );
};

export default function Sidebar() {
    return (
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <Logo />
                        <div className="toggler">
                            <a
                                href="#"
                                className="sidebar-hide d-xl-none d-block"
                            >
                                <i className="bi bi-x bi-middle"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">Menu</li>
                        <li className="sidebar-item active ">
                            <a href="index.html" className="sidebar-link">
                                <i className="bi bi-grid-fill" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <button className="sidebar-toggler btn x">
                    <i data-feather="x" />
                </button>
            </div>
        </div>
    );
}
