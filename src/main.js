'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import StoreConnector from './components/StoreConnector';

render(
    <StoreConnector><App /></StoreConnector>,
    document.querySelector('#container')
);
