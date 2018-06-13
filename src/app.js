import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addStudent } from './actions/student';
import { Provider } from 'react-redux';
const store = configureStore();
store.dispatch(addStudent({firstName:'Santhosh'}));
store.dispatch(addStudent({firstName:'Sunitha'}));
console.log(store.getState());
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
