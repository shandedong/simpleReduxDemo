import { assignObj } from '../utils';

const initState = {
    list: [1, 2, 3, 4]
};

const Reducer2 = (state = initState, action) => {
    switch (action.type) {
        case 'changeList':
            return assignObj(state, { list: action.list });
        default:
            return state;
    } 
}

export default Reducer2;
