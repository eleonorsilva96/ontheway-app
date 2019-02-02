import React from "react";
import { Link } from "react-router-dom";
import '../../main.css';
import MenuPath from "./MenuPath";
import FooterPath from "./FooterPath";
import ImageUpload from "./ImageUpload";

class Perfil extends React.Component{
    constructor(props) {
        super(props);
        this.myElement = null;
        this.myTween = null;
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenLite.to(this.myElement, 1, {ease:Power3.easeOut, autoAlpha:0}, '-=200');
    }

    render (){
        return(
            <div className="container-fluid h-100 p-0">
                <MenuPath />
                <div className="stage-no-photo white-back d-flex flex-column align-items-center justify-content-start">
                    <div className="container-fluid h-100 mt-2">
                        <div className="row d-flex justify-content-center align-items-center mt-1 mb-1 gray-text">
                            <div className="pt-5 mr-4 col-2 align-self-start d-flex flex-column align-items-center">
                                <ImageUpload />
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
                                            <h4 className="align-items-center font-weight-bold primary-text">Zé Pedro</h4>
                                            <div className="icon-star">
                                            </div>
                                            <span id="review" className="font-weight-bold">3.5</span>
                                        </div>
                                        <h6 id="nivel" className="row align-self-start font-weight-bold">Experiente</h6>
                                        <div className="d-flex pt-3 row align-items-center gray-2-text">
                                            <p className="text-left">Vamos poupar tempo e dinheiro? E o nosso ambiente também!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mr-4 ml-4 mb-4 mt-3 row justify-content-left gray-text text-uppercase">
                            <h5 className="mr-3 mb-0 align-self-left font-weight-bold letter-spacing-entrar">Percursos realizados</h5>
                        </div>
                            <div className="h-50 d-flex flex-column align-items-center">
                                <div className="row mb-3 w-100 justify-content-center align-items-center"><h4
                                    className="font-weight-bold primary-text">Aveiro</h4>
                                    <div className="d-flex line w-25 mr-3 ml-3 gray rounded"></div>
                                    <h4 className="font-weight-bold primary-text">Porto</h4>
                                </div>

                                <div className="h-80 d-flex w-100 pl-3 pr-3 flex-column flex-wrap align-self-center align-items-center">
                                    <div className="row w-50 p-2 justify-content-center align-items-center">
                                        <div className="m-2 previewComponent-xs bring-to-front">
                                            <div id="image-default" className="imgPreview">
                                                <img src="/imgs/icons/user_no_border.png"/>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center"><h5
                                            className="font-weight-bold black-text">Luís Sousa</h5>
                                            <div
                                                className="detail-percurso row pt-1 align-self-start align-items-center">
                                                <div className="icon-star-perfil"></div>
                                                <span id="review" className="font-s font-weight-bold">3.5</span></div>
                                        </div>
                                    </div>
                                    <div className="row w-50 p-2 justify-content-center align-items-center">
                                        <div className="m-2 previewComponent-xs bring-to-front">
                                            <div id="image-default" className="imgPreview">
                                                <img src="/imgs/icons/user_no_border.png"/>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center"><h5
                                            className="font-weight-bold black-text">Luís Sousa</h5>
                                            <div
                                                className="detail-percurso row pt-1 align-self-start align-items-center">
                                                <div className="icon-star-perfil"></div>
                                                <span id="review" className="font-s font-weight-bold">3.5</span></div>
                                        </div>
                                    </div>
                                    <div className="row w-50 p-2 justify-content-center align-items-center">
                                        <div className="m-2 previewComponent-xs bring-to-front">
                                            <div id="image-default" className="imgPreview">
                                                <img src="/imgs/icons/user_no_border.png"/>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center"><h5
                                            className="font-weight-bold black-text">Luís Sousa</h5>
                                            <div
                                                className="detail-percurso row pt-1 align-self-start align-items-center">
                                                <div className="icon-star-perfil"></div>
                                                <span id="review" className="font-s font-weight-bold">3.5</span></div>
                                        </div>
                                    </div>
                                    <div className="row w-50 p-2 justify-content-center align-items-center">
                                        <div className="m-2 previewComponent-xs bring-to-front">
                                            <div id="image-default" className="imgPreview">
                                                <img src="/imgs/icons/user_no_border.png"/>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center"><h5
                                            className="font-weight-bold black-text">Luís Sousa</h5>
                                            <div
                                                className="detail-percurso row pt-1 align-self-start align-items-center">
                                                <div className="icon-star-perfil"></div>
                                                <span id="review" className="font-s font-weight-bold">3.5</span></div>
                                        </div>
                                    </div>
                                    <div className="row w-50 p-2 justify-content-center align-items-center">
                                        <div className="m-2 previewComponent-xs bring-to-front">
                                            <div id="image-default" className="imgPreview">
                                                <img src="/imgs/icons/user_no_border.png"/>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center"><h5
                                            className="font-weight-bold black-text">Luís Sousa</h5>
                                            <div
                                                className="detail-percurso row pt-1 align-self-start align-items-center">
                                                <div className="icon-star-perfil"></div>
                                                <span id="review" className="font-s font-weight-bold">3.5</span></div>
                                        </div>
                                    </div>
                                    <div className="row w-50 p-2 justify-content-center align-items-center">
                                        <div className="m-2 previewComponent-xs bring-to-front">
                                            <div id="image-default" className="imgPreview">
                                                <img src="/imgs/icons/user_no_border.png"/>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center"><h5
                                            className="font-weight-bold black-text">Luís Sousa</h5>
                                            <div
                                                className="detail-percurso row pt-1 align-self-start align-items-center">
                                                <div className="icon-star-perfil"></div>
                                                <span id="review" className="font-s font-weight-bold">3.5</span></div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                    </div>
                </div>
                <FooterPath pathRef={div => this.myElement = div} />
            </div>
        );
    }
}

export default Perfil;
