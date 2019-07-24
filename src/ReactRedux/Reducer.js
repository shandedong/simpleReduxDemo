import { assignObj } from '../utils';

const initState = {
    count: 0,
    list: [1, 2, 3, 4]
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'add':
            return assignObj(state, { count: state.count + 1 });
        case 'subtraction':
            return assignObj(state, { count: state.count -1 });
        case 'changeList':
            return assignObj(state, { list: action.list });
        default:
            return state;
    }
};


