import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import '../../main.css';

const Footer = () => (
    <div className="footer p-2 d-flex justify-content-between align-items-center bars">
        <div className="p-2 logo icons-size"></div>
        <div className="p-2 search icons-size"></div>
        <div className="p-2 trip icons-size"></div>
        <div className="p-2 message icons-size"></div>
        <div className="p-2 activity icons-size"></div>
    </div>
);

export default Footer;
