

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


class AtividadeDetalhe extends React.Component{
    constructor(props) {
        super(props);
        this.myElementPathBottom = null;

        this.myTweenPath = null;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTweenPath = TweenLite.to(this.myElementPathBottom, 0.1, {ease:Power3.easeOut, autoAlpha:0});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('THIS', this);

        const { nome } = this.state;
        const { tamanho } = this.state;
        const { viagem } = this.state;

        this.props.addProduto({ nome, tamanho, viagem });
        this.setState({ nome: "" , produto: "", viagem: "" });

        this.props.history.push('/pagamento');
    }

    render (){
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath />
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-start">
                    <div className="container-fluid mt-5 pt-2">

                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-4 d-flex flex-column align-items-center">
                                <h5 className="d-flex text-uppercase align-items-center font-weight-bold gray-text">Produto</h5>
                                <h3 id="nome-produto" className="h3 d-flex text-uppercase align-items-center font-weight-bold primary-text"></h3>
                                <h6 className="d-flex text-uppercase align-items-center font-weight-bold gray-text">(<span id="tamanho-produto"></span>)</h6>
                            </div>
                            <div className="col-4 d-flex flex-column align-items-center align-self-start">
                                <h5 className="d-flex text-uppercase align-items-center font-weight-bold gray-text">Preço</h5>
                                <h3 className=" h3 d-flex text-uppercase align-items-center font-weight-bold primary-text"><span id="preco-produto"></span>€</h3>
                            </div>
                        </div>

                        <div className="d-flex row justify-content-center align-items-center mt-4 mb-4">
                            <div className="col-6 d-flex flex-column justify-content-start align-items-start">
                                <div className="d-flex row align-items-center pb-3">
                                    <label className="font-weight-bold gray-text">De</label>
                                    <div id="origem" className="h6 ml-3 primary-3-text">
                                    </div>
                                </div>
                                <div className="d-flex row align-items-center">
                                    <label className="font-weight-bold gray-text">Para</label>
                                    <div className="h6 ml-3 primary-3-text" id="destino">
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 pl-5 pr-0 d-flex flex-column justify-content-between align-items-between">
                                <div className="d-flex row pb-2 align-items-center pb-3">
                                    <label className="icon-time mr-1">
                                    </label>
                                    <div className="h6 primary-3-text" id="tempo"><span id="inicio"></span>-<span id="fim"></span></div>
                                </div>
                                <div className="d-flex row align-items-center">
                                    <label className="icon-calender mr-1">
                                    </label>
                                    <div className="h6 primary-3-text" id="data"></div></div>
                            </div>
                        </div>

                        <div className="white background-white-condutor rounded ml-3 mr-3">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="pt-4 pt-1 mr-4 col-1 align-self-start d-flex flex-column align-items-center">
                                    <div className="mb-3 previewComponent-gd">
                                        <div id="image-default" className="image-default">
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-1 col-7 d-flex flex-column align-items-center">
                                    <div className="row d-flex align-items-center">
                                        <div className="pl-5 pt-2 d-flex flex-column align-items-center">
                                            <div className="row align-items-center align-self-start">
                                                <h5 className="text-uppercase align-items-center font-weight-bold primary-text">zé pedro</h5>
                                                <div className="icon-star">
                                                </div>
                                                <span id="review" className="font-weight-bold">3.5</span></div>
                                            <div className="d-flex row align-items-center">
                                                <p className="text-left">Vamos poupar tempo e dinheiro? E o nosso ambiente também!</p>
                                            </div>
                                        </div>
                                        <div className="ml-2 pl-4 d-flex flex-column align-items-center">
                                            <h6 className="font-s pb-1 align-self-start text-uppercase font-weight-bold">estado</h6>
                                            <span id="status" className="font-xs align-self-start text-uppercase font-weight-bold primary-text">entregue</span>
                                            <div className="atividade-detalhe-item row ml-3 mt-3 justify-content-start align-items-center">
                                                <div className="d-flex flex-column align-items-center">
                                                    <h6 className="font-xs pb-1 align-self-start text-uppercase font-weight-bold">hora de entrega</h6><span className="font-xs align-self-start text-uppercase font-weight-bold primary-text"><span id="tempo-entrega font-weight-bold">35</span>min</span>
                                                </div>
                                                <div className="ml-4 d-flex flex-column align-items-center">
                                                    <h6 className="font-xs pb-1 align-self-start text-uppercase font-weight-bold">tempo total</h6><span className="font-xs align-self-start text-uppercase font-weight-bold primary-text"><span id="tempo-medio font-weight-bold">35</span>min</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 mb-5 row justify-content-center align-self-center">
                                            <div className="m-2 row align-items-center primary-btn primary white-text pedido justify-content-center blue-btn">
                                                <form>
                                                    <button type="submit"
                                                            className="btn-style d-flex justify-content-center align-items-center link-no-decoration text-uppercase font-weight-bold">Aceitar
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <FooterPath pathFooter={div => this.myElementPathBottom = div} />
            </div>
        );
        }
}

export default AtividadeDetalhe;
