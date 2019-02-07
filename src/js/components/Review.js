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
import Feedback from "./Feedback";

import { connect } from "react-redux";
import { addReview } from "../actions/reviews";

const mapDispatchToProps = dispatch => {
    return {
      addReview: review => dispatch(addReview(review)),
    };
};

class Review extends React.Component{
    constructor(props) {
        super(props);

        this.myElementPagamento = null;
        this.myElementFeedback = null;
        this.myElementFeedbackImg = null;
        this.myElementPedidoImg = null;

        this.myElementFeedbackTitle = null;
        this.myElementFeedbackSubTitle = null;
        this.myElementFeedbackBtnTopDiv = null;
        this.myElementFeedbackBtnBottom = null;

        this.myElementMenuTitle= null;
        this.myElementPath = null;
        this.myElementMenu = null;

        this.myTweenFP = new TimelineLite();

        const info = this.props.history.location.state.user;
        console.log('Info',info);

        this.state = {
            user_id: info.user.id,
            viagems_id: info.id,
            nota: 4,
            comentario: "Gostei muito",

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFeedback() {
        this.myTweenFP
            .to(this.myElementPagamento, 0.5, {ease:Power3.easeOut, autoAlpha:0, display:"none"}, "stage-no-photo-display")
            .to(this.myElementFeedback, 1, {ease:Power3.easeOut, autoAlpha:1, display:"flex"}, "stage-no-photo-display")
            .to(this.myElementFeedbackImg, 0.1, {ease:Power3.easeOut, src:"/imgs/icons/star_green.png"}, "stage-no-photo-display")

            .to(this.myElementFeedbackTitle, 0.5, {ease:Power3.easeOut, innerHTML:"avaliação<br/> enviada com <br/> sucesso"}, "stage-no-photo-display")
            .to(this.myElementFeedbackSubTitle, 0.5, {ease:Power3.easeOut, innerHTML:"Obrigada por melhorar <br/> o nosso serviço!"}, "stage-no-photo-display")
            .to(this.myElementFeedbackBtnTopDiv, 0.1, {ease:Power3.easeOut, display:"none"}, "stage-no-photo-display")
            .to(this.myElementFeedbackBtnBottom, 0.5, {ease:Power3.easeOut, innerHTML:"página principal"}, "stage-no-photo-display")

            .to(this.myElementPath, 0.1, {ease:Power3.easeOut, autoAlpha:1}, "stage-no-photo-display")
        ;
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTweenFP
            .to(this.myElementPath, 0.1, {ease:Power3.easeOut, autoAlpha:0}, "bottom-path")
            .to(this.myElementPedidoImg, 0.1, {ease:Power3.easeOut, backgroundImage:'url(/imgs/icons/activity_active.png)'}, "bottom-path")
            .to(this.myElementMenuTitle, 0.5, {ease:Power3.easeOut, innerHTML:"Atividade"}, "bottom-path")
            .to(this.myElementMenu, 1, {ease:Power3.easeOut, position:"absolute", width:"100%", bottom:0}, "bottom-path")
        ;
    }

    handleSubmit(event) {
        event.preventDefault();

        const { user_id } = this.state;
        const { viagems_id } = this.state;
        const { nota } = this.state;
        const { comentario } = this.state;
        console.log('TESTE');
        this.props.addReview({ nota, comentario, user_id, viagems_id });
        this.setState({ nota: "" , comentario: "", user_id: "", viagems_id: "" });

        this.props.history.push('/home');
    }

    render (){

        const user = this.props.history.location.state.user.user;
        console.log('USER', this.props.history.location);

        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath MenuTitle={div => this.myElementMenuTitle = div}/>
                <Feedback id="feedback-display"
                          refFeedback={div => this.myElementFeedback = div}
                          refFeedbackImg={div => this.myElementFeedbackImg = div}
                          refFeedbackTitle={div => this.myElementFeedbackTitle = div}
                          refFeedbackSubTitle={div => this.myElementFeedbackSubTitle = div}
                          refFeedbackTextBtnTopDiv={div => this.myElementFeedbackBtnTopDiv= div}
                          refFeedbackTextBtnBottom={div => this.myElementFeedbackBtnBottom= div}
                />
                <div id="stage-no-photo-display" ref={div => this.myElementPagamento = div} className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-start">
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
                                            <span id="nr-viagens" className="h5 primary-text font-weight-bold">{user.totalViagem}</span>
                                        </div>
                                    </div>
                                    {/* <div className="d-flex m-3 flex-column align-items-center">
                                        <h5 className="h4 pb-3 text-uppercase font-weight-bold text-center">amigos<br/>em comum</h5>
                                        <div className="circle-size d-flex align-items-center justify-content-center rounded-circle white shadow">
                                            <span id="nr-amigos" className="h5 primary-text font-weight-bold">6</span>
                                        </div>
                                    </div> */}
                                    <div className="pl-5 pt-2 d-flex flex-column align-items-center">
                                        <div className="row align-items-center align-self-start">
                                            <h5 className="text-uppercase align-items-center font-weight-bold primary-text">{user.name}</h5>
                                            <div className="icon-star">
                                            </div>
                                            <span id="review" className="font-weight-bold">{user.nota}</span>
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
                                    <form className="d-flex flex-column justify-content-center h-100" onSubmit={this.handleSubmit}>
                                        <textarea className="textarea-review p-2 rounded" placeholder="Descreva o serviço prestado">
                                        </textarea>
                                        <div className="mt-4 mb-4 align-self-center">
                                            <div onClick={this.handleFeedback.bind(this)} className="m-2 row align-items-center primary-btn primary white-text pedido justify-content-center blue-btn">
                                                <button className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" type="submit">
                                                    Enviar Avaliação
                                                </button> 
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <FooterPath id="bottom-path" pathFooter={div => this.myElementPath = div} pathMenu={div => this.myElementMenu = div} atividadeImg={div => this.myElementPedidoImg = div} />
            </div>
        );
    }
}

const ReviewExp = connect(null, mapDispatchToProps)(Review);
export default ReviewExp;
