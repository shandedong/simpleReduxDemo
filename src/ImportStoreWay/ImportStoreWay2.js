import React from 'react';

import store from './Store';

export default class ImportStoreWay2 extends React.Component {
    state = {
        count: 0
    }

    componentDidMount() {
        store.subscribe(() => this.setState({ count: store.getState().count }));
    }

    render() {
        return (
            <div>
                <h5>importstoreway2</h5>
                <h6 className="text-center">stateCount: {this.state.count}</h6>
                <h6 className="text-center">storeCount: {store.getState().count}</h6>
                <p className="text-center">
                    <button onClick={() => store.dispatch({ type: 'increment' })} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={() => store.dispatch({ type: 'decrement' })} className="btn btn-danger my-2">Decrease</button>
                </p>
            </div>
        )
    }
}
