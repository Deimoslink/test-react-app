import * as React from 'react';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {render} from "react-dom";
import App from './App';
import store from "./store";
import {Provider as Provider} from "react-redux";

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
