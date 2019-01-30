import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import ImageUpload from "./ImageUpload";
import Image from "./Image";

import '../../main.css';


const MenuPath = props => {
        return(
            <div className="menu d-flex justify-content-between align-items-center bars shadow">
                <div className="p-2 small-logo transparent bring-to-front">

                </div>
                <div className="p-2 primary-gray bring-to-front">PÁGINA PRINCIPAL</div>
                <div className="previewComponent bring-to-front">
                    <div id="image-default" className="image-default">
                    </div>
                </div>
                <ImageUpload />
                <div className="path align-self-center">
                </div>
                <div className="background white shadow align-self-center">

                </div>
            </div>
        );
};

export default MenuPath;
