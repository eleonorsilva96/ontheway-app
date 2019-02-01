import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import MenuPath from "./MenuPath";
import FooterPath from "./FooterPath";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'react-datepicker/node_modules/date-fns/locale/pt';
registerLocale('pt', pt);

setDefaultLocale('pt');

import Rating from 'react-rating';


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
                    <div className="container-fluid mt-2">
                        <div className="row d-flex justify-content-center align-items-center mt-1 mb-1 gray-text">
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
                                        <div className="d-flex row align-items-center gray-2-text">
                                            <p className="text-left">Vamos poupar tempo e dinheiro? E o nosso ambiente também!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="white background-white-review rounded ml-3 mr-3">
                            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                <h4 className="text-uppercase primary-text font-weight-bold pt-3">avaliação</h4>
                                <div id="stars-review" className="mt-2 mb-2">
                                    <Rating emptySymbol={<img src="/imgs/icons/star.png" className="icon-star-review" />}
                                            fullSymbol={<img src="/imgs/icons/star_complete.png" className="icon-star-review" />} />
                                </div>
                                <div className="comment-review">
                                    <form className="d-flex flex-column justify-content-center h-100">
                                        <textarea className="textarea-review p-2 rounded" placeholder="Descreva o serviço prestado">
                                        </textarea>
                                        <div className="mt-4 mb-4 align-self-center">
                                            <div className="m-2 row align-items-center primary-btn primary white-text pedido justify-content-center blue-btn">
                                                <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/review/">
                                                    Enviar
                                                </Link> </div>
                                        </div>
                                    </form>
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
