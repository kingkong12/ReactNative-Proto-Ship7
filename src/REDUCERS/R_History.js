import { HistoryId } from '../ACTIONS/types.js';

const InitialState = {
    selectedHistoryId: '', 
}; 

export default (state = InitialState, action) => { 
    
    switch (action.type) {
        case HistoryId: 
            return { ...state, selectedHistoryId: action.payload }; 

        default: 
            return state;
    }
};
