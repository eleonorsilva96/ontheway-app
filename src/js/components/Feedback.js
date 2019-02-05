import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import '../../main.css';


const Feedback = props => {
        return(
                <div ref ={props.refFeedback} className="feedback-items flex-column align-items-center justify-content-center">
                    <h3>Transação efectuada</h3>
                    <h6 className="mt-2 text-center">Pagamento será efectuado <br/> depois da entrega</h6>
                    <div className="mt-5 mb-5 d-flex justify-content-center">
                        <img className="img-feedback" src="/imgs/icons/sucess.png"/>
                    </div>
                    <div className="m-2 d-flex align-items-center justify-content-center secondary-btn primary white-text pedido blue-btn">
                        <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text" to="/pedido/">Fazer Pedido</Link>
                    </div>
                    <div className="m-2 d-flex align-items-center justify-content-center secondary-btn white primary-text viagem white-btn">
                        <Link className="d-flex justify-content-center align-items-center link-no-decoration primary-text" to="/viagem/">Criar Viagem</Link>
                    </div>
                </div>
        );
}

export default Feedback;
