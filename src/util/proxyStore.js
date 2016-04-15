'use strict';

import {createStore} from 'redux';

// Actions
const RECEIVE_MSG_FROM_WW = 'RECEIVE_MSG_FROM_WW';
const DISPATCH_ACTION_TO_WW = 'DISPATCH_ACTION_TO_WW';

// Actions creators
const receiveMsgFromWW = msg => ({
    type: RECEIVE_MSG_FROM_WW,
    msg
});

const dispatchActionToWW = action => ({
    type: DISPATCH_ACTION_TO_WW,
    action
});

const thunkReceiveMsgFromWW = () => {

};

// reducers
// here, a single reducer t
const data = (previousState = {}, action) => {
    switch (action.type) {
        case RECEIVE_MSG_FROM_WW:
            return action.msg.data;
        default:
            return previousState;
    }
};

const createProxyStore = (StoreWorker) => {
    // init store
    const store = createStore({ data });
    // create worker
    this.worker = new StoreWorker();
    // listen web-worker and update data
    this.worker.addEventListener('message', msg => store.dispatch(receiveMsgFromWW(msg)));
};
