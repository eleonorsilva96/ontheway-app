

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
    /*
    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenLite.to(this.myElement, 1, {display:"none"});
    }
*/
    render (){
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath />
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-start">
                    <div className="container-fluid mt-5 pt-2">

                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-4 d-flex flex-column align-items-center">
                                <h5 className="d-flex text-uppercase align-items-center font-weight-bold gray-text">Produto<span id="num-produto">03</span></h5>
                                <h5 id="nome-produto" className="d-flex text-uppercase align-items-center font-weight-bold primary-text">Poltrona</h5>
                                <h6 className="d-flex text-uppercase align-items-center font-weight-bold gray-text">(<span id="tamanho-produto">grande</span>)</h6>
                            </div>
                            <div className="col-4 d-flex flex-column align-items-center align-self-start">
                                <h5 className="d-flex text-uppercase align-items-center font-weight-bold gray-text">Preço</h5>
                                <h5 id="preco-produto" className="d-flex text-uppercase align-items-center font-weight-bold primary-text">Poltrona</h5>
                            </div>
                        </div>

                        <div className="d-flex row justify-content-center align-items-center mt-5">
                            <div className="col-6 d-flex flex-column justify-content-start align-items-start">
                                <div className="d-flex row align-items-center"><label>De</label>
                                    <h6 id="origem" className="ml-3">IKEA, Porto</h6></div>
                                <div className="d-flex row align-items-center"><label>Para</label>
                                    <h6 className="ml-3" id="destino">Campus Santiago, Aveiro</h6></div>
                            </div>
                            <div className="col-3 d-flex flex-column justify-content-between align-items-between">
                                <div className="d-flex row pb-2"><label className="icon-time"></label>
                                    <h6 id="tempo"><span id="inicio">19:00</span>:<span id="fim">20:00</span></h6></div>
                                <div className="d-flex row"><label className="icon-calender"></label><h6 id="data">19/12/18</h6></div>
                            </div>
                        </div>

                        <div className="white">
                                <div className="row d-flex align-items-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="m-3 previewComponent-md">
                                            <div id="image-default" className="image-default">
                                            </div>
                                        </div>
                                        <h6 className="text-uppercase font-weight-bold">tempo médio</h6>
                                        <h6 className="text-uppercase font-weight-bold"><span id="tempo-medio">35</span>min</h6>
                                    </div>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="row d-flex align-items-center">
                                            <div className="d-flex flex-column align-items-center">
                                                <h5 className="text-uppercase font-weight-bold">viagens realizadas</h5>
                                                <div className="w-25 rounded-circle white shadow"><span className="primary-text" id="nr-viagens">6</span></div>
                                            </div>
                                            <div className="d-flex flex-column align-items-center">
                                                <h5 className="text-uppercase font-weight-bold">amigos em comum</h5>
                                                <div className="w-25 rounded-circle white shadow"><span className="primary-text" id="nr-amigos">6</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">

                                </div>
                        </div>

                    </div>
                </div>
                <FooterPath />
            </div>
        );
    }
}

export default Condutor;
