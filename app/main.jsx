import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Route, Router, hashHistory} from 'react-router';
import reducers from './reducers';
import Contacts from './components/Contacts';
import Settings from './components/Settings';
import Orders from './components/Orders';
import ContactList from './components/ContactList';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(()=> {
    console.log('store changed');
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="contacts" component={Contacts} />
            <Route path="settings" component={Settings} />
            <Route path="orders" component={Orders} />
        </Router>

    </Provider>,
  document.body.appendChild(document.createElement('div'))
);
