import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import '../../main.css';
import MenuPath from "./MenuPath";
import FooterPath from "./FooterPath";

class Stage extends React.Component {
    constructor(props){
        super(props);
        // reference to the DOM node
        this.myElement = null;
        // reference to the animation
        this.myTween = null;
    }

    render(){
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath />
                <div className="stage">
                    <div className="stage-items d-flex flex-column align-items-center justify-content-center">
                        <div className="m-3 logo-home"></div>
                        <div className="m-2 d-flex align-items-center justify-content-center secondary-btn primary white-text pedido blue-btn"><Link className="d-flex justify-content-center align-items-center link-no-decoration white-text" to="/pedido/">Fazer Pedido</Link></div>
                        <div className="m-2 d-flex align-items-center justify-content-center secondary-btn white primary-text viagem white-btn"><Link className="d-flex justify-content-center align-items-center link-no-decoration primary-text" to="/viagem/">Criar Viagem</Link></div>
                        <div className="scroll"></div>
                    </div>
                </div>
                <FooterPath />
            </div>
        );
    }
}

export default Stage;
