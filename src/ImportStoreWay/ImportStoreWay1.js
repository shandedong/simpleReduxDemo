import React, { Component } from 'react';

import store from './Store.js';

import './count.less';

class ImportStoreWay1 extends Component {
    state = {
        count: store.getState().count
    }

    componentDidMount() {
        // store.subscribe(() => console.log(store.getState(), 'store updata'));

        store.subscribe(() => this.setState({ count: store.getState().count }));
    }

    onIncrease = () => {
        store.dispatch({
            type: 'increment'
        });
    }


    onDecrease = () => {
        store.dispatch({
            type: 'decrement'
        });
    }

    render() {
        // store.getState() 是用来获取 store 中的 state 值
        console.log(store.getState());

        // store.subscribe() 方法是用来监听 store 中 state 值; 如果 state 被改变，它就会被触发，所以这个方法接收的是一个函数。subscribe() 方法也可以写到 componentDidMount() 里面
        // 需要在subscribe接收的函数里进行 this.setState 来触发render方法； 否则尽管store里面的数据已经改变，但页面不会更新。
        
        // store.subscribe(() => console.log(store.getState(), 'update  store'));

        return (
            <div className="count">
                <h5>importstoreway1</h5>
                <h6 className="text-center">stateCount: {this.state.count}</h6>
                <h6 className="text-center">storeCount: {store.getState().count}</h6>
                <p className="text-center">
                    <button onClick={this.onIncrease} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={this.onDecrease} className="btn btn-danger my-2">Decrease</button>
                </p>
            </div>
        )
    }
}

export default ImportStoreWay1;
