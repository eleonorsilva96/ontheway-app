import React from "react";
import { Link } from "react-router-dom";

import '../../main.css';

const Menu = props => (

    <div className="menu p-1 z-index d-flex justify-content-around bars white shadow">
        <div className="p-2 primary-gray text-uppercase">pedidos</div>
        <div className="p-2 primary-gray text-uppercase">viagens</div>
    </div>
);

export default Menu;
