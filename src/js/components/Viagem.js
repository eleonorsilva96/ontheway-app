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
import Feedback from "./Feedback";

const mapDispatchToProps = dispatch => {
    return {
        addViagem: viagem => dispatch(addViagem(viagem))
    };
};

class Viagem extends React.Component{
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
        this.myElementFeedbackBtnBottomHref = null;
        this.myElementFeedbackBtnBottomHrefText = null;
        this.myElementFeedbackBtnTopDiv2 = null;

        this.myElementMenuTitle= null;
        this.myElementMenu = null;

        this.myTweenFP = new TimelineLite();


        this.state = {
            origem: "",
            destino: "",
            dataViagem: new Date(),
            horaInicio: new Date(),
            horaFim: new Date(),
            tamanho: "grande",
            preco: "",
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
        const { preco } = this.state;
        const { dataViagem } = this.state;
        const { horaInicio } = this.state;
        const { horaFim } = this.state;
        const tipo_id = 1;
        this.props.addViagem({ origem, destino, tamanho, preco, dataViagem, horaInicio, horaFim, tipo_id });
        this.setState({ origem: "" , destino: "", tamanho: "", preco: "", dataViagem: "", horaInicio: "", horaFim: ""});

        //this.props.history.push('/home');
    }

    handleFeedback() {
        this.myTweenFP
            .to(this.myElementPagamento, 0.5, {ease:Power3.easeOut, autoAlpha:0, display:"none"}, "stage-no-photo-display")
            .to(this.myElementFeedback, 1, {ease:Power3.easeOut, autoAlpha:1, display:"flex"}, "stage-no-photo-display")
            .to(this.myElementFeedbackImg, 0.1, {ease:Power3.easeOut, src:"/imgs/icons/trip_active.png"}, "stage-no-photo-display")

            .to(this.myElementFeedbackTitle, 0.5, {ease:Power3.easeOut, innerHTML:"Viagem<br/> criada com <br/> sucesso"}, "stage-no-photo-display")
            .to(this.myElementFeedbackSubTitle, 0.5, {ease:Power3.easeOut, innerHTML:"Pode ver as suas viagens<br/>na área de atividade"}, "stage-no-photo-display")
            .to(this.myElementFeedbackBtnTopDiv, 0.1, {ease:Power3.easeOut, display:"none"}, "stage-no-photo-display")
            .to(this.myElementFeedbackBtnTopDiv2, 0.1, {ease:Power3.easeOut, display:"none"}, "stage-no-photo-display")
            .to(this.myElementFeedbackBtnBottomHref, 0.1, {ease:Power3.easeOut, display:"flex"}, "stage-no-photo-display")
            .to(this.myElementFeedbackBtnBottomHrefText, 0.1, {ease:Power3.easeOut, innerHTML:"Página Principal"}, "stage-no-photo-display")

            .to(this.myElementPath, 0.1, {ease:Power3.easeOut, autoAlpha:1}, "stage-no-photo-display")
        ;
    }

    componentDidMount(){
        this.myTweenFP
            .to(this.myElementMenuTitle, 0.5, {ease:Power3.easeOut, innerHTML:"Criar viagem"}, "menu-path")
            .to(this.myElementPedidoImg, 0.1, {ease:Power3.easeOut, backgroundImage:'url(/imgs/icons/trip_click.png)'}, "menu-path")
            .to(this.myElementMenu, 1, {ease:Power3.easeOut, position:"absolute", width:"100%", bottom:0}, "menu-path")
        ;
    }

    render(){
        const { origem, destino, tamanho, preco, dataViagem, horaInicio, horaFim } = this.state;
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath id="menu-path" MenuTitle={div => this.myElementMenuTitle = div}/>
                <Feedback id="feedback-display"
                          refFeedback={div => this.myElementFeedback = div}
                          refFeedbackImg={div => this.myElementFeedbackImg = div}
                          refFeedbackTitle={div => this.myElementFeedbackTitle = div}
                          refFeedbackSubTitle={div => this.myElementFeedbackSubTitle = div}
                          refFeedbackTextBtnTopDiv={div => this.myElementFeedbackBtnTopDiv= div}
                          refFeedbackTextBtnTopDiv2={div => this.myElementFeedbackBtnTopDiv2= div}
                          refFeedbackTextBtnBottom={div => this.myElementFeedbackBtnBottom= div}
                          refFeedbackTextBtnBottomHref={div => this.myElementFeedbackBtnBottomHref= div}
                          refFeedbackTextBtnBottomHrefText={div => this.myElementFeedbackBtnBottomHrefText= div}
                />
                    <div id="stage-no-photo-display" ref={div => this.myElementPagamento = div} className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-center">
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
                                    <label className="col-6 mb-0">Tamanho</label>
                                    <label className="ml-4 pl-3 mb-0">Preço (€)</label>
                                </div>

                                <div className="ml-1 pl-3 row justify-content-center">
                                    <select id="tamanho" value={tamanho} onChange={this.handleChange} className="custom-select custom-select-lg col-5 m-2 font-weight-normal">
                                        <option value="grande">Grande&nbsp;(até 50kg)</option>
                                        <option value="medio">Médio&nbsp;(até 30kg)</option>
                                        <option value="pequeno">Pequeno&nbsp;(até 10kg)</option>
                                    </select>
                                    <input type="text" placeholder="€" id="preco" value={preco} onChange={this.handleChange} className="col-2 m-2 form-control-lg text-center"/>
                                    <span className="col-2">

                                    </span>
                                </div>

                                <div className="spacing-bottom spacing-top-b row justify-content-center align-self-center">
                                    <div onClick={this.handleFeedback.bind(this)} className="m-2 row align-items-center primary-btn primary pedido justify-content-center blue-btn pointer">
                                        {/* <Link className="d-flex justify-content-center align-items-center link-no-decoration white-text text-uppercase font-weight-bold" to="/"> */}
                                        <button type="submit" className="btn-style white-text font-weight-bold text-uppercase white-text link-no-decoration">
                                            Criar viagem
                                        </button>
                                        
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                <FooterPath pathMenu={div => this.myElementMenu = div} viagemImg={div => this.myElementPedidoImg = div} />
            </div>
        );
    }
}

const ViagemExp = connect(null, mapDispatchToProps)(Viagem);
export default ViagemExp;