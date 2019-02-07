//TODO imagem caminhos, atualizar campos, margens

import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'react-datepicker/node_modules/date-fns/locale/pt';
import MenuPath from "./MenuPath";
import FooterPath from "./FooterPath";
registerLocale('pt', pt);
setDefaultLocale('pt');

import { connect } from "react-redux";
// import { fetchViagems } from "../actions/viagems";

// const mapDispatchToProps = dispatch => {
//     return {
//       fetchViagems: viagems => dispatch(fetchViagems(viagems)),
//     };
// };

class Pedido extends React.Component{
    constructor(props) {
        super(props);

        this.myElementMenuTitle= null;
        this.myElementPedidoImg = null;

        this.myTween = new TimelineLite();

        this.state = {
            origem: "",
            destino: "",
            dataViagem: new Date(),
            horaInicio: new Date(),
            horaFim: new Date(),
            tamanho: "grande",
            nomeProduto: "",
            tipo_id: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange2(date) {
        this.setState({
            dataViagem: date,
        });
    }

    handleChange3(date) {
        this.setState({
            horaInicio: date,
        });
    }

    handleChange4(date) {
        this.setState({
            horaFim: date,
        });
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { origem } = this.state;
        const { destino } = this.state;
        const { tamanho } = this.state;
        const { nomeProduto } = this.state;
        const { dataViagem } = this.state;
        const { horaInicio } = this.state;
        const { horaFim } = this.state;
        
        // this.props.fetchViagems({ origem, destino, tamanho, nomeProduto, dataViagem, horaInicio, horaFim });
        this.props.history.push('/condutores',{
            state: { origem, destino, tamanho, nomeProduto, dataViagem, horaInicio, horaFim }
        });
        this.setState({ origem: "" , destino: "", tamanho: "", preco: "", dataViagem: "", horaInicio: "", horaFim: ""});
    }

    componentDidMount(){
        this.myTween
            .to(this.myElementMenuTitle, 0.5, {ease:Power3.easeOut, innerHTML:"Fazer Pedido"}, "title-menu")
            .to(this.myElementPedidoImg, 0.1, {ease:Power3.easeOut, backgroundImage:'url(/imgs/icons/search_click.png)'}, "title-menu")
        ;
    }

    render (){
        const { origem, destino, tamanho, nomeProduto } = this.state;
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath id="title-menu" MenuTitle={div => this.myElementMenuTitle = div}/>
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-center">
                    <div className="container-fluid">
                        <form onSubmit={this.handleSubmit}>
                            <div className="spacing-top row justify-content-center">
                                <label className="mr-3 mb-0 align-self-center">De</label>
                                <input type="text" placeholder="Origem" id="origem" value={origem} onChange={this.handleChange} className="col-8 m-2 form-control-lg"/>
                            </div>
                            <div className="row justify-content-center">
                                <label className="mr-3 mb-0 align-self-center">Para</label>
                                <input type="text" placeholder="Destino" id="destino" value={destino} onChange={this.handleChange} className="col-8 m-2 form-control-lg"/>
                            </div>

                            <div className="date-time mt-2 form-group row justify-content-center">
                                <label className="ml-2 mr-2 mb-0 align-self-center">Data</label>
                                <div className="col-4 p-0">
                                    <DatePicker
                                        className="pt-2 pb-2 col-11 rounded"
                                        selected={this.state.dataViagem}
                                        onChange={this.handleChange2}
                                        locale="pt"
                                        dateFormat="DD-MM-YYYY"
                                        placeholderText="Data"
                                    />
                                </div>
                                <label className="mr-2 mb-0 align-self-center">Hora</label>
                                <div>
                                    <DatePicker
                                        className="date-time-input-size p-2 rounded"
                                        selected={this.state.horaInicio}
                                        onChange={this.handleChange3}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        dateFormat="HH:mm"
                                        timeCaption="Time"
                                        placeholderText="Hora"
                                        locale="pt"
                                    />
                                </div>
                                <span className="p-1">:</span>
                                <div>
                                    <DatePicker
                                        className="date-time-input-size p-2 rounded"
                                        selected={this.state.horaFim}
                                        onChange={this.handleChange4}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        dateFormat="HH:mm"
                                        timeCaption="Time"
                                        placeholderText="Hora"
                                        locale="pt"
                                    />
                                </div>
                            </div>

                            <div className="mr-4 ml-4 mb-4 mt-5 row justify-content-left gray-text text-uppercase">
                                <h6 className="mr-3 mb-0 align-self-left font-weight-bold">Características do produto</h6>
                            </div>

                            <div className="mr-5 ml-5 row justify-content-left">
                                <label className="col-6 mb-0">Produto</label>
                                <label className="ml-2 mb-0">Tamanho</label>
                            </div>

                            <div className="row justify-content-center">
                                <input type="text" placeholder="Nome do Produto" id="nomeProduto" value={nomeProduto} onChange={this.handleChange} className="col-4 m-2 form-control-lg"/>
                                <select id="tamanho" value={tamanho} onChange={this.handleChange} className="custom-select custom-select-lg col-4 m-2 font-weight-normal">
                                    <option value="grande">Grande&nbsp;(até 50kg)</option>
                                    <option value="medio">Médio&nbsp;(até 30kg)</option>
                                    <option value="pequeno">Pequeno&nbsp;(até 10kg)</option>
                                </select>
                            </div>

                            <div className="spacing-bottom spacing-top-b row justify-content-center align-self-center">
                                <div className="m-2 row align-items-center primary-btn primary pedido justify-content-center blue-btn">
                                {/* <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/condutores/"> */}
                                <button type="submit" className="btn-style white-text font-weight-bold text-uppercase link-no-decoration">
                                    Pesquisar
                                </button>
                               {/* </Link>  */}
                               </div>
                            </div>
                        </form>
                    </div>
                </div>
                <FooterPath  pedidoImg={div => this.myElementPedidoImg = div}/>
            </div>
            );
    }
}

const PedidoExp = connect(null, null)(Pedido);
export default PedidoExp;
