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

class Pedido extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);

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

    render (){
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath />
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-center">
                    <div className="container-fluid">
                        <form>
                            <div className="spacing-top row justify-content-center">
                                <label className="mr-3 mb-0 align-self-center">De</label>
                                <input type="text" placeholder="Origem" className="col-8 m-2 form-control-lg"/>
                            </div>
                            <div className="row justify-content-center">
                                <label className="mr-3 mb-0 align-self-center">De</label>
                                <input type="text" placeholder="Origem" className="col-8 m-2 form-control-lg"/>
                            </div>

                            <div className="date-time mt-2 form-group row justify-content-center">
                                <label className="ml-2 mr-2 mb-0 align-self-center">Data</label>
                                <div className="col-4 p-0">
                                    <DatePicker
                                        className="pt-2 pb-2 col-11 rounded"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        locale="pt"
                                        dateFormat="DD-MM-YYYY"
                                        placeholderText="Data"
                                    />
                                </div>
                                <label className="mr-2 mb-0 align-self-center">Hora</label>
                                <div>
                                    <DatePicker
                                        className="date-time-input-size p-2 rounded"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
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
                                        selected={this.state.endDate}
                                        onChange={this.handleChange2}
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
                                <input type="text" placeholder="Origem" className="col-4 m-2 form-control-lg"/>
                                <select className="custom-select custom-select-lg col-4 m-2 font-weight-normal">
                                    <option value="1">Grande&nbsp;(até 50kg)</option>
                                    <option value="2">Médio&nbsp;(até 30kg)</option>
                                    <option value="3">Pequeno&nbsp;(até 10kg</option>
                                </select>
                            </div>

                            <div className="spacing-bottom spacing-top-b row justify-content-center align-self-center">
                                <div className="m-2 row align-items-center primary-btn primary white-text pedido justify-content-center blue-btn">
                                <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/condutores/">
                                    Pesquisar
                               </Link> </div>
                            </div>
                        </form>
                    </div>
                </div>
                <FooterPath />
            </div>
            );
    }
}

export default Pedido;
