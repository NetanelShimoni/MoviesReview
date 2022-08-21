import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import ContextProviders from './context';
import store from "./store/store";
import { Provider } from "react-redux";


const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
    <Provider store={store}>
    <BrowserRouter>
        <ContextProviders>
            <App />
        </ContextProviders>
    </BrowserRouter >
    </Provider>,
);