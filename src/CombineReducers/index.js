import React, { Component } from 'react';

import { Provider } from 'react-redux';

import store from './Store';

import Child from './components/Child';

class CombineReducers extends Component {
    render() {
        return (
            <Provider store={store}>
                <Child />
            </Provider>
        )
    }
}

export default CombineReducers;
