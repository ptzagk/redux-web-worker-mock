'use strict';

import { createSelector } from 'reselect';
import { visibilityFilters } from '../constants/constants';
import _ from 'lodash/fp';


const getItems = state => state.items;
const getFilter = state => state.filter;
const getFilters = state => Object.keys(visibilityFilters);

const displayedItems = createSelector(
    [getItems, getFilter],
    (items, filter) => {

        switch (filter){

            case visibilityFilters.DONE:
                return _.filter(item => item.done, items);

            case visibilityFilters.UNDONE:
                return _.filter(item => !item.done, items);

            default:
                return items;
        }

    }
);

const selectors = createSelector(
    [displayedItems, getFilter, getFilters],
    (items, selectedFilter, filters) => ({
        items,
        selectedFilter,
        filters
    })
);

export default selectors;
