//TODO imagem caminhos, atualizar campos, margens

import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import DatePicker from "react-datepicker/es";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'react-datepicker/node_modules/date-fns/locale/pt';
import MenuPath from "./MenuPath";
import FooterPath from "./FooterPath";
registerLocale('pt', pt);
setDefaultLocale('pt');

import { connect } from "react-redux";
import { addViagem } from "../actions/viagems";

const mapDispatchToProps = dispatch => {
    return {
        addViagem: viagem => dispatch(addViagem(viagem))
    };
};

class Viagem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            origem: "",
            destino: "",
            dataViagem: new Date(),
            horaInicio: new Date(),
            horaFim: new Date(),
            tamanho: "",
            preco: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
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
        const { preco } = this.state;
        const { dataViagem } = this.state;
        const { horaInicio } = this.state;
        const { horaFim } = this.state;
        const id = "";
        this.props.addViagem({ origem, destino, tamanho, preco, dataViagem, horaInicio, horaFim });
        this.setState({ origem: "" , destino: "", tamanho: "", preco: "", dataViagem: "", horaInicio: "", horaFim: ""});
    }

    render(){
        const { origem, destino, tamanho, preco, dataViagem, horaInicio, horaFim } = this.state;
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath />
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
                                </div>

                                <div className="mr-4 ml-4 mb-4 mt-5 row justify-content-left gray-text text-uppercase">
                                    <h6 className="mr-3 mb-0 align-self-left font-weight-bold">Características do produto</h6>
                                </div>

                                <div className="mr-5 ml-5 row justify-content-left">
                                    <label className="col-6 mb-0">Tamanho</label>
                                    <label className="ml-4 pl-3 mb-0">Preço (€)</label>
                                </div>

                                <div className="ml-1 pl-3 row justify-content-center">
                                    <select id="tamanho" value={tamanho} onChange={this.handleChange} className="custom-select custom-select-lg col-5 m-2 font-weight-normal">
                                        <option value="grande" active>Grande&nbsp;(até 50kg)</option>
                                        <option value="medio">Médio&nbsp;(até 30kg)</option>
                                        <option value="pequeno">Pequeno&nbsp;(até 10kg</option>
                                    </select>
                                    <input type="text" placeholder="€" id="preco" value={preco} onChange={this.handleChange} className="col-2 m-2 form-control-lg text-center"/>
                                    <span className="col-2">

                                    </span>
                                </div>

                                <div className="spacing-bottom spacing-top-b row justify-content-center align-self-center">
                                    <div className="m-2 row align-items-center primary-btn primary white-text pedido justify-content-center blue-btn">
                                        {/* <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/"> */}
                                        <button type="submit" className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold">
                                            Pesquisar
                                        </button>
                                        
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                <FooterPath />
            </div>
        );
    }
}

const ViagemExp = connect(null, mapDispatchToProps)(Viagem);
export default ViagemExp;