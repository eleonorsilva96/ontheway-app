import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import MenuPath from "./MenuPath";
import FooterPath from "./FooterPath";

class Pagamento extends React.Component{
    constructor(props) {
        super(props);
        this.myElementPath = null;
        this.myElementDiv = null;
        this.myElementTelemovel = null;

        this.myTweenPath = null;
        this.myTweenDiv = null;
        this.myTweenTelemovel = null;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("click");
        this.myTweenDiv = TweenLite.to(this.myElementDiv, 0.1, {ease:Power3.easeOut, display:"none"});
        this.myTweenTelemovel = TweenLite.to(this.myElementTelemovel, 1.5 , {ease:Power3.easeOut, autoAlpha:1, display:"block"}, '-=2');
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTweenPath = TweenLite.to(this.myElementPath, 0.1, {ease:Power3.easeOut, autoAlpha:0});
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
                            <div className="padding-bottom-pagamento d-flex flex-column justify-content-center align-items-center h-100">
                                <h4 className="text-uppercase primary-text font-weight-bold pb-3">pagamento</h4>
                                <div className="pagamento mt-3 row align-self-center justify-content-center align-items-center">
                                    <div ref={div => this.myElementDiv = div} className="pagamento-div inherit flex-column justify-content-center align-items-center">
                                        <div className="d-flex inherit flex-row justify-content-between">
                                            <div className="mbway">
                                            </div>
                                            <input onClick={this.handleClick} type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                        </div>
                                        <div className="d-flex inherit flex-row justify-content-between">
                                            <div className="mb">
                                            </div>
                                            <input type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                        </div>
                                        <div className="d-flex inherit flex-row justify-content-between">
                                            <div className="paypal">
                                            </div>
                                            <input type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                                        </div>
                                    </div>

                                    <div ref={div => this.myElementTelemovel = div} className="telemovel d-flex inherit flex-column justify-content-center align-items-center">
                                        <label className="align-self-start">Nº telemóvel</label>
                                        <input type="text" placeholder="Nºtelemóvel" id="telemovel" className="m-2 input-telemovel form-control-lg" required/>
                                        <div className="mt-4 mb-4 row justify-content-center align-self-center">
                                            <div className="m-2 row align-items-center primary-btn primary white-text pedido justify-content-center blue-btn">
                                                <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/atividade/">
                                                    Pagar
                                                </Link> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <FooterPath pathRef={div => this.myElementPath = div} />
            </div>
        );
    }
}

export default Pagamento;
