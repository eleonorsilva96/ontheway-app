import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import '../../main.css';

const FooterPath = props => {
        return (
            <div ref={props.pathMenu} className="menu footer d-flex justify-content-between align-items-center bars white shadow">

                <Link className="bring-to-front w-100" to="/home/">
                    <div ref={props.logoImg} className="p-2 logo icons-size bring-to-front">
                    </div>
                </Link>

                <Link className="bring-to-front w-100" to="/pedido/">
                    <div ref={props.pedidoImg} className="p-2 search icons-size bring-to-front">
                    </div>
                </Link>

                <Link className="bring-to-front w-100" to="/viagem/">
                    <div ref={props.viagemImg} className="p-2 trip icons-size bring-to-front">
                    </div>
                </Link>

                <Link className="bring-to-front w-100" to="/home/">
                    <div className="p-2 message icons-size bring-to-front">
                    </div>
                </Link>

                <Link className="bring-to-front w-100" to="/atividade/">
                    <div ref={props.atividadeImg} className="p-2 activity icons-size bring-to-front">
                    </div>
                </Link>

                <div ref={props.pathFooter} className="path-bottom justify-content-center">
                </div>
                <div className="background white shadow align-self-center">

                </div>
            </div>
        );
};

export default FooterPath;
