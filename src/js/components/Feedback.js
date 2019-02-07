import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import '../../main.css';


const Feedback = props => {
        return(
                <div ref ={props.refFeedback} className="feedback-items flex-column align-items-center justify-content-center">
                    <h3 ref ={props.refFeedbackTitle} className="text-uppercase sucess-text text-center font-weight-bold">Transação efectuada</h3>
                    <h6 ref ={props.refFeedbackSubTitle} className="h6 mt-2 text-center gray-text">Pagamento será efectuado <br/> depois da entrega</h6>
                    <div className="mt-5 mb-5 d-flex justify-content-center">
                        <img ref ={props.refFeedbackImg} className="img-feedback" src="/imgs/icons/sucess_green.png"/>
                    </div>
                    <div ref ={props.refFeedbackTextBtnTopDiv} id="btn-div-review" className="m-2 align-items-center justify-content-center secondary-btn sucess white-text pedido blue-btn shadow">
                        <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase" to="/atividade/"><span ref ={props.refFeedbackTextBtnTop}>ver pedidos</span></Link>
                    </div>
                    <div ref ={props.refFeedbackTextBtnTopDiv2} id="feedback-viagem" className="m-2 align-items-center justify-content-center secondary-btn white white border-sucess viagem white-btn shadow">
                        <Link className="d-flex justify-content-center align-items-center link-no-decoration sucess-text text-uppercase hover-sucess"  to="/home/"><span ref ={props.refFeedbackTextBtnBottom}>conversar</span></Link>
                    </div>
                    <div ref ={props.refFeedbackTextBtnBottomHref} id="feedback-home" className="m-2 align-items-center justify-content-center secondary-btn white white border-sucess viagem white-btn shadow">
                        <Link className="d-flex justify-content-center align-items-center link-no-decoration sucess-text text-uppercase hover-sucess"  to="/home/"><span ref ={props.refFeedbackTextBtnBottomHrefText}>conversar</span></Link>
                    </div>
                </div>
        );
}

export default Feedback;
