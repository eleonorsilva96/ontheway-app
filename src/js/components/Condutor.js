

import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import Image from "./Image";
import DatePicker from "react-datepicker";
import FooterPath from "./FooterPath";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'react-datepicker/node_modules/date-fns/locale/pt';
import MenuPath from "./MenuPath";
registerLocale('pt', pt);
setDefaultLocale('pt');

class Condutor extends React.Component{
    constructor(props) {
        super(props);
        this.myElement = null;
        this.myTween = null;
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenLite.to(this.myElement, 1, {ease:Power3.easeOut, autoAlpha:0}, '-=200');
    }

    render (){
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath />
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-start">
                    <div className="container-fluid mt-5 pt-2">

                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-4 d-flex flex-column align-items-center">
                                <h5 className="d-flex text-uppercase align-items-center font-weight-bold gray-text">Produto<span className="h6 pl-1" id="num-produto">03</span></h5>
                                <h3 id="nome-produto" className="h3 d-flex text-uppercase align-items-center font-weight-bold primary-text">Poltrona</h3>
                                <h6 className="d-flex text-uppercase align-items-center font-weight-bold gray-text">(<span id="tamanho-produto">grande</span>)</h6>
                            </div>
                            <div className="col-4 d-flex flex-column align-items-center align-self-start">
                                <h5 className="d-flex text-uppercase align-items-center font-weight-bold gray-text">Preço</h5>
                                <h3 className=" h3 d-flex text-uppercase align-items-center font-weight-bold primary-text"><span id="preco-produto">15</span>€</h3>
                            </div>
                        </div>

                        <div className="d-flex row justify-content-center align-items-center mt-4 mb-4">
                            <div className="col-6 d-flex flex-column justify-content-start align-items-start">
                                <div className="d-flex row align-items-center pb-3">
                                    <label className="font-weight-bold gray-text">De</label>
                                    <div id="origem" className="h6 ml-3 primary-3-text">IKEA, Porto</div>
                                </div>
                                <div className="d-flex row align-items-center">
                                    <label className="font-weight-bold gray-text">Para</label>
                                    <div className="h6 ml-3 primary-3-text" id="destino">Campus Santiago, Aveiro</div></div>
                            </div>
                            <div className="col-4 pl-5 pr-0 d-flex flex-column justify-content-between align-items-between">
                                <div className="d-flex row pb-2 align-items-center pb-3">
                                    <label className="icon-time mr-1">
                                    </label>
                                    <div className="h6 primary-3-text" id="tempo"><span id="inicio">19:00</span>-<span id="fim">20:00</span></div>
                                </div>
                                <div className="d-flex row align-items-center">
                                    <label className="icon-calender mr-1">
                                    </label>
                                    <div className="h6 primary-3-text" id="data">19/12/18</div></div>
                            </div>
                        </div>

                        <div className="white background-white-condutor rounded ml-3 mr-3">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="pt-5 mr-4 col-2 align-self-start d-flex flex-column align-items-center">
                                    <div className="mb-3 previewComponent-gd">
                                        <div id="image-default" className="image-default">
                                        </div>
                                    </div>
                                    <h6 className="h6 pb-1 align-self-start text-uppercase font-weight-bold">tempo<br/>médio</h6>
                                    <span className="font-xs align-self-start text-uppercase font-weight-bold primary-text"><span id="tempo-medio font-weight-bold">35</span>min</span>
                                </div>
                                <div className="pt-4 col-7 d-flex flex-column align-items-center">
                                    <div className="row d-flex align-items-center">
                                        <div className="m-3 d-flex flex-column align-items-center">
                                            <h5 className="h4 pb-3 text-uppercase font-weight-bold text-center">viagens<br/>realizadas</h5>
                                            <div className="circle-size d-flex align-items-center justify-content-center rounded-circle white shadow">
                                                <span id="nr-viagens" className="h5 primary-text font-weight-bold">6</span>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 flex-column align-items-center">
                                            <h5 className="h4 pb-3 text-uppercase font-weight-bold text-center">amigos<br/>em comum</h5>
                                            <div className="circle-size d-flex align-items-center justify-content-center rounded-circle white shadow">
                                                <span id="nr-amigos" className="h5 primary-text font-weight-bold">6</span>
                                            </div>
                                        </div>
                                        <div className="pl-5 pt-2 d-flex flex-column align-items-center">
                                            <div className="row align-items-center align-self-start">
                                                <h5 className="text-uppercase align-items-center font-weight-bold primary-text">Zé Pedro</h5>
                                                <div className="icon-star">
                                                </div>
                                                <span id="review" className="font-weight-bold">3.5</span>
                                            </div>
                                            <div className="d-flex row align-items-center">
                                                <p className="text-left">Vamos poupar tempo e dinheiro? E o nosso ambiente também!</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 mb-4 row justify-content-center align-self-center">
                                            <div className="m-2 row align-items-center primary-btn primary white-text pedido justify-content-center blue-btn">
                                                <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/review/">
                                                    Aceitar
                                                </Link> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <FooterPath pathRef={div => this.myElement = div} />
            </div>
        );
    }
}

export default Condutor;
