'use strict';

import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
const StoreWorker = require('worker!./workers/index');



render(
    <Provider><App /></Provider>,
    document.querySelector('#container')
);
