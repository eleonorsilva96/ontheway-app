import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Pedido from "./Pedido";

import Menu from "./MenuPath";
import Footer from "./FooterPath";
import Stage from "./Stage";
import Viagem from "./Viagem";
import Condutores from "./ListaCondutores";
import Condutor from "./Condutor";
import Review from "./Review";



const AppRouter = () => (

    <Router>
        <div className="h-100 p-0">
                                    <Switch>
                                        <Route exact path='/' component={ Stage }  />
                                        <Route exact path='/pedido/' component={ Pedido }  />
                                        <Route exact path='/viagem/' component={ Viagem }  />
                                        <Route exact path='/condutores/' component={ Condutores }  />
                                        <Route exact path='/condutor/' component={ Condutor }  />
                                        <Route exact path='/review/' component={ Review }  />
                                    </Switch>
        </div>
    </Router>
);

export default AppRouter;
