'use strict';

import React, {Component, PropTypes, Children, cloneElement} from 'react';
import { autobind } from 'core-decorators';

const StoreWorker = require('worker!../workers/index');

// StoreConnector is a higher order component
// that connect to the web-worker store.
//
class StoreConnector extends Component {

    // add a flag to know if component is mounted,
    // init state
    constructor() {
        super();
        this._mounted = false;
        this.state = {}; // TODO window.__INITIAL_STATE
    }

    // when receiving a new state from the store,
    // set state
    @autobind
    setStateFromStore(msg){
        this.setState(msg.data);
    }

    // dispatch an action to the web-worker
    @autobind
    dispatch(msg) {
        this.worker.postMessage(msg);
    }

    // set mounted flag
    componentDidMount() {
        this.worker = new StoreWorker();
        this.worker.addEventListener('message', this.setStateFromStore);
        this._mounted = true;
    }

    componentWillUnmount() {
        this.worker.removeEventListener('message', this.setStateFromStore);
    }

    render(){
        if(!this._mounted) { return <div>loading</div>;}
        const {children} = this.props;
        const {dispatch, state} = this;
        const childWithProps = cloneElement(Children.only(children), {dispatch, ...state});
        return <div>{childWithProps}</div>;
    }

}

export default StoreConnector;
