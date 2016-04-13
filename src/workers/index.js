'use strict';

import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers/reducers';
import selectors from '../selectors/selectors';

const defaultStore = {items: [{ id: '-1', label: 'toto', done: false }] };

const store = createStore(combineReducers(reducers), defaultStore);

self.postMessage(selectors(store.getState()));

// We compute as an array the neighbors of each bird
self.addEventListener('message', msg => {
    store.dispatch(msg.data);
}, false);

store.subscribe(()=> self.postMessage(selectors(store.getState())) );
