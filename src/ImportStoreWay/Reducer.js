import { assignObj } from '../utils';

const initState = {
    count: 0,
    list: [1, 2, 3, 4]
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'increment':
            return assignObj(state, { count: state.count + 1 });
            return state.count + 1;
        case 'decrement':
            return assignObj(state, { count: state.count - 1 });
        default:
            return state;
    }
}
