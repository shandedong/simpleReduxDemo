import { assignObj } from '../utils';

const initState = {
    count: 0
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'add':
            return assignObj(state, { count: state.count - 1 });
        case 'subtraction':
            return assignObj(state, { count: state.count -1 });
        default:
            return state;
    }
}
