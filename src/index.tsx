import * as React from 'react';
import {render} from 'react-dom';
import {Provider as Provider} from 'react-redux';
import App from './App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

