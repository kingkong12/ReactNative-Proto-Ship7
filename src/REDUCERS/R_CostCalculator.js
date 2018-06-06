import { COST_CALCULATOR } from '../ACTIONS/types.js';

const InitialState = {
    originState: '', 
      destinationState: '', 
      selectedIndex: '', 
      weightState: '', 
      lengthState: '',
      widthSate: '',
      heightState: ''
}; 

export default (state = InitialState, action) => {    
    switch (action.payload) {
        default:         
        return state;
    }    

};

