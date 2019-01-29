import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import '../../main.css';

const Menu = () => (
    <div className="menu p-1 d-flex justify-content-between bars white shadow">
        <div className="p-2 small-logo transparent"></div>
        <div className="p-2 primary-gray">PÁGINA PRINCIPAL</div>
        <div className="p-2">image</div>
    </div>
);

export default Menu;
