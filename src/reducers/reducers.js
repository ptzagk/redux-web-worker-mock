'use strict';

import _ from 'lodash/fp';
import {ADD_ITEM, COMPLETE_ITEM, SET_VISIBILITY_FILTER} from '../actions/actionTypes';
import {visibilityFilters} from '../constants/constants';

export const items = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, {
                id: _.uniqueId(),
                label: action.label,
                done: false
            }];
        case COMPLETE_ITEM:
            return _.map(item => ({...item, done: action.id === item.id ? true : item.done}), state);

        default:
            return state;
    }
};

export const filter = (state = visibilityFilters.ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
};
