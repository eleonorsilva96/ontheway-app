import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Pedido from "./Pedido";

import Menu from "./Menu";
import Footer from "./Footer";
import Stage from "./Stage";

const AppRouter = () => (

    <Router>
            <div className="container-fluid h-100 p-0">
                <Menu />


                                    <Switch>
                                        <Route exact path='/' component={ Stage }  />
                                        <Route exact path='/pedido/' component={ Pedido }  />
                                    </Switch>

                <Footer />
        </div>
    </Router>
);

export default AppRouter;
