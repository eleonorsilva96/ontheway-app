import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import '../../main.css';

class FooterPath extends React.Component {
    constructor(props) {
        super(props);
        // reference to the DOM node
    }

    render() {
        return (
            <div className="menu footer d-flex justify-content-between align-items-center bars white shadow">
                <div className="p-2 logo icons-size bring-to-front">

                </div>
                <div className="p-2 search icons-size bring-to-front">

                </div>
                <div className="p-2 trip icons-size bring-to-front">

                </div>
                <div className="p-2 message icons-size bring-to-front">

                </div>
                <div className="p-2 activity icons-size bring-to-front">

                </div>
                <div ref="path" className="path-bottom justify-content-center">

                </div>
                <div className="background white shadow align-self-center">

                </div>
            </div>
        );
    }
}

export default FooterPath;
