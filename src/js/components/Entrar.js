//TODO colocar verificacoes na password

import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import MenuPath from "./MenuPath";

class Entrar extends React.Component{
    constructor(props) {
        super(props);
    }

    render (){
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath />
                <div className="stage-no-photo-entrar white-back d-flex flex-column align-items-center justify-content-center">
                    <div className="container-fluid">
                        <h3 className="text-center primary-text font-weight-bold h2">Entrar</h3>
                        <form>
                            <div className="spacing-top row justify-content-center">
                                <label className="mr-3 mb-0 align-self-center gray-text">E-mail</label>
                                <input type="email" placeholder="E-mail" className="w-50 m-2 form-control-lg" required/>
                            </div>
                            <div className="row justify-content-center mr-4 pl-3"><label
                                className="mr-3 mb-0 align-self-center gray-text">Password</label>
                                <input type="password" placeholder="Password" className="input-width-entrar m-2 form-control-lg" required/>
                            </div>
                            <div className="spacing-bottom spacing-top-b row justify-content-center align-self-center">
                                <button type="submit" className="m-2 row align-items-center primary-btn primary white-text pedido justify-content-center blue-btn">
                                    <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/home/">Entrar</Link>
                                </button>
                            </div>
                        </form>
                        <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/home/">Entrar</Link>
                        <h5 className="font-size-entrar line-height-entrar text-center gray-text font-weight-normal h4">Já registou uma conta?<br/>
                            <span className="letter-spacing-entrar primary-text text-uppercase font-weight-bold"> <Link className="link-no-decoration" to="/registar/">Registar</Link></span>
                        </h5>
                    </div>
                </div>
            </div>
            );
    }
}

export default Entrar;
