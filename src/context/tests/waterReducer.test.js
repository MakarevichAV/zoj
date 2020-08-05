import waterReducer from '../reducers/waterReducer';
import {addGlass} from '../actions/waterActions';
// import ReactDom from 'react-dom';
// import React from 'react';

it('value of sum should be incremented by received value', () => {
    // 1. test data
        // initial state
    let state = {
        sum: 0.5,
        num: [300, 200]
    }
        // передаваемые данные в action
    let data = {
        sum: state.sum,
        val: 500,
        num: state.num
    };

    // 2. action
    let action = addGlass(data);
    let newState = waterReducer(state, action);

    // 3. expectation
    expect(newState.sum - state.sum).toBe(data.val / 1000);
});

// 1л и [300, 200, 500]
// на выходе newSum - oldSum = val