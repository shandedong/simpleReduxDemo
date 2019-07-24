import React, { Component } from 'react';

import ReactRedux1 from './components/ReactRedux1';
import ReactRedux2 from './components/ReactRedux2';

import store from './Store';

import { Provider } from 'react-redux';

class ReactRedux extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <ReactRedux1 />

                    <ReactRedux2 />
                </Provider>
            </div>
        )
    }
}

export default ReactRedux;
