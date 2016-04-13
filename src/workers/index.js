'use strict';

import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers/reducers';
import selectors from '../selectors/selectors';

(async function main(){

    // retrive data
    // fetch is provided by webpack with this config...
    // http://mts.io/2015/04/08/webpack-shims-polyfills/
    const defaultStore = await fetch('/defaultStore.json')
        .then(response => response.json());

    const store = createStore(combineReducers(reducers), defaultStore);

    self.postMessage(selectors(store.getState()));

    // We compute as an array the neighbors of each bird
    self.addEventListener('message', msg => {
        store.dispatch(msg.data);
    }, false);

    store.subscribe(()=> self.postMessage(selectors(store.getState())) );

}());

