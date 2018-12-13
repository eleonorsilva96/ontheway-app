import React from "react";
import List from "./List";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ListDetails from "./ListDetails";
import Form from "./Form";
import Menu from "./Menu";

const AppRouter = () => (

    <Router>
            <div>
                <Menu />

                <div className="container">
                    <div className="row">
                                    <Switch>
                                    <Route exact path="/" component={List} />
                                    <Route exact path='/article/:id' component={ ListDetails } />
                                    <Route exact path='/criar/' component={ Form } />
                                    </Switch>
                    </div>
                </div>
        </div>
    </Router>
);

export default AppRouter;
