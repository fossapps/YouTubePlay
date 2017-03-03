import {createStore} from 'redux';
import {wrapStore} from 'react-chrome-redux';

import rootReducer from './reducers';
import Config from './Config';

const store = createStore(rootReducer, {});

wrapStore(store, {portName: Config.getPortName()});
