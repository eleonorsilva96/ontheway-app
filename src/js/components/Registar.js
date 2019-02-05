//TODO imagem caminhos, atualizar campos, margens

import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import MenuPath from "./MenuPath";

import { connect } from "react-redux";
import { addUser } from "../actions/users";

const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch(addUser(user))
    };
};

class Registar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            apelido: "",
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { nome } = this.state;
        const { apelido } = this.state;
        const { email } = this.state;
        const { password } = this.state;
        
        this.props.addUser({ nome, apelido, email, password });
        this.setState({ nome: "" , apelido: "", email: "", password: ""});

        this.props.history.push('/home');
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render (){
        const { nome, apelido, email, password } = this.state;
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath />
                <div className="stage-no-photo-entrar white-back d-flex flex-column align-items-center justify-content-center">
                    <div className="container-fluid">
                        <h3 className="text-center primary-text font-weight-bold h2">Registar</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="spacing-top row justify-content-center">
                                <label className="mr-3 mb-0 align-self-center gray-text">Nome</label>
                                <input type="text" id="nome" value={nome} onChange={this.handleChange} placeholder="Nome" className="w-50 m-2 form-control-lg" required/>
                            </div>
                            <div className="row justify-content-center mr-4 pl-4">
                                <label className="mr-3 mb-0 align-self-center gray-text">Apelido</label>
                                <input type="text" id="apelido" value={apelido} onChange={this.handleChange} placeholder="Apelido" className="input-width-entrar m-2 form-control-lg" required/>
                            </div>
                            <div className="row justify-content-center">
                                <label className="mr-3 mb-0 align-self-center gray-text">E-mail</label>
                                <input type="email" id="email" value={email} onChange={this.handleChange} placeholder="E-mail" className="w-50 m-2 form-control-lg" required/>
                            </div>
                            <div className="row justify-content-center mr-4 pl-3">
                                <label className="mr-3 mb-0 align-self-center gray-text">Password</label>
                                <input type="password" id="password" value={password} onChange={this.handleChange} placeholder="Password" className="input-width-entrar m-2 form-control-lg" required/>
                            </div>
                            <div className="spacing-bottom spacing-top-b row justify-content-center align-self-center">
                                <button type="submit" className="m-2 row align-items-center primary-btn primary white-text pedido justify-content-center blue-btn">
                                    {/* <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/home/"> */}
                                    Registar
                                    {/* </Link> */}
                                </button>
                            </div>
                        </form>

                        <h5 className="font-size-entrar line-height-entrar text-center gray-text font-weight-normal h4">Já registou uma conta?<br/>
                            <span className="letter-spacing-entrar primary-text text-uppercase font-weight-bold"> <Link className="link-no-decoration" to="/entrar/">Entrar</Link></span>
                        </h5>
                    </div>
                </div>
            </div>
            );
    }
}

const RegistarExp = connect(null, mapDispatchToProps)(Registar);
export default RegistarExp;
