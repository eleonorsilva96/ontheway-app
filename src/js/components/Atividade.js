//TODO colocar o sub-menu em componente: passar como props

import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import FooterPath from "./FooterPath";
import MenuPath from "./MenuPath";

import { connect } from "react-redux";
import { fetchUser } from "../actions/userData";

const mapStateToProps = state => {

    return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userInfo => dispatch(fetchUser(userInfo)),
    };
};

class Atividade extends React.Component{
    constructor() {
        super();
        this.myElementPathTop = null;
        this.myElementPathBottom = null;
        this.myElementColor = null;
        this.myElementColorViagem = null;

        this.pedido = null;
        this.viagem = null;

        this.myTween = new TimelineLite();
        this.myTweenClick = new TimelineLite();
        this.myTweenClickPedido = new TimelineLite();

        this.handleClickViagem = this.handleClickViagem.bind(this);
        this.handleClickPedido = this.handleClickPedido.bind(this);
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween
            .to(this.myElementPathTop, 0.1, {ease:Power3.easeOut, autoAlpha:0}, "pathTop")
            .to(this.myElementPathBottom, 0.1, {ease:Power3.easeOut, autoAlpha:0}, "pathTop")
            .to(this.myElementColor, 0.1, {ease:Power3.easeOut, color:"#1220DC"}, "pathTop")
        ;

        this.props.fetchUser({ type: "FETCH_USER", user: 2 });
    }

    handleClickViagem() {
        this.myTweenClickPedido = new TimelineLite();

        this.myTweenClick
            .to(this.myElementColor, 0.5, {ease:Power3.easeOut, color:"#9A9B9C"}, "menu-pedido")
            .to(this.myElementColorViagem, 0.5, {ease:Power3.easeOut, color:"#1220DC"}, "menu-pedido")
            .to(this.pedido, 0.1, {ease:Power3.easeOut, autoAlpha:0, display:"none"}, "menu-pedido")
            .to(this.viagem, 1, {ease:Power3.easeOut, autoAlpha:1, display:"block"}, "menu-pedido")
        ;
    }

    handleClickPedido(){
        this.myTweenClick = new TimelineLite();

        this.myTweenClickPedido
            .to(this.myElementColorViagem, 0.5, {ease:Power3.easeOut, color:"#9A9B9C"}, "menu-viagem")
            .to(this.myElementColor, 0.5, {ease:Power3.easeOut, color:"#1220DC"}, "menu-viagem")
            .to(this.pedido, 1, {ease:Power3.easeOut, autoAlpha:1, display:"block"}, "menu-viagem")
            .to(this.viagem, 0.1, {ease:Power3.easeOut, autoAlpha:0, display:"none"}, "menu-viagem")
        ;
    }

    render (){
        console.log('QUERO ISTO', this.props);
        const userInfo = this.props.userInfo.userInfo;

        if(userInfo.produtos || userInfo.viagems){
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath id="pathTop" pathRef={div => this.myElementPathTop = div} />
                <div className="menu-abs p-1 absolute send-to-back d-flex justify-content-around bars white shadow">
                </div>
                <div className="menu p-1 bring-to-front d-flex justify-content-around bars">
                    <div id="menu-pedido" ref={div => this.myElementColor = div} onClick={this.handleClickPedido.bind(this)} className="p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">pedidos</div>
                    <div id="menu-viagem" ref={div => this.myElementColorViagem = div} onClick={this.handleClickViagem.bind(this)}  className="p-2 primary-gray text-uppercase pointer gray-text font-weight-bold">viagens</div>
                </div>
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-start">
                    
                
                    <div className="container-fluid mt-5 pt-2">
                        <Link className="link-no-decoration" to="/atividade-detalhe/">
                            <div ref={div => this.pedido = div} id="pedidos">
                                {userInfo.produtos.map((el, index) => (

                               <div className="d-flex justify-content-start align-items-center p-2 m-2 row white rounded shadow">

                                   <div className="m-3 previewComponent-md">
                                       <div id="image-default" className="image-default">
                                       </div>
                                   </div>
                                   <div className="col-5 column">
                                       <div className="row d-flex align-items-center">
                                            <h5 className="d-flex text-uppercase align-items-center font-weight-bold primary-text">{el.nome}</h5>
                                            <div className="icon-star">
                                            </div>
                                            {/* <span id="review" className="font-weight-bold">3.5</span> */}
                                       </div>
                                       <div className="row mt-2">
                                           <div className="date-icon">
                                           </div>
                                           <span id="date">{el.viagems.data}</span>
                                       </div>
                                       <div className="row">
                                           <div className="time-icon">
                                           </div>
                                           <span id="time">{el.viagems.horaInicio}-{el.viagems.horaFim}</span>
                                       </div>
                                   </div>

                                   <div className="column">
                                       <h6 className="text-uppercase font-weight-bold primary-2-text">Aveiro</h6>
                                       <h6 className="pt-5 text-uppercase font-weight-bold primary-2-text">Porto</h6>
                                   </div>

                                   <div className="location-img">

                                   </div>

                                   <div className="ml-1 price d-flex justify-content-center align-items-center">
                                       <h4 className="font-weight-bold"><span id="price">{el.viagems.preco}</span>€</h4>
                                   </div>
                               </div>
                               ))}
                            </div>
                            
                            <div ref={div => this.viagem = div} id="viagens">
                                {userInfo.viagems.map((el, index) => (
                                <div className="d-flex justify-content-start align-items-center p-2 m-2 row white rounded shadow">

                                    <div className="m-3 previewComponent-md">
                                        <div id="image-default" className="image-default">
                                        </div>
                                    </div>

                                    <div className="col-5 column">
                                        <div className="row d-flex align-items-center">
                                            <h5 className="d-flex text-uppercase align-items-center font-weight-bold primary-text">Zé Pedro</h5>
                                            <div className="icon-star">
                                            </div>
                                            <span id="review" className="font-weight-bold">3.5</span>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="date-icon">
                                            </div>
                                            <span id="date">{el.data}</span>
                                        </div>
                                        <div className="row">
                                            <div className="time-icon">
                                            </div>
                                            <span id="time">{el.horaInicio}-{el.horaFim}</span>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <h6 className="text-uppercase font-weight-bold primary-2-text">{el.origem}</h6>
                                        <h6 className="pt-5 text-uppercase font-weight-bold primary-2-text">{el.destino}</h6>
                                    </div>

                                    <div className="location-img">

                                    </div>

                                    <div className="ml-1 price d-flex justify-content-center align-items-center">
                                        <h4 className="font-weight-bold"><span id="price">{el.preco}</span>€</h4>
                                    </div>
                                    
                                </div>                                
                                ))}
                                
                            </div>
                        </Link>
                    </div>
                

                </div>
                <FooterPath pathRef={div => this.myElementPathBottom = div} />
            </div>
        );
    }
    else {
        return(
            <div>Loading....</div>
          )
    }
    }
}

const AtividadeExp = connect(mapStateToProps, mapDispatchToProps)(Atividade);
export default AtividadeExp;

