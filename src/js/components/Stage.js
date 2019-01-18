import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import '../../main.css';
import img from '../../imgs/logo_home.png';

const Stage = () => (
    <div className="stage">
        <div className="stage-items d-flex flex-column align-items-center justify-content-center">
            <div className="m-3 logo-home"></div>
            <div className="m-2 d-flex align-items-center justify-content-center primary-btn primary white-text pedido"><Link className="white-text" to="/pedido/">Fazer Pedido</Link></div>
            <div className="m-2 d-flex align-items-center justify-content-center primary-btn white primary-text viagem">Criar Viagem</div>
            <div className="scroll"></div>
        </div>
    </div>
);

export default Stage;
