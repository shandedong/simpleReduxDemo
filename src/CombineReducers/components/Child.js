import React, { Component } from 'react';

import { connect } from 'react-redux';

class Child extends Component {
    componentDidMount() {
        console.log(this.props, 'combineReducer props');
    }

    changeList = () => {
        const { dispatch } = this.props;

        const list = [];

        for(let i = 0; i < 4; i++) {
            list.push(Math.ceil(Math.random() * 10));
        }

        dispatch({
            type: 'changeList',
            list
        });
    }

    render() {
        console.log(this.props);
        const { count, list, dispatch } = this.props;

        return (
            <div>
                <h5>combineReducers-通过provider注入</h5>
                <h6 className="text-center">storeCount: { count }</h6>
                <h6 className="text-center">list: { list.toString() }</h6>
                <p className="text-center">
                    <button onClick={() => { dispatch({ type: 'add' }) }} className="btn btn-primary mr-2">Increase</button>
                    <button onClick={() => { dispatch({ type: 'subtraction' }) }} className="btn btn-danger mr-2">Decrease</button>
                    <button onClick={this.changeList} className="btn btn-danger my-2">changeList</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { Reducer, Reducer2 } = state;
    const { count } = Reducer;
    const { list } = Reducer2;
    return {
        count,
        list
    }
}

export default connect(mapStateToProps)(Child);
