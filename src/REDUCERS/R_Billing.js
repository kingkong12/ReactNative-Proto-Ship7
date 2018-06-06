import { BillingId } from '../ACTIONS/types.js';

const InitialState = {
    selectedBillingId: '', 
}; 

export default (state = InitialState, action) => {
    
    switch (action.type) {
        case BillingId: 
            return { ...state, selectedBillingId: action.payload }; 
        default: 
            return state;
    }
};