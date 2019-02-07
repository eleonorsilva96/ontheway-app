

import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import DatePicker from "react-datepicker";
import FooterPath from "./FooterPath";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'react-datepicker/node_modules/date-fns/locale/pt';
import MenuPath from "./MenuPath";
registerLocale('pt', pt);
setDefaultLocale('pt');

import { connect } from "react-redux";
import { fetchViagems } from "../actions/viagems";

const mapStateToProps = state => {

    return { viagems: state.viagems };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchViagems: viagems => dispatch(fetchViagems(viagems)),
    };
};

class ListaCondutores extends React.Component{
    constructor(props) {
        super(props);

        this.myElementMenuTitle= null;
        this.myElementPedidoImg = null;
        this.myElement = null;

        this.myTween = new TimelineLite();

        this.state = {
            startDate: new Date(),
            endDate: new Date()
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date,
        });
    }

    handleChange2(date) {
        this.setState({
            endDate: date
        });
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween
            .to(this.myElement, 0.1, {ease:Power3.easeOut, autoAlpha:0}, "bottom-path")
            .to(this.myElementPedidoImg, 0.1, {ease:Power3.easeOut, backgroundImage:'url(/imgs/icons/search_click.png)'}, "bottom-path")
            .to(this.myElementMenuTitle, 0.5, {ease:Power3.easeOut, innerHTML:"Detalhes do pedido"}, "bottom-path")
        ;

        const viagens = this.props.viagems;
        // if(viagens == 0){
            this.props.fetchViagems({ type: "FETCH_VIAGEMS", viagems: this.props.history.location.state.state });
        // }
        console.log('THIS', viagens);
    }

    render (){
        const viagens = this.props.viagems;
        console.log('TESTE', viagens);
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath MenuTitle={div => this.myElementMenuTitle = div}/>
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-start">
                    <div className="container-fluid mt-5 pt-2">
                            <div className="row justify-content-center">
                                <label className="mr-3 mb-0 align-self-center">De</label>
                                <input type="text" placeholder="Origem" className="input-disabled col-8 m-2 form-control-lg" disabled/>
                            </div>
                            <div className="row justify-content-center">
                                <label className="mr-3 mb-0 align-self-center">De</label>
                                <input type="text" placeholder="Origem" className="input-disabled col-8 m-2 form-control-lg" disabled/>
                            </div>

                        <div className="date-time mt-2 form-group row justify-content-center">
                            <label className="ml-2 mr-2 mb-0 align-self-center">Data</label>
                            <div className="col-4 p-0">
                                <DatePicker
                                    className="input-disabled pt-2 pb-2 col-11 gray-2-text rounded"
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    locale="pt"
                                    dateFormat="DD-MM-YYYY"
                                    placeholderText="Data"
                                    disabled
                                />
                            </div>
                            <label className="mr-2 mb-0 align-self-center">Hora</label>
                            <div>
                                <DatePicker
                                    className="input-disabled date-time-input-size gray-2-text p-2 rounded"
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="HH:mm"
                                    timeCaption="Time"
                                    placeholderText="Hora"
                                    locale="pt"
                                    disabled
                                />
                            </div>
                            <span className="p-1">:</span>
                            <div>
                                <DatePicker
                                    className="input-disabled date-time-input-size gray-2-text p-2 rounded"
                                    selected={this.state.endDate}
                                    onChange={this.handleChange2}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="HH:mm"
                                    timeCaption="Time"
                                    placeholderText="Hora"
                                    locale="pt"
                                    disabled
                                />
                            </div>
                        </div>

                            <div className="mr-4 ml-4 mb-4 mt-5 row justify-content-left gray-text text-uppercase">
                                <h5 className="mr-3 mb-0 align-self-left font-weight-bold">Entregadores encontrados</h5>
                            </div>
                            {/* Inicio da Lista */}
                    <div className="scroll-y">
                        

                        {viagens.viagems.map((el, index) => (

                            <Link className="link-no-decoration" to={{pathname: '/condutor/'+el.id, state: { produto: this.props.history.location.state.state } }} >
                            <div className="d-flex justify-content-start align-items-center p-2 m-2 row white rounded shadow">

                                <div className="m-3 previewComponent-md">
                                    <div id="image-default" className="image-default">
                                    </div>
                                </div>

                                <div className="col-5 column">
                                    <div className="row d-flex align-items-center">
                                        <h5 className="d-flex text-uppercase align-items-center font-weight-bold primary-text">{el.user[0].name}</h5>
                                        <div className="icon-star">
                                        </div>
                                        <span id="review" className="font-weight-bold">{el.user[0].nota}</span>
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
                            </Link>

                        ))}




                    </div>
                            </div>
                    </div>
                <FooterPath id="bottom-path" pathFooter={div => this.myElement = div} pedidoImg={div => this.myElementPedidoImg = div} />
            </div>
        );
    }
}

const ListaCondutoresExp = connect(mapStateToProps, mapDispatchToProps)(ListaCondutores);
export default ListaCondutoresExp;
