import React, { Component } from 'react';

import { connect } from 'react-redux';

// 将action单独抽离出来
import * as Action from '../Action';

class ReactRedux2 extends Component {
    componentDidMount() {
        console.log(this.props, 'reactredux2 componentdidmount');
    }

    render() {
        const { count, list, add, subtraction } = this.props;
        return (
            <div>
                <h5>reactredux2-通过provider注入（并在connect函数中传入Action）</h5>
                <h6 className="text-center">storeCount: { count }</h6>
                <h6 className="text-center">list: { String(list) }</h6>
                <p className="text-center">
                    {/* <button onClick={this.props.dispatch(Action.add())} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={this.props.dispatch(Action.subtraction)} className="btn btn-danger my-2">Decrease</button> */}
                    <button onClick={add} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={subtraction} className="btn btn-danger my-2">Decrease</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count,
    list: state.list
});

// 在connect函数中将上面的Action传入，就不需要手动派发action，直接调用就可以了  onClick={add} onClick={substraction}； 此时props中就没有dispatch函数了。
export default connect(mapStateToProps, Action)(ReactRedux2);
