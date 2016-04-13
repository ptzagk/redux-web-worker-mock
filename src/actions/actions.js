'use strict';

import { ADD_ITEM, COMPLETE_ITEM, SET_VISIBILITY_FILTER } from './actionTypes';

export const addItem = label => ({ label, type: ADD_ITEM });
export const completeItem = id => ({ id, type: COMPLETE_ITEM });
export const setVisibilityFilter = filter => ({ filter, type: SET_VISIBILITY_FILTER });
