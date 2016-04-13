'use strict';

import React, {Component, PropTypes} from 'react';
import {addItem, setVisibilityFilter} from '../actions/actions';

class App extends Component {

    static propTypes = {
        // TODO during, the first rendering, dispatch is not provided...
        dispatch: PropTypes.func
    };

    addItem() {
        this.props.dispatch(addItem(this.refs.newLabel.value));
    }

    changeFilter() {
        this.props.dispatch(setVisibilityFilter(this.refs.selectFilter.value));
    }

    render() {
        const {items, filters, selectedFilter} = this.props;
        // We have props properly set but how to pass them through children ?
        return (
            <div>
                <h1>Test</h1>
                <select value={selectedFilter} onChange={this.changeFilter.bind(this)} ref="selectFilter" style={{
                    display: 'block'
                    }}>
                    {filters.map(filter => <option key={filter} value={filter}>{filter}</option>)}
                </select>
                <input type="text" ref="newLabel"/>
                <button onClick={this.addItem.bind(this)}>add</button>
                <ul>
                    {items && items.map(item => <li key={item.id}>{item.label}</li>)}
                </ul>
            </div>
        );
    }
}

export default App;
