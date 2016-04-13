'use strict';

import React, {Component, Children, cloneElement} from 'react';
import {render} from 'react-dom';
import {addItem, setVisibilityFilter} from './actions/actions'

const StoreWorker = require('worker!./workers/index');

class WorkerHOC extends Component {

    constructor() {
        super();
        this.state = {};
    }

    dispatch(msg) {
        this.worker.postMessage(msg);
    }

    componentDidMount() {
        // init worker
        this.worker = new StoreWorker();
        this.worker.addEventListener('message', msg => {
            this.setState(msg.data);
        });
    }

    render() {
        const childrenWithProps = Children
            .map(this.props.children,
                child => cloneElement(child, {...this.state, dispatch: this.dispatch.bind(this)})
            );
        return <div>{childrenWithProps}</div>;
    }

}

class App extends Component {

    addItem() {
        this.props.dispatch(addItem(this.refs.newLabel.value));
    }

    changeFilter(){
        this.props.dispatch(setVisibilityFilter(this.refs.selectFilter.value));
    }

    render() {
        const {items, filters, selectedFilter} = this.props;

        return (

            <div>
                {filters && (
                    <select value={selectedFilter} onChange={this.changeFilter.bind(this)} ref="selectFilter" style={{
                    display: 'block'
                    }}>
                        {filters.map(filter => <option key={filter} value={filter}>{filter}</option>)}
                    </select>
                )}

                <input type="text" ref="newLabel"/> <button onClick={this.addItem.bind(this)}>add</button>

                <ul>
                    {items && items.map(item => <li key={item.id}>{item.label}</li>)}
                </ul>

            </div>
        )
    }

}

render(
    <WorkerHOC><App /></WorkerHOC>,
    document.querySelector('#container')
)
