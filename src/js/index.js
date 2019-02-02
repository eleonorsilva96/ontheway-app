import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Menu from "./components/Menu";
import App from "./components/App";
import '../main.css';

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');


render(
    <Provider store={store}>
        <App  hideLoader={hideLoader}
              showLoader={showLoader}  />
    </Provider>,
    document.getElementById("app")
);