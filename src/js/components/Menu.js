import React from "react";
import { Link } from "react-router-dom";


const Menu = () => (
    <div className="blog-masthead">
        <div className="container">
            <nav className="nav blog-nav">
                <a >
                    <Link className="nav-link" to="/">Home</Link>
                </a>
                <a >
                    <Link className="nav-link" to="/criar/">Criar Artigos</Link>
                </a>
            </nav>
        </div>
    </div>
);

export default Menu;
