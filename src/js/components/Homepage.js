import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import FooterPath from "./FooterPath";

class Homepage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid h-100 p-0">

                <div className="stage-homepage">
                </div>

                <div className="stage-items-homepage d-flex flex-column align-items-center justify-content-center">
                    <div className="m-3 logo-home">
                    </div>
                    <div className="m-2 d-flex align-items-center justify-content-center secondary-btn primary white-text pedido blue-btn"><Link className="d-flex justify-content-center align-items-center link-no-decoration white-text btn-size" to="/entrar/">Entrar</Link></div>
                    <div className="m-2 d-flex align-items-center justify-content-center secondary-btn white primary-text viagem white-btn"><Link className="d-flex justify-content-center align-items-center link-no-decoration primary-text btn-size" to="/registar/">Registar</Link></div>
                </div>
            </div>
        );
    }
}

export default Homepage;
